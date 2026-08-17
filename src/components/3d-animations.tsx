'use client';

import React, { Suspense } from 'react';

// 3D Animation Component using CSS animations
export const ThreeDFloat = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      className="animate-float"
    >
      {children}
    </div>
  );
};

// Rotating cube effect
export const RotatingBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        animation: 'rotateBox 10s infinite linear',
        transformStyle: 'preserve-3d',
      }}
      className="inline-block"
    >
      {children}
    </div>
  );
};

// Parallax scroll effect
export const ParallaxLayer = ({
  children,
  speed = 0.5,
}: {
  children: React.ReactNode;
  speed?: number;
}) => {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  );
};

// Animated gradient background
export const AnimatedGradientBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{
          animation: 'gradient-shift 8s ease infinite',
          backgroundSize: '200% 200%',
        }}
      />
    </div>
  );
};

// Floating particles effect
export const FloatingParticles = ({ count = 20 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-10"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

// Glowing orb
export const GlowingOrb = ({ color = 'blue' }) => {
  const colors: Record<string, string> = {
    blue: 'from-blue-400 to-blue-600',
    purple: 'from-purple-400 to-purple-600',
    pink: 'from-pink-400 to-pink-600',
  };

  return (
    <div className="relative w-64 h-64">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${colors[color]} rounded-full blur-3xl opacity-30 animate-blob`}
      />
      <div
        className={`absolute inset-12 bg-gradient-to-r ${colors[color]} rounded-full blur-2xl opacity-20 animate-pulse`}
      />
    </div>
  );
};

export default {
  ThreeDFloat,
  RotatingBox,
  ParallaxLayer,
  AnimatedGradientBg,
  FloatingParticles,
  GlowingOrb,
};
