"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "500+",
    title: "Happy Clients",
  },
  {
    count: "150+",
    title: "Projects Delivered",
  },
  {
    count: "50+",
    title: "Team Members",
  },
  {
    count: "15+",
    title: "Years Experience",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <p className="mb-6 font-semibold text-blue-600 text-sm">
          Our Achievements
        </p>
        <h2 className="text-5xl font-bold leading-tight lg:w-3/4 text-blue-gray-900">
          Building Success Stories
        </h2>
        <p className="mt-3 w-full text-gray-600 lg:w-9/12 text-lg">
          With over 15 years of excellence, we've helped hundreds of businesses transform their ideas into powerful digital solutions that drive growth and innovation.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
