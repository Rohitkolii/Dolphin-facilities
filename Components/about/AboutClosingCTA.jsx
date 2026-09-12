"use client";

import { motion } from "framer-motion";

export default function AboutClosingCTA() {
  return (
    <section className="w-full bg-[#303030]">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="
          w-full
          min-h-[220px]
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
          md:px-20
          py-10
          bg-gradient-to-r
          from-[#2478bd]
          via-[#399bc5]
          to-[#82cbb0]
        "
      >
        <h2
          className="
            max-w-[850px]
            text-white
            text-[18px]
            md:text-[26px]
            font-extrabold
            uppercase
            tracking-wide
            mb-4
          "
        >
          Let Us Bring Your Requirement to Life
        </h2>

        <p
          className="
            max-w-[850px]
            text-white/95
            text-[13px]
            md:text-[16px]
            leading-[1.6]
            font-medium
            mb-6
          "
        >
          Share the type of event or campaign, proposed location, timeline,
          expected audience and broad requirement with Dolphin Facilities.
          Our team can help structure the scope and identify the right
          combination of services for the assignment.
        </p>

        <a
          href="/contact"
          className="
            inline-block
            bg-white
            text-[#1d7fc5]
            font-bold
            text-[13px]
            md:text-[14px]
            uppercase
            tracking-wide
            px-8
            py-3
            transition-all
            duration-300
            hover:bg-[#303030]
            hover:text-white
          "
        >
          Get In Touch
        </a>
      </motion.div>

    </section>
  );
}
