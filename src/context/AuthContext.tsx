'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string | null;
  company?: string | null;
  avatar?: string | null;
  createdAt: string;
  role?: string | null;
  emailVerified?: boolean;
  isAdmin?: boolean;
  lastLogin?: string | null;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  socialLogin: (
    provider: 'google' | 'github' | 'microsoft',
    email?: string,
    name?: string,
  ) => Promise<void>;
  signup: (
    name: string,
    email: string,
    password: string,
    phone?: string,
    company?: string,
  ) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const response = await fetch('/api/auth/me', { cache: 'no-store' });
      const data = await response.json();
      setUser(data.user ?? null);
    } catch (error) {
      console.error('Unable to refresh auth state:', error);
      setUser(null);
    }
  };

  useEffect(() => {
    const hydrateUser = async () => {
      await refreshUser();
      setIsLoading(false);
    };

    void hydrateUser();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      setUser(data.user as User);
    } catch (error) {
      console.error('Login error:', error);
      throw error instanceof Error ? error : new Error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const socialLogin = async (
    provider: 'google' | 'github' | 'microsoft',
    email?: string,
    name?: string,
  ) => {
    setIsLoading(true);

    try {
      const providerEmail = email || `${provider}-${Date.now()}@mweshglobal.com`;
      const providerName = name || `${provider.charAt(0).toUpperCase()}${provider.slice(1)} User`;

      const response = await fetch('/api/auth/social', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          provider,
          email: providerEmail,
          name: providerName,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Social login failed');
      }

      setUser(data.user as User);
    } catch (error) {
      console.error('Social login error:', error);
      throw error instanceof Error ? error : new Error('Unable to continue with this provider');
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (
    name: string,
    email: string,
    password: string,
    phone?: string,
    company?: string,
  ) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, phone, company }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      setUser(data.user as User);
    } catch (error) {
      console.error('Signup error:', error);
      throw error instanceof Error ? error : new Error('Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);

    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    socialLogin,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
