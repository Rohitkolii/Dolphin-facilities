"use client";

import { motion } from "framer-motion";

export default function Hero({title, desc}) {
  return (
    <section className="w-full overflow-hidden         bg-gradient-to-r
        from-[#2478bd]
        via-[#399bc5]
        to-[#82cbb0] px-4 py-25">

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
            mb-4
            text-3xl
            font-extrabold
            uppercase
            tracking-wide
            text-[#13253b]
            md:text-4xl
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
            mx-auto
            max-w-3xl
            text-sm
            leading-relaxed
            text-[#13253b]/80
            md:text-base
          "
        >
            {desc}
        </motion.p>

      </div>

    </section>
  );
}