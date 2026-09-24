"use client";

import { motion } from "framer-motion";
import { display } from "./aboutFonts";

export default function DolphinMessage() {
  return (
    <section className="w-full bg-[#13253b]">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex min-h-[200px] w-full flex-col items-center justify-center px-6 py-14 text-center md:px-20"
      >
        <div className="mb-6 h-px w-14 bg-[#c9a768]" />

        <p
          style={display}
          className="max-w-[850px] text-[17px] font-medium leading-[1.7] text-white md:text-[24px]"
        >
          One client, one requirement, one complete solution — that&apos;s how
          we think. Tell us what you want to achieve, and we&apos;ll help
          connect the planning, people and execution to bring it to life.
        </p>

        <div className="mt-6 h-px w-14 bg-[#c9a768]" />
      </motion.div>
    </section>
  );
}
