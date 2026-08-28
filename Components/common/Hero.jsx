"use client";

import { motion } from "framer-motion";

export default function Hero({title, desc}) {
  return (
    <section className="w-full bg-gradient-to-r from-[#197bc1] to-[#69c2aa] py-25 px-4 overflow-hidden">

      <div className="max-w-6xl mx-auto text-center">

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
            text-3xl
            md:text-4xl
            font-extrabold
            tracking-wide
            mb-4 uppercase
          "
        >
          {title}
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
            {desc}
        </motion.p>

      </div>

    </section>
  );
}