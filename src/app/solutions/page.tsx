"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FooterSection } from "@/components/FooterSection";
import GlareHover from "@/components/GlareHover";

// Solution data
const solutions = [
  {
    title: "SaaS Platforms",
    description:
      "Multi-tenant applications with integrated billing, analytics, and user management.",
  },
  {
    title: "E-commerce",
    description:
      "Headless storefronts with payments, inventory management, and omni-channel experiences.",
  },
  {
    title: "Internal Tools",
    description:
      "Custom admin dashboards and automated workflows to streamline operations.",
  },
  {
    title: "Integrations",
    description:
      "Seamless connections with CRMs, ERPs, and third-party services via webhooks and data sync.",
  },
  {
    title: "Automation",
    description:
      "RPA, scheduled jobs, and AI agents to eliminate manual tasks and boost efficiency.",
  },
  {
    title: "Performance",
    description:
      "Comprehensive audits, caching strategies, edge deployment, and CDN optimization.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-gray-100 overflow-hidden">
        {/* Geometric background */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M40 0H0V40"
                  fill="none"
                  stroke="rgba(0,0,0,0.05)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-32">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-3 text-muted-foreground max-w-3xl"
          >
            Tailored software solutions for startups and enterprises.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative mx-auto max-w-7xl px-6 lg:px-12 mt-12 pb-20">
        {/* Descriptive text above the cards */}
        <motion.div
          className="max-w-4xl mx-auto mb-8 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        {/* Solutions Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-7xl mx-auto">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
                <div className="relative w-full h-48 rounded-xl bg-gray-800 cursor-pointer overflow-hidden">
                  {/* Title always on top */}
                  <h3 className="absolute top-3 left-3 text-lg font-semibold text-white z-20">
                    {solution.title}
                  </h3>

                  {/* Description overlay */}
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center text-center text-white text-sm opacity-0 transition-opacity duration-500 hover:opacity-100 p-4">
                    {solution.description}
                  </div>
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-input hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2"
          >
            Contact Us
          </Link>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2"
          >
            Get a Quote
          </Link>
        </section>

        {/* Optional Animated Background Blobs */}
        <div className="absolute top-0 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 opacity-20 blur-3xl animate-blob -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] rounded-full bg-gradient-to-tr from-yellow-100 via-green-100 to-cyan-100 opacity-20 blur-3xl animate-blob animation-delay-2000 -z-10"></div>

        <style jsx>{`
          @keyframes blob {
            0%,
            100% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </main>

      <FooterSection />
    </>
  );
}
