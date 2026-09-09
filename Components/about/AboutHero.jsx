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
          ABOUT US
        </motion.h1>

        {/* TAGLINE */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
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
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-white
            text-base
            md:text-lg
            font-semibold
            tracking-wide
            mb-4
          "
        >
          More Than an Agency. Your Complete Solutions Partner.
        </motion.p>

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
          Established in 2019, Dolphin Facilities has evolved into a dynamic,
          multi-service organization delivering innovative marketing,
          branding, promotional, event, digital and execution solutions
          across Madhya Pradesh and throughout India. What sets us apart is
          our ability to bring diverse capabilities together under one
          roof—eliminating the need for clients to coordinate with multiple
          vendors.
        </motion.p>

      </div>

    </section>
  );
}