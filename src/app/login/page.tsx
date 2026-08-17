'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Button, Input } from '@material-tailwind/react';

const socialProviders = [
  { label: 'Continue with Google', provider: 'google', style: 'border-red-200 text-red-600 hover:bg-red-50' },
  { label: 'Continue with GitHub', provider: 'github', style: 'border-gray-300 text-gray-700 hover:bg-gray-50' },
  { label: 'Continue with Microsoft', provider: 'microsoft', style: 'border-blue-200 text-blue-600 hover:bg-blue-50' },
] as const;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, socialLogin } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError('Please enter a valid email');
        return;
      }

      await login(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'github' | 'microsoft') => {
    setError('');
    setIsLoading(true);

    try {
      await socialLogin(provider);
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Social login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="mb-8 text-center">
          <h3 className="mb-2 text-blue-700 text-3xl font-bold">
            Welcome Back
          </h3>
          <p className="text-gray-600">
            Mwesh Developers Global
          </p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">
              {error}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block font-semibold text-gray-700 text-sm">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="w-full"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700 text-sm">
              Password
            </label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="w-full"
            />
          </div>

          <Button
            type="submit"
            fullWidth
            disabled={isLoading}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="space-y-3">
          {socialProviders.map(({ label, provider, style }) => (
            <Button
              key={provider}
              fullWidth
              variant="outlined"
              className={`${style} rounded-xl font-medium shadow-sm`}
              onClick={() => handleSocialLogin(provider)}
              disabled={isLoading}
            >
              {label}
            </Button>
          ))}
        </div>

        <div className="text-center space-y-3 mt-6">
          <p className="text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-blue-600 font-semibold hover:text-blue-700">
              Sign up
            </Link>
          </p>
          <p className="text-gray-500 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
