"use client";

import { motion } from "framer-motion";

export default function AboutPhilosophy() {
  return (
    <section className="w-full bg-[#303030] text-white px-5 sm:px-6 py-12 md:py-16 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[950px] mx-auto text-center"
      >
        <h2 className="text-[22px] sm:text-[25px] md:text-[35px] font-bold bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-transparent uppercase tracking-[0.5px]">
          ONE CLIENT, ONE REQUIREMENT, ONE COMPLETE SOLUTION
        </h2>

        <p className="mt-4 text-[12px] sm:text-[13px] md:text-[15px] leading-6 font-medium text-white/90">
          Better outcomes begin when every part of the requirement works
          together.
        </p>

        <p
          className="
            mt-8
            text-[12px]
            sm:text-[13px]
            md:text-[15px]
            leading-[1.75]
            font-medium
            text-white/90
          "
        >
          We believe clients should not have to manage a separate agency for
          every stage of a project. When strategy, creativity, production,
          logistics and field execution are connected, communication becomes
          clearer and delivery becomes stronger.
        </p>

        <p
          className="
            mt-4
            text-[12px]
            sm:text-[13px]
            md:text-[15px]
            leading-[1.75]
            font-medium
            text-white/90
          "
        >
          Our role is to understand the complete requirement, bring the
          right capabilities together and remain accountable from the first
          plan to the final closure.
        </p>
      </motion.div>

    </section>
  );
}
