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
          For over 30 years, Wizcraft Entertainment Agency has led India&apos;s
          live events and experiential storytelling landscape with creativity,
          innovation, and excellence. We transform innovative ideas into
          unforgettable experiences and turn brand stories into emotional
          journeys.
        </motion.p>

      </div>

    </section>
  );
}