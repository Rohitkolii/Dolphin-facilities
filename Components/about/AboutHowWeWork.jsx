"use client";

import { motion } from "framer-motion";
import { display } from "./aboutFonts";

const steps = [
  {
    step: "01",
    title: "UNDERSTAND",
    description:
      "We begin with the purpose, audience, location, scale, budget and expected result.",
  },
  {
    step: "02",
    title: "PLAN",
    description:
      "The requirement is converted into a scope, schedule, responsibility matrix and approval process.",
  },
  {
    step: "03",
    title: "CREATE",
    description:
      "Concepts, content, layouts, campaign assets and production elements are developed and reviewed.",
  },
  {
    step: "04",
    title: "COORDINATE",
    description:
      "Venues, vendors, specialists, teams, permissions, logistics and materials are aligned.",
  },
  {
    step: "05",
    title: "EXECUTE",
    description:
      "A designated project lead controls deployment, quality, timing, safety and issue resolution.",
  },
  {
    step: "06",
    title: "REPORT",
    description:
      "Deliverables, field evidence, outcomes and closure items are documented according to the agreed scope.",
  },
];

export default function AboutHowWeWork() {
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
          One Connected Process From Brief to Closure
        </h2>

        <div className="mx-auto mt-5 h-px w-14 bg-[#c9a768]" />

        <p className="mt-5 text-[14px] leading-7 text-[#6b6255] md:text-[16px]">
          Clarity at every stage of execution.
        </p>
      </motion.div>

      <div className="container-x mx-auto mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -7, scale: 1.015, transition: { duration: 0.25 } }}
            className="
              group
              flex
              min-h-[155px]
              flex-col
              justify-center
              border
              border-[#13253b]/10
              bg-[#f8f4ec]
              px-6
              py-7
              transition-all
              duration-300
              hover:border-[#c9a768]
              hover:shadow-[0_18px_40px_-20px_rgba(19,37,59,0.25)]
              md:min-h-[175px]
            "
          >
            <div className="flex items-center gap-3">
              <span
                style={display}
                className="text-[20px] font-semibold text-[#a5803a] md:text-[24px]"
              >
                {item.step}
              </span>
              <h3
                style={display}
                className="text-[13px] font-semibold tracking-[0.14em] text-[#13253b] sm:text-[14px] md:text-[15px]"
              >
                {item.title}
              </h3>
            </div>

            <div className="mb-4 mt-4 h-px w-[42px] bg-[#c9a768] transition-all duration-300 group-hover:w-[65px]" />

            <p className="text-[13px] leading-[1.75] text-[#6b6255] sm:text-[14px] md:text-[15px]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
