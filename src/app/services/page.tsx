'use client';

import React from 'react';
import { Navbar, Footer } from '@/components';
import { Button } from '@material-tailwind/react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications designed for growth, clarity, and performance across every customer touchpoint.',
    icon: '🌐',
    features: ['React', 'Next.js', 'TypeScript', 'Full Stack'],
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile experiences built for speed, usability, and reliable access anywhere.',
    icon: '📱',
    features: ['React Native', 'Flutter', 'iOS', 'Android'],
    accent: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Cloud Solutions',
    description: 'Secure cloud systems and deployment infrastructure engineered for scale, automation, and resilience.',
    icon: '☁️',
    features: ['AWS', 'Firebase', 'Docker', 'Kubernetes'],
    accent: 'from-sky-500 to-indigo-500',
  },
  {
    title: 'AI/ML Solutions',
    description: 'Smart automation and predictive tools that help businesses improve decisions, speed, and delivery.',
    icon: '🤖',
    features: ['Python', 'TensorFlow', 'Data Science', 'Analytics'],
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'UI/UX Design',
    description: 'Elegant interfaces built around customer insight, convertibility, and premium digital polish.',
    icon: '🎨',
    features: ['Figma', 'Design Systems', 'Prototyping', 'UX Research'],
    accent: 'from-pink-500 to-rose-500',
  },
  {
    title: 'DevOps & Security',
    description: 'Operational support and security workflows that keep your platform stable, compliant, and protected.',
    icon: '🔒',
    features: ['CI/CD', 'Security Audit', 'Monitoring', 'Backup'],
    accent: 'from-amber-500 to-orange-500',
  },
];

export default function Services() {
  return (
    <div>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-white text-4xl md:text-6xl font-bold">
            Our Services
          </h1>
          <p className="text-blue-100 text-lg">
            Strategic digital solutions that elevate brands, systems, and user experiences.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <article
                key={idx}
                className="shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 transform duration-300 overflow-hidden rounded-2xl border border-white/60 bg-white"
              >
                <div className={`bg-gradient-to-br ${service.accent} p-6 text-white`}>
                  <div className="text-5xl mb-3">{service.icon}</div>
                  <h5 className="text-white text-xl font-bold">
                    {service.title}
                  </h5>
                </div>

                <div className="p-6">
                  <p className="mb-5 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <p className="font-semibold text-slate-700 mb-2 block text-sm">
                      Key skills:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button fullWidth className="bg-slate-900 hover:bg-slate-800 text-white">
                    Learn More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
