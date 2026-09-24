"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { display } from "./aboutFonts";

export default function AboutClosingCTA() {
  return (
    <section className="w-full bg-[#f8f4ec] px-5 py-16 md:px-8 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="container-x mx-auto flex flex-col items-center border border-[#13253b]/10 bg-white px-6 py-12 text-center shadow-[0_18px_40px_-28px_rgba(19,37,59,0.3)] md:px-20 md:py-16"
      >
        <p className="text-xs font-medium tracking-[0.2em] text-[#a5803a]">
          GET IN TOUCH
        </p>

        <h2
          style={display}
          className="mt-3 max-w-[850px] text-[24px] font-semibold leading-tight text-[#13253b] md:text-[36px]"
        >
          Let Us Bring Your Requirement to Life
        </h2>

        <div className="mb-6 mt-5 h-px w-14 bg-[#c9a768]" />

        <p className="mb-8 max-w-[850px] text-[14px] leading-[1.8] text-[#4a4438] md:text-[16px]">
          Share the type of event or campaign, proposed location, timeline,
          expected audience and broad requirement with Dolphin Facilities. Our
          team can help structure the scope and identify the right combination
          of services for the assignment.
        </p>

        <Link
          href="/contact"
          className="
            inline-block
            border
            border-[#13253b]
            bg-[#13253b]
            px-9
            py-3
            text-sm
            font-medium
            tracking-wide
            text-white
            transition-colors
            duration-300
            hover:border-[#c9a768]
            hover:bg-[#c9a768]
            hover:text-[#13253b]
          "
        >
          Get In Touch
        </Link>
      </motion.div>
    </section>
  );
}
