"use client";

import { motion } from "framer-motion";

export default function SecuritySection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#2f195f] via-[#120d2e] to-[#0d1117] text-white flex items-center justify-center">
      <motion.div
        className="max-w-2xl px-6 text-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.2 }} // 👈 re-triggers when scrolling back
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
          Built-in application security where it matters
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6">
          Use AI to find and fix vulnerabilities—freeing your teams to ship more secure software faster.
        </p>

        <button className="rounded-lg bg-[#3FB950] px-6 py-3 font-semibold text-white hover:bg-[#48c95a] transition">
          Learn More
        </button>
      </motion.div>
    </section>
  );
}
