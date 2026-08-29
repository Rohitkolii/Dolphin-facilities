"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="w-full from-[#2478bd] bg-gradient-to-r
        via-[#399bc5]
        to-[#82cbb0] py-30 px-4 overflow-hidden">

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
            text-3xl
            md:text-4xl
            font-extrabold
            tracking-wide
            mb-4 uppercase
          "
        >
          Connect With Us
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
          Now it’s your turn to tell your brand story. Let’s connect and craft an unforgettable, inspiring experience together.
        </motion.p>

      </div>

    </section>
  );
}