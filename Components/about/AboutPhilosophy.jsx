"use client";

import { motion } from "framer-motion";
import { display } from "./aboutFonts";

export default function AboutPhilosophy() {
  return (
    <section className="w-full overflow-hidden border-y border-[#13253b]/10 bg-white px-5 py-14 sm:px-6 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-[950px] text-center"
      >
        <h2
          style={display}
          className="text-[26px] font-semibold leading-tight text-[#13253b] sm:text-[30px] md:text-[40px]"
        >
          One Client, One Requirement, One Complete Solution
        </h2>

        <div className="mx-auto mt-5 h-px w-14 bg-[#c9a768]" />

        <p
          style={display}
          className="mt-6 text-[16px] font-medium text-[#13253b] md:text-[19px]"
        >
          Better outcomes begin when every part of the requirement works
          together.
        </p>

        <p className="mt-8 text-[14px] leading-[1.8] text-[#4a4438] md:text-[16px]">
          We believe clients should not have to manage a separate agency for
          every stage of a project. When strategy, creativity, production,
          logistics and field execution are connected, communication becomes
          clearer and delivery becomes stronger.
        </p>

        <p className="mt-4 text-[14px] leading-[1.8] text-[#4a4438] md:text-[16px]">
          Our role is to understand the complete requirement, bring the right
          capabilities together and remain accountable from the first plan to
          the final closure.
        </p>
      </motion.div>
    </section>
  );
}
