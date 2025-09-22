"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturesAndTestimonials() {
  return (
    <motion.section
      className="relative py-20 bg-gradient-to-b from-[#2f195f] via-[#120d2e] to-[#0d1117] text-white"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2 }} // animates every time it's scrolled into view
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Feature Section */}
        <motion.div
          className="grid gap-12 md:grid-cols-2 items-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.2 }}
        >
          {/* Left: Feature Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              Work 55% faster
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              Increase productivity with AI-powered coding assistance, including
              code completion, chat, and more.
            </p>
            <Link
              href="/ai-copilot"
              className="inline-block rounded-lg bg-[#3FB950] px-6 py-3 font-semibold text-white hover:bg-[#48c95a] transition"
            >
              Explore AI Copilot
            </Link>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mt-20 grid gap-12 md:grid-cols-3 text-gray-300"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ amount: 0.2 }}
        >
          {/* Testimonial 1 */}
          <motion.div
            className="p-6 rounded-xl bg-white/5 shadow-md hover:bg-white/10 transition"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-semibold text-white mb-2">Duolingo</h3>
            <p>Duolingo boosts developer speed by 25% with AI Copilot.</p>
            <Link
              href="/customer-stories/duolingo"
              className="mt-4 text-sm text-[#3FB950] font-medium hover:underline block"
            >
              Read customer story
            </Link>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            className="p-6 rounded-xl bg-white/5 shadow-md hover:bg-white/10 transition"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-semibold text-white mb-2">Gartner</h3>
            <p>2025 Gartner® Magic Quadrant™ for AI Code Assistants.</p>
            <Link
              href="/industry-reports/gartner"
              className="mt-4 text-sm text-[#3FB950] font-medium hover:underline block"
            >
              Read industry report
            </Link>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            className="p-6 rounded-xl bg-white/5 shadow-md hover:bg-white/10 transition"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-semibold text-white mb-2">Your Customer</h3>
            <p>Describe another customer success story here.</p>
            <Link
              href="/customer-stories/another-customer"
              className="mt-4 text-sm text-[#3FB950] font-medium hover:underline block"
            >
              Read story
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
