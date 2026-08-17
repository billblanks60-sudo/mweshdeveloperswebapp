'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Button, Input } from '@material-tailwind/react';

const socialProviders = [
  { label: 'Sign up with Google', provider: 'google', style: 'border-red-200 text-red-600 hover:bg-red-50' },
  { label: 'Sign up with GitHub', provider: 'github', style: 'border-gray-300 text-gray-700 hover:bg-gray-50' },
  { label: 'Sign up with Microsoft', provider: 'microsoft', style: 'border-blue-200 text-blue-600 hover:bg-blue-50' },
] as const;

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup, socialLogin } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { name, email, phone, company, password, confirmPassword } = formData;

      if (!name || !email || !password || !confirmPassword) {
        setError('Please fill in all required fields');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError('Please enter a valid email');
        return;
      }

      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      await signup(name, email, password, phone, company);
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed');
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
      setError(err instanceof Error ? err.message : 'Social sign-up failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-violet-900 to-pink-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">
        <div className="mb-8 text-center">
          <h3 className="mb-2 text-indigo-600 text-3xl font-bold">
            Create Account
          </h3>
          <p className="text-gray-600">
            Join Mwesh Developers Global
          </p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">
              {error}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block font-semibold text-gray-700 text-sm">
              Full Name
            </label>
            <Input
              type="text"
              name="name"
              placeholder="Leah Mwende"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-semibold text-gray-700 text-sm">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full"
              />
            </div>
            <div>
              <label className="mb-2 block font-semibold text-gray-700 text-sm">
                Phone Number
              </label>
              <Input
                type="tel"
                name="phone"
                placeholder="+254 712 345 678"
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700 text-sm">
              Company / Organization
            </label>
            <Input
              type="text"
              name="company"
              placeholder="Mwesh Developers Global"
              value={formData.company}
              onChange={handleChange}
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
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700 text-sm">
              Confirm Password
            </label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full"
            />
          </div>

          <Button
            type="submit"
            fullWidth
            disabled={isLoading}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all"
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
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
            Already have an account?{' '}
            <Link href="/login" className="text-indigo-600 font-semibold hover:text-indigo-700">
              Sign in
            </Link>
          </p>
          <p className="text-gray-500 text-sm">
            <Link href="/" className="text-indigo-600 hover:text-indigo-700">
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
