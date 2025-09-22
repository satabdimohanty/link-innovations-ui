"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VideoDemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.section
      className="relative py-20 text-center overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2 }} // 👈 animates every time you scroll down
    >
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

      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Accelerate performance
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
          With our AI-powered tools embedded throughout your workflow, you can
          simplify your toolchain, automate tasks, and enhance your developer
          experience.
        </p>

        {/* Video demo */}
        <div className="mt-12 relative flex justify-center">
          <video
            ref={videoRef}
            className="w-full max-w-lg h-auto rounded-xl shadow-lg"
            muted
            loop
            playsInline
          >
            <source
              src="https://videos.ctfassets.net/8aevphvgewt8/490cvTcPE95XqUKGA4C2Kn/427a8803b029857c58167cce0e855191/github-copilot-agent-mode.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause Button */}
          <button
            onClick={handleTogglePlay}
            className="absolute bottom-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/40 transition"
          >
            <svg
              className="h-12 w-12 text-white"
              fill="currentColor"
              viewBox="0 0 84 84"
            >
              <circle cx="42" cy="42" r="42" opacity="0.5" />
              {isPlaying ? (
                // Pause icon
                <g>
                  <rect x="30" y="28" width="8" height="28" fill="white" />
                  <rect x="46" y="28" width="8" height="28" fill="white" />
                </g>
              ) : (
                // Play icon
                <polygon points="33,28 33,56 57,42" fill="white" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </motion.section>
  );
}
