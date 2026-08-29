"use client";

import { motion } from "framer-motion";

export default function WizcraftMessage() {
  return (
    <section className="w-full bg-[#303030]">

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
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
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          w-full
          min-h-[165px]
          flex
          items-center
          justify-center
          text-center
          px-6
          md:px-20
          bg-gradient-to-r
          from-[#2478bd]
          via-[#399bc5]
          to-[#82cbb0]
        "
      >
        <p
          className="
            max-w-[850px]
            text-white
            text-[14px]
            md:text-[20px]
            leading-[1.6]
            font-medium
          "
        >
          At Wizcraft, we don’t just organize events. We craft experiences
          that touch, move, and inspire, creating impact that lasts long
          after the event.
        </p>
      </motion.div>

    </section>
  );
}