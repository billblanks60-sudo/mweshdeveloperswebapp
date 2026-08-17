'use client';

import { Button, Typography } from '@material-tailwind/react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

function Hero() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 animate-pulse" />

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="relative z-10 grid min-h-screen px-4 sm:px-8">
        <div className="container mx-auto my-auto flex flex-col items-center justify-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-block">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white text-sm font-semibold">
              🚀 Welcome to Mwesh Developers Global
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
            Transform Your Ideas Into Reality
          </h1>

          {/* Subheading */}
          <p className="mt-6 mb-12 w-full max-w-3xl text-lg sm:text-xl text-blue-100">
            We deliver cutting-edge software solutions with expertise in web development, mobile apps, cloud infrastructure, AI/ML, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-8">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-lg hover:shadow-2xl transition-all">
                    Go to Dashboard
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outlined"
                    className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-indigo-900 transition-all"
                  >
                    Explore Services
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/signup">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-lg hover:shadow-2xl transition-all">
                    Get Started
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outlined"
                    className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-indigo-900 transition-all"
                  >
                    Learn More
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
            {[
              { icon: '⚡', label: 'Fast Performance' },
              { icon: '🔒', label: 'Secure & Reliable' },
              { icon: '💡', label: 'Innovative Solutions' },
            ].map((feature, i) => (
              <div key={i} className="p-4 bg-white/10 rounded-lg backdrop-blur-md hover:bg-white/20 transition-all">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <p className="font-semibold text-white text-sm">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
