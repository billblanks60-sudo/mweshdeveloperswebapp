'use client';

import { Typography } from '@material-tailwind/react';
import AboutCard from '@/components/about-card';

const EVENT_INFO = [
  {
    title: 'Expert Web Development',
    description:
      'Full-stack development using React, Next.js, TypeScript, and modern frameworks to build scalable, responsive applications.',
    subTitle: 'Web',
  },
  {
    title: 'Mobile-First Solutions',
    description:
      'Native and cross-platform mobile applications built with React Native and Flutter for iOS and Android.',
    subTitle: 'Mobile',
  },
  {
    title: 'Cloud Infrastructure',
    description:
      'AWS, Firebase, and containerized solutions (Docker, Kubernetes) for secure, scalable cloud deployment.',
    subTitle: 'Cloud',
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Intelligent automation, data science, and machine learning models to transform your business operations.',
    subTitle: 'AI/ML',
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <p className="text-center mb-2 font-semibold text-blue-600 text-sm">
        About Our Company
      </p>
      <h3 className="text-center text-3xl md:text-4xl font-bold mb-2 text-slate-900">
        Mwesh Developers Global
      </h3>
      <p className="mt-2 lg:max-w-4xl mb-12 w-full text-center font-normal text-gray-600">
        We are a team of passionate developers, designers, and innovators dedicated to delivering exceptional software solutions that drive business growth and digital transformation.
      </p>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Networking!"
            subTitle="Community"
            description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
