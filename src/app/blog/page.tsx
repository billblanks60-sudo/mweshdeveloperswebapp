'use client';

import React, { useState } from 'react';
import { Navbar, Footer } from '@/components';
import { Button } from '@material-tailwind/react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging technologies and trends in web development',
    date: 'Dec 15, 2024',
    author: 'Leah Mwende',
    category: 'Technology',
    image: '🚀',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Best Practices for Cloud Security',
    excerpt: 'Strong security design for resilient, scalable digital operations',
    date: 'Dec 10, 2024',
    author: 'Theophilus Mbugua',
    category: 'Security',
    image: '🔒',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Introduction to AI/ML',
    excerpt: 'Getting started with machine learning and artificial intelligence',
    date: 'Dec 5, 2024',
    author: 'Grace Njoki',
    category: 'AI',
    image: '🤖',
    readTime: '8 min read',
  },
  {
    id: 4,
    title: 'React Hooks Deep Dive',
    excerpt: 'Understanding and mastering React Hooks for modern development',
    date: 'Nov 30, 2024',
    author: 'Victor Kamau',
    category: 'Development',
    image: '⚛️',
    readTime: '6 min read',
  },
  {
    id: 5,
    title: 'Mobile-First Design Strategy',
    excerpt: 'Creating responsive designs that prioritize mobile users',
    date: 'Nov 25, 2024',
    author: 'Asha Wanjiku',
    category: 'Design',
    image: '📱',
    readTime: '4 min read',
  },
  {
    id: 6,
    title: 'DevOps Automation Essentials',
    excerpt: 'Streamlining your development workflow with automation',
    date: 'Nov 20, 2024',
    author: 'Daniel Otieno',
    category: 'DevOps',
    image: '⚙️',
    readTime: '7 min read',
  },
];

export default function Blog() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('Please enter a valid email to subscribe.');
      return;
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Subscription failed');
      }

      setStatus(data.message || 'Thank you! You are now subscribed to our daily newsletter.');
      setEmail('');
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Unable to subscribe right now.');
    }
  };

  return (
    <div>
      <Navbar />

      <section className="bg-gradient-to-r from-orange-600 via-red-500 to-rose-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-white text-4xl md:text-6xl font-bold">
            Blog
          </h1>
          <p className="text-orange-100 text-lg">
            Insights, tips, and stories from the Mwesh Developers Global team.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="shadow-lg hover:shadow-2xl transition-all hover:scale-105 transform duration-300 overflow-hidden rounded-2xl bg-white border border-slate-200"
              >
                <div className="bg-gradient-to-r from-orange-400 to-red-400 h-32 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {post.readTime}
                    </span>
                  </div>

                  <h6 className="mb-3 text-gray-800 text-lg font-semibold">
                    {post.title}
                  </h6>

                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">
                        By {post.author}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {post.date}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-4 w-full rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
                  >
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 via-red-500 to-rose-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="mb-3 text-white text-3xl font-bold">
            Subscribe to Our Daily Newsletter
          </h3>
          <p className="mb-6 text-orange-100">
            Get the latest insights, product updates, and digital trends delivered to your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-3 md:flex-row">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-orange-600 transition hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>

          {status && (
            <p className="mt-4 block text-orange-50 text-sm">
              {status}
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
