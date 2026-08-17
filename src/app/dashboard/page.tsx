'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@material-tailwind/react';
import Image from 'next/image';

export default function Dashboard() {
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const stats = [
    { title: 'Account Status', value: 'Verified', icon: '✅', tone: 'text-emerald-600' },
    { title: 'Projects Active', value: '04', icon: '📊', tone: 'text-blue-600' },
    { title: 'Client Role', value: user.role || 'Client', icon: '👤', tone: 'text-violet-600' },
  ];

  const activities = [
    { activity: 'Updated account profile details', date: 'Just now', icon: '✏️' },
    { activity: 'Reviewed digital strategy roadmap', date: 'Today', icon: '📈' },
    { activity: 'Completed onboarding checklist', date: '2 days ago', icon: '🎉' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50">
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div>
            <h2 className="mb-2 text-white text-3xl font-bold">
              Dashboard
            </h2>
            <p className="text-blue-100">
              Welcome back, {user.name}.
            </p>
          </div>
          <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white">
            Logout
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8 shadow-xl rounded-2xl border border-slate-100 bg-white">
          <div className="p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-6">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-violet-200 shadow-lg">
                  <Image src={user.avatar} alt={user.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="mb-1 text-slate-800 text-2xl font-bold">
                    {user.name}
                  </h4>
                  <p className="text-slate-600">
                    {user.email}
                  </p>
                  <p className="mt-2 text-slate-500 text-sm">
                    Joined {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 p-4 text-left md:min-w-[220px]">
                <p className="text-slate-500 text-sm">Company</p>
                <h6 className="text-slate-800 text-lg font-semibold">
                  {user.company || 'Mwesh Developers Global'}
                </h6>
                <p className="mt-2 text-slate-500 text-sm">
                  {user.phone || 'No phone number added'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="shadow-lg hover:shadow-xl transition-shadow rounded-2xl bg-white border border-slate-200">
              <div className="p-6">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <p className="text-slate-600 mb-1">
                  {stat.title}
                </p>
                <h3 className={`text-3xl font-bold ${stat.tone}`}>
                  {stat.value}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="shadow-lg rounded-2xl bg-white border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h5 className="text-slate-800 text-xl font-bold">
              Recent Activity
            </h5>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {activities.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-slate-700">
                      {item.activity}
                    </p>
                  </div>
                  <span className="text-slate-500 text-sm">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
