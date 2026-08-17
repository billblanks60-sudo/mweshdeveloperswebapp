'use client';

import React from 'react';
import { Navbar, Footer } from '@/components';
import { Button } from '@material-tailwind/react';
import Image from 'next/image';

const team = [
  {
    name: 'Leah Mwende',
    role: 'Founder & CEO',
    bio: 'Leads business vision, client strategy, and product growth with a sharp focus on long-term impact.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Leah%20Mwende',
  },
  {
    name: 'Theophilus Mbugua',
    role: 'Chief Technical Officer',
    bio: 'Architects scalable platforms and technical delivery systems to translate bold ideas into reliable products.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Theophilus%20Mbugua',
  },
  {
    name: 'Grace Njoki',
    role: 'Head of Design',
    bio: 'Transforms concepts into premium digital experiences through thoughtful research and compelling interfaces.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Grace%20Njoki',
  },
  {
    name: 'Victor Kamau',
    role: 'Senior Full-Stack Engineer',
    bio: 'Builds polished features across product layers with a strong emphasis on maintainability and performance.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Victor%20Kamau',
  },
  {
    name: 'Asha Wanjiku',
    role: 'Product Manager',
    bio: 'Coordinates client needs, roadmap priorities, and operational execution to keep delivery on track.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Asha%20Wanjiku',
  },
  {
    name: 'Daniel Otieno',
    role: 'Cloud & DevOps Lead',
    bio: 'Secures deployment pipelines and infrastructure so every solution stays resilient, monitored, and fast.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel%20Otieno',
  },
];

export default function Team() {
  return (
    <div>
      <Navbar />

      <section className="bg-gradient-to-r from-indigo-900 via-violet-800 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-white text-4xl md:text-6xl font-bold">
            Our Leadership & Team
          </h1>
          <p className="text-violet-100 text-lg">
            Meet the people shaping digital experiences and scalable systems at Mwesh Developers Global.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <article
                key={idx}
                className="shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 overflow-hidden rounded-2xl bg-white border border-slate-200"
              >
                <div className="relative h-52 bg-gradient-to-br from-violet-500 via-indigo-500 to-sky-500">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h5 className="mb-1 text-slate-800 text-xl font-bold">
                    {member.name}
                  </h5>
                  <p className="mb-3 font-semibold text-violet-700 text-sm">
                    {member.role}
                  </p>
                  <p className="mb-4 text-slate-600">
                    {member.bio}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-white">
                      Connect
                    </Button>
                    <Button size="sm" variant="outlined" className="text-violet-600 border-violet-600">
                      Profile
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-violet-700 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="mb-4 text-white text-3xl font-bold">
            Join Our Mission
          </h3>
          <p className="mb-8 text-violet-100">
            We build modern digital products that move businesses forward with confidence and clarity.
          </p>
          <Button className="bg-white text-violet-700 hover:bg-slate-100">
            View Careers
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
