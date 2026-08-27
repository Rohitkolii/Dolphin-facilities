"use client";

import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section
      className="
        w-full
        bg-gradient-to-r
        from-[#2478bd]
        via-[#399bc5]
        to-[#82cbb0]
        py-12
        md:py-14
        px-4
        overflow-hidden
      "
    >
      <div className="max-w-[900px] mx-auto text-center">

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-white
            text-[24px]
            md:text-[26px]
            font-extrabold
            tracking-wide
            mb-2
          "
        >
          BLOG | INSIGHTS, IDEAS &amp; STORIES
        </motion.h1>

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
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-white/95
            text-[10px]
            md:text-[11px]
            leading-[1.6]
            max-w-[850px]
            mx-auto
          "
        >
          Explore our latest blogs featuring insights, ideas, and stories
          across events, design, and innovation. Stay updated with trends,
          expert perspectives, and creative inspiration.
        </motion.p>

      </div>
    </section>
  );
}