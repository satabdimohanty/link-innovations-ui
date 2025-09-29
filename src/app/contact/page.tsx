"use client";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Link Innovations</title>
        <meta
          name="description"
          content="Get in touch with Link Innovations to discuss your project."
        />
      </Head>

      <main className="relative min-h-screen bg-gradient-to-r from-blue-200 via-gray-300 to-gray-200 text-gray-800 flex flex-col items-center justify-center px-6 lg:px-12 overflow-hidden">
        {/* Hero Section */}
        <motion.section
          className="relative w-full max-w-3xl flex flex-col items-center text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div className="space-y-6 z-10 mt-16">
            <motion.h1
              className="text-4xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's Connect
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Share your goals and challenges. We typically respond within one
              business day.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white font-medium px-6 py-3 text-sm shadow-md hover:bg-indigo-700 transition-all"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-indigo-600 text-indigo-600 font-medium px-6 py-3 text-sm hover:bg-indigo-50 transition-colors"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Contact Info & Form Section */}
        <section className="relative w-full max-w-5xl grid gap-8 md:grid-cols-2 z-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email Card */}
            <motion.div
              className="flex items-center gap-4 rounded-xl bg-indigo-50 p-6 shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0L12 13 3 8"
                />
              </svg>
              <div>
                <h2 className="text-lg font-semibold mb-1">Email</h2>
                <p className="text-gray-500">hello@linkinnovations.dev</p>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              className="flex items-center gap-4 rounded-xl bg-indigo-50 p-6 shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
                />
              </svg>
              <div>
                <h2 className="text-lg font-semibold mb-1">Location</h2>
                <p className="text-gray-500">Remote-first • Global clients</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            className="bg-indigo-50 px-6 pt-6 pb-3 rounded-xl shadow-lg space-y-4 hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl font-semibold">Send Us a Message</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all"
            >
              Submit
            </button>
          </motion.form>
        </section>

        {/* Decorative Floating Shapes */}
        <motion.div
          className="absolute -top-40 left-1/4 w-80 h-80 rounded-full bg-pink-200 opacity-40 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 right-1/3 w-96 h-96 rounded-full bg-blue-200 opacity-30 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-purple-200 opacity-20 blur-3xl"
          animate={{ x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-60 h-60 rounded-full bg-yellow-100 opacity-30 blur-3xl"
          animate={{ x: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
      </main>
    </>
  );
}
