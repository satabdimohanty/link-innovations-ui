"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Layers, Cpu, Bot, ShoppingCart, Wifi, BarChart3 } from "lucide-react";
import { FooterSection } from "@/components/FooterSection";

const projects = [
  {
    title: "Logistics Ops Dashboard",
    description:
      "Real-time tracking and analytics for global fleet management.",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    tag: "Logistics",
  },
  {
    title: "Fintech KYC Platform",
    description:
      "End-to-end digital identity verification and compliance solution.",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=400&q=80",
    tag: "Fintech",
  },
  {
    title: "AI Support Assistant",
    description:
      "Intelligent customer service automation with natural language AI.",
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=400&q=80",
    tag: "AI / SaaS",
  },
  {
    title: "Headless Commerce Store",
    description: "Lightning-fast platform built for scale and performance.",
    icon: ShoppingCart,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    tag: "E-Commerce",
  },
  {
    title: "IoT Device Portal",
    description:
      "Unified dashboard for monitoring connected devices and sensors.",
    icon: Wifi,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    tag: "IoT",
  },
  {
    title: "Marketing Analytics Hub",
    description: "Attribution, funnels, and cohort reporting in one place.",
    icon: BarChart3,
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",
    tag: "Analytics",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="relative mb-16 z-10 pt-36 pb-8 px-6 lg:px-12">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 bg-white">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="lines"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="40"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lines)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-center sm:text-left"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg text-muted-foreground text-center sm:text-left"
          >
            We partner with forward-thinking companies to design, build, and
            scale digital products. Here’s a selection of our recent projects
            and case studies.
          </motion.p>
        </div>
      </section>

      <main className="relative mx-auto max-w-7xl px-6 pt-20 pb-20 lg:px-12">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 opacity-20 blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] rounded-full bg-gradient-to-tr from-yellow-100 via-green-100 to-cyan-100 opacity-20 blur-3xl animate-blob animation-delay-2000"></div>

        {/* Projects Grid */}
        <section className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border bg-card shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/80">{p.description}</p>
                <Link href="/contact">
                  <button className="mt-3 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition">
                    View Project
                  </button>
                </Link>
              </div>

              {/* Tag */}
              <div className="absolute top-3 left-3 bg-white/90 rounded-full px-3 py-1 text-xs font-medium text-primary flex items-center gap-1 shadow-sm transition-transform group-hover:-translate-y-1">
                <p.icon className="h-3 w-3" />
                {p.tag}
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="relative z-10 mt-20 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-semibold text-center sm:text-left"
          >
            Let’s Build Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-3 text-muted-foreground max-w-xl mx-auto sm:mx-0 text-center sm:text-left"
          >
            Have an idea in mind or want to scale your digital presence? Get in
            touch and let’s explore how we can bring your vision to life.
          </motion.p>
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-start gap-4">
            <Link
              href="/services"
              className="rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-95 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Tailwind animations */}
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
