"use client";

import {
  Rocket,
  Code2,
  Smartphone,
  Cloud,
  Shield,
  Database,
  Wand2,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TrustedCarousel from "./TrustedCarousel";
import VideoDemoSection from "./VideoDemoSection";
import FeaturesAndTestimonials from "./FeaturesAndTestimonials";
import SecuritySection from "./SecuritySection";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Web Development",
    desc: "High-performance websites and web apps using modern stacks.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    desc: "iOS/Android apps with native performance and great UX.",
    icon: Smartphone,
  },
  {
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure, CI/CD, observability, and cost optimization.",
    icon: Cloud,
  },
  {
    title: "Security & Compliance",
    desc: "App hardening, audits, and best-practice security workflows.",
    icon: Shield,
  },
  {
    title: "Data & Databases",
    desc: "Schema design, migrations, performance tuning, and analytics.",
    icon: Database,
  },
  {
    title: "AI Integrations",
    desc: "Practical AI features integrated into your product securely.",
    icon: Wand2,
  },
  {
    title: "Process Automation",
    desc: "Automate repetitive workflows to save time and cost.",
    icon: Workflow,
  },
  {
    title: "Product Launch & Growth",
    desc: "Go-to-market setup, analytics, and iterative improvement.",
    icon: Rocket,
  },
];

export default function ServicesPageClient() {
  return (
    <main className="relative min-h-screen w-full text-gray-200 overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 30%, #2f195f 0%, #120d2e 25%, #0d1117 50%)",
        }}
      />

      {/* Purple Glow */}
      <div
        className="absolute h-px w-px rounded-full bg-transparent -z-10"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 120px 120px rgba(124, 58, 237, 0.25)",
        }}
      />

      {/* Hero Section */}
      <motion.section
        className="mx-auto max-w-4xl text-center py-20 px-6"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Build and ship software on a single, collaborative platform
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-400">
          Join the world’s most widely adopted AI-powered developer platform.
        </p>

        {/* GitHub-style Email + Button */}
        <div className="mx-auto mt-8 flex w-full max-w-lg flex-col items-center justify-center gap-2 sm:flex-row">
          <form className="relative flex w-full flex-1 items-center">
            <label htmlFor="email-signup" className="sr-only">
              Enter your email
            </label>
            <Input
              id="email-signup"
              type="email"
              placeholder="Enter your email"
              className="h-12 w-full rounded-md border border-gray-300 bg-white pl-4 pr-[168px] text-base text-black placeholder:text-gray-500 focus-visible:ring-primary"
            />
            <Button
              type="submit"
              className="absolute bottom-1 right-1 top-1 rounded bg-[#3FB950] px-4 text-base font-semibold text-white hover:bg-[#48c95a]"
            >
              Sign up
            </Button>
          </form>
          <Button
            asChild
            variant="outline"
            className="h-12 w-full border-2 border-white bg-transparent px-6 text-base font-medium text-white hover:border-white hover:bg-white/20 sm:w-auto transition-colors"
          >
            <a href="/copilot" className="text-white hover:text-white">
              Try Our AI Copilot
            </a>
          </Button>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-12">
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={title}
              className="group rounded-xl bg-[#161b22] p-6 shadow-md hover:shadow-lg hover:bg-[#1c2128] transition duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ amount: 0.2 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-3 text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-800 transition"
          >
            Contact Us
          </Link>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Get a Quote
          </Link>
        </motion.div>
      </section>

      {/* Other Sections */}
      <TrustedCarousel />
      <VideoDemoSection />
      <FeaturesAndTestimonials />
      <SecuritySection />
    </main>
  );
}
