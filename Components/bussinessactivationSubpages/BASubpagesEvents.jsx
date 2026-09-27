"use client";

import { motion } from "framer-motion";

export default function NationEvents({
  image = "/businessss/nationalpage/nation5.jpg",

  paragraph1 = `Our expertise community outreach programs and community
  outreach services empower organizations, brands, and government agencies
  to reach out to people genuinely. Our expertise in community outreach
  programs and similar services empowers organizations, brands, and
  government agencies to connect with people authentically. Whether it's
  cultural activations, educational campaigns, or health awareness drives,
  Wizcraft ensures each initiative reaches the relevant audience with the
  right message.`,

  paragraph2 = `As a leading Large-Scale Event Agency Mumbai, Wizcraft combines
  creativity, technology, and accuracy of planning to provide flawless
  execution at any scale. From conceptualization to ground management,
  we take care of every aspect to ensure our large scale event management
  India initiatives are effective, memorable, and forward-looking.`,
}) {
  return (
    <section className="w-full bg-[#f8f4ec] px-5 sm:px-8 md:px-12 lg:px-[58px]">
      <div className="mx-auto max-w-[1458px] py-14 md:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.45fr_0.95fr] lg:gap-12 xl:gap-14">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="mb-6 h-px w-14 bg-[#c9a768]" />

            <p className="text-justify text-[14px] leading-[1.8] text-[#4a4438] sm:text-[14px] md:text-[15px] lg:text-[16px]">
              {paragraph1}
            </p>

            <p className="mt-6 text-justify text-[14px] leading-[1.8] text-[#4a4438] sm:text-[14px] md:text-[15px] lg:text-[16px]">
              {paragraph2}
            </p>

            {/* BUTTON */}
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-3 border border-[#13253b] bg-[#13253b] px-7 py-3 text-[13px] font-medium tracking-wide text-white transition-colors duration-300 hover:border-[#c9a768] hover:bg-[#c9a768] hover:text-[#13253b] sm:text-[14px]"
            >
              See Our Portfolio
              <span className="text-[18px] leading-none">→</span>
            </motion.a>
          </motion.div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full justify-center lg:justify-end"
          >
            <div className="w-full max-w-[590px] overflow-hidden border border-[#c9a768] shadow-[0_18px_40px_-20px_rgba(19,37,59,0.3)]">
              <img
                src={image}
                alt="Event"
                draggable="false"
                className="block aspect-square w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
