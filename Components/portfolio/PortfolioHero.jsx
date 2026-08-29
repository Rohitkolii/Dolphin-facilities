"use client";

import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <section className="w-full bg-gradient-to-r bg-gradient-to-r from-[#197bc1] to-[#69c2aa] py-12 md:py-14 px-4 overflow-hidden">

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-4xl mx-auto text-center py-10"
      >

        {/* ===============================
            HEADING
        =============================== */}

        <motion.h1
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
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-white
            text-3xl
            md:text-[35px]
            font-extrabold
            tracking-wide
            mb-2
          "
        >
          PORTFOLIO
        </motion.h1>


        {/* ===============================
            DESCRIPTION
        =============================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-white/90
            text-[11px]
            md:text-[16px]
            leading-relaxed
            max-w-[700px]
            mx-auto
          "
        >
          Our event portfolio showcases a dynamic range of experiences that
          blend creativity, precision, and seamless execution.
        </motion.p>

      </motion.div>

    </section>
  );
}