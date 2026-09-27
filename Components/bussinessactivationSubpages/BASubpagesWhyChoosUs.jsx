"use client";

import { motion } from "framer-motion";
import { display } from "./baFonts";

export default function NationWhyChooseUs({
  message = `With Wizcraft, nation-building events transcend gatherings;
  they become powerful platforms that drive participation, foster
  unity, and accelerate development.`,
}) {
  return (
    <section className="flex w-full items-center justify-center overflow-hidden bg-[#13253b] px-5 py-14 sm:px-8 md:px-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex max-w-[950px] flex-col items-center text-center"
      >
        <div className="mb-6 h-px w-14 bg-[#c9a768]" />

        <p
          style={display}
          className="text-[17px] font-medium italic leading-[1.65] text-white sm:text-[20px] md:text-[26px]"
        >
          {message}
        </p>

        <div className="mt-6 h-px w-14 bg-[#c9a768]" />
      </motion.div>
    </section>
  );
}
