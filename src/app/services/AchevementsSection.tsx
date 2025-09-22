"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Users, CheckCircle, Calendar } from "lucide-react";

const achievements = [
  { title: "Projects Completed", value: 120, icon: Trophy },
  { title: "Happy Clients", value: 85, icon: Users },
  { title: "Awards Won", value: 15, icon: CheckCircle },
  { title: "Years of Experience", value: 10, icon: Calendar },
];

export default function AchievementsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" }); // triggers a bit early
  const [counts, setCounts] = useState<number[]>(achievements.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500; // animation duration in ms
    const frameRate = 60; // frames per second
    const totalFrames = Math.round((duration / 1000) * frameRate);

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      setCounts(
        achievements.map((a) =>
          Math.min(Math.round((a.value / totalFrames) * frame), a.value)
        )
      );
      if (frame === totalFrames) clearInterval(interval);
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      className="relative py-20 overflow-hidden text-gray-900 bg-gradient-to-b from-[#f9fafb] via-[#f3f4f6] to-[#e5e7eb]"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
    >
      {/* Floating pastel shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Over the years, we’ve built a track record of success. From projects delivered on time to satisfied clients worldwide, our achievements speak for themselves.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-extrabold text-indigo-600 mb-2">
                {counts[i]}+
              </h3>
              <p className="text-gray-700 text-sm">{item.title}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-500 mt-10 max-w-xl mx-auto">
          Every number reflects our commitment to excellence, client satisfaction, and industry expertise.
        </p>
      </div>
    </motion.section>
  );
}
