"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 py-16 px-4 overflow-hidden">

      <div className="max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-white
            text-4xl
            md:text-5xl
            font-extrabold
            tracking-wide
            mb-4
          "
        >
          ABOUT DOLPHIN
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-white/90
            text-sm
            md:text-base
            leading-relaxed
            max-w-3xl
            mx-auto
          "
        >
          Ideas become experiences when every detail comes together. Dolphin
          Facilities is an integrated event management, advertising and
          brand execution company helping organisations transform
          requirements into well-planned, professionally delivered
          experiences. From the first discussion to final on-ground
          execution, we bring strategy, creativity, production and
          coordination together under one accountable team.
        </motion.p>

      </div>

    </section>
  );
}