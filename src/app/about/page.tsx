"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FooterSection } from "@/components/FooterSection";
import {
  Rocket,
  Users,
  ShieldCheck,
  Trophy,
  Clock,
  Headphones,
} from "lucide-react";
import GlareHover from "@/components/GlareHover";

export default function AboutPage() {
  const values = [
    {
      title: "Innovation",
      desc: "We embrace new ideas and technologies to stay ahead.",
      icon: Rocket,
      img: "/images/innovation.avif", // <-- your image
    },
    {
      title: "Collaboration",
      desc: "Teamwork is at the core of everything we do.",
      icon: Users,
      img: "/images/collab.avif",
    },
    {
      title: "Integrity",
      desc: "Transparency and honesty in every step.",
      icon: ShieldCheck,
      img: "/images/integrity.avif",
    },
    {
      title: "Excellence",
      desc: "We deliver top-quality solutions that matter.",
      icon: Trophy,
      img: "/images/excellence.avif",
    },
  ];

  const expertise = [
    {
      title: "Senior Engineering",
      desc: "Decades of combined experience building systems that scale.",
      img: "/images/engineer.avif",
    },
    {
      title: "Clear Communication",
      desc: "Transparent, frequent updates to keep alignment at every step.",
      img: "/images/communication.avif",
    },
    {
      title: "On-time Delivery",
      desc: "Reliable execution with clear milestones and ownership.",
      img: "/images/longterm.avif",
    },
    {
      title: "Long-term Support",
      desc: "We stay engaged post-launch with maintenance and iteration.",
      img: "/images/longtermsupport.avif",
    },
  ];

  const team = [
    {
      name: "Alice Johnson",
      role: "CEO",
      image: "https://i.pravatar.cc/300?img=1",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Bob Smith",
      role: "CTO",
      image: "https://i.pravatar.cc/300?img=2",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Carol White",
      role: "Lead Engineer",
      image: "https://i.pravatar.cc/300?img=3",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/photo-1.avif')",
          fontFamily: "tungstenw05-medium, Oswald, sans-serif",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white"
          >
            About Link Innovations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg text-gray-200"
          >
            Driving innovation, building scalable solutions, and creating real
            impact for businesses worldwide.
          </motion.p>
        </div>
      </section>

      <main className="relative mx-auto max-w-7xl px-6 pt-20 pb-20 lg:px-12">
        {/* Mission Section */}
        <section
          className="text-center"
          style={{ fontFamily: "tungstenw05-medium, Oswald, sans-serif" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-semibold"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            To build scalable, innovative, and reliable software that empowers
            businesses to thrive in the digital era. We focus on quality, speed,
            and impactful results.
          </motion.p>
        </section>

        {/* Values Section */}
        <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3} // noticeable glare
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
                <div
                  className="group relative w-full h-48 rounded-xl cursor-pointer overflow-hidden shadow-md hover:shadow-2xl transition-all bg-cover bg-center"
                  style={{ backgroundImage: `url(${v.img})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gray-500/30 group-hover:bg-gray-800/70 rounded-xl transition-colors duration-500"></div>

                  {/* Title - top center */}
                  <h3 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-white z-20 transition-opacity duration-500 group-hover:opacity-0 whitespace-nowrap overflow-hidden text-ellipsis">
                    {v.title}
                  </h3>

                  {/* Description overlay */}
                  <div className="absolute inset-0 flex items-center justify-center text-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 rounded-xl">
                    {v.desc}
                  </div>
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </section>

        {/* Expertise Section */}
        <section className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
          {expertise.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3} // noticeable glare
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
                <div
                  className="group relative w-full h-48 rounded-xl cursor-pointer overflow-hidden shadow-md hover:shadow-2xl transition-all bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.img})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gray-500/30 group-hover:bg-gray-800/70 rounded-xl transition-colors duration-500"></div>

                  {/* Title - top center */}
                  <h3 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-white z-20 transition-opacity duration-500 group-hover:opacity-0 whitespace-nowrap overflow-hidden text-ellipsis">
                    {card.title}
                  </h3>

                  {/* Description overlay */}
                  <div className="absolute inset-0 flex items-center justify-center text-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 rounded-xl">
                    {card.desc}
                  </div>
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </section>

        {/* Leadership Section */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-semibold">Leadership</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      className="text-white underline"
                    >
                      LinkedIn
                    </Link>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="relative z-10 mt-20 text-center rounded-2xl bg-cover bg-center min-h-[400px] flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/photo-2.webp')",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

          <div className="relative z-10 max-w-3xl px-6">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Let’s Build the Future Together
            </motion.h2>

            <p className="mt-4 text-lg text-gray-100 max-w-xl mx-auto">
              Partner with us to bring innovation and scale into your business
              journey.
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="rounded-lg bg-white text-primary px-6 py-3 text-lg font-medium shadow-md hover:bg-gray-100 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
