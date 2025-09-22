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
import AchievementsSection from "./AchevementsSection";
import { motion } from "framer-motion";
import EngagementModelsSection from "./EngagementModels";
import WhyChooseUs from "./WhyChooseUs";
import CaseStudiesSection from "./CaseStudies";

const services = [
  // Core Development
  {
    title: "Custom Software Development",
    desc: "Web apps, desktop software, and enterprise solutions tailored for your business.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    desc: "Native (iOS, Android) and cross-platform apps with modern UX.",
    icon: Smartphone,
  },
  {
    title: "Web Development",
    desc: "Full-stack solutions using React, Angular, Node.js, .NET, and more.",
    icon: Cloud,
  },
  {
    title: "Cloud & DevOps",
    desc: "AWS, Azure, GCP setups, CI/CD pipelines, observability, and IaC.",
    icon: Workflow,
  },

  // Advanced / Trending
  {
    title: "AI & Machine Learning",
    desc: "Chatbots, predictive analytics, NLP, computer vision, and AI integration.",
    icon: Wand2,
  },
  {
    title: "Data Engineering & Analytics",
    desc: "Data warehousing, Big Data pipelines, and BI dashboards.",
    icon: Database,
  },
  {
    title: "IoT & Embedded Solutions",
    desc: "Smart devices, wearables, and industrial IoT integrations.",
    icon: Shield,
  },
  {
    title: "Blockchain & Web3",
    desc: "Smart contracts, DApps, crypto wallets, and token integrations.",
    icon: Rocket,
  },

  // Business / Enterprise
  {
    title: "Enterprise Solutions",
    desc: "ERP, CRM, HRMS, PowerApps, SharePoint, and workflow automation.",
    icon: Workflow,
  },
  {
    title: "SaaS Development",
    desc: "End-to-end SaaS products with multi-tenancy, billing, and scaling.",
    icon: Cloud,
  },

  // QA & Support
  {
    title: "Software Testing & QA",
    desc: "Automated/manual testing, performance, and compliance audits.",
    icon: Shield,
  },
  {
    title: "Maintenance & Support",
    desc: "Bug fixes, performance optimization, and version upgrades.",
    icon: Code2,
  },

  // Add-ons
  {
    title: "UI/UX Design",
    desc: "Wireframes, prototyping, usability testing, and responsive design.",
    icon: Smartphone,
  },
  {
    title: "IT Consulting & Strategy",
    desc: "Tech roadmaps, architecture design, and legacy modernization.",
    icon: Cloud,
  },
  {
    title: "Dedicated Teams",
    desc: "Hire developers on-demand, remote/offshore development teams.",
    icon: Rocket,
  },
];

export default function ServicesPageClient() {
  return (
    <main className="relative min-h-screen w-full text-gray-800 overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-pink-50">
      {/* Subtle animated light blobs in background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <motion.section
        className="mx-auto max-w-4xl text-center py-20 px-6"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Build and ship software on a single, collaborative platform
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Join the world’s most widely adopted AI-powered developer platform.
        </p>

        {/* Email Signup & CTA */}
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
              className="absolute bottom-1 right-1 top-1 rounded bg-indigo-600 px-4 text-base font-semibold text-white hover:bg-indigo-700"
            >
              Sign up
            </Button>
          </form>
          <Button
            asChild
            variant="outline"
            className="h-12 w-full border-2 border-gray-800 bg-transparent px-6 text-base font-medium text-gray-900 hover:bg-gray-200 sm:w-auto transition-colors"
          >
            <Link href="/copilot">Try Our AI Copilot</Link>
          </Button>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-12">
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={title}
              className="group rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ amount: 0.2 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{desc}</p>
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
            className="inline-flex items-center justify-center rounded-lg border border-gray-400 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 transition"
          >
            Contact Us
          </Link>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
          >
            Get a Quote
          </Link>
        </motion.div>
      </section>

      {/* Additional Sections */}
      <TrustedCarousel />
      <VideoDemoSection />
      <EngagementModelsSection />
      <WhyChooseUs />
      <AchievementsSection />
      <CaseStudiesSection />
    </main>
  );
}
