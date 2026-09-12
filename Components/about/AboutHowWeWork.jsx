"use client";

import { motion } from "framer-motion";

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
    <section className="w-full bg-[#303030] text-white px-5 sm:px-6 py-12 md:py-16 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[950px] mx-auto text-center"
      >
        <h2 className="text-[22px] sm:text-[25px] md:text-[35px] font-bold bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-transparent uppercase tracking-[0.5px]">
          ONE CONNECTED PROCESS FROM BRIEF TO CLOSURE
        </h2>

        <p className="mt-4 text-[12px] sm:text-[13px] md:text-[15px] leading-6 font-medium text-white/90">
          Clarity at every stage of execution.
        </p>
      </motion.div>

      <div className="container-x mx-auto mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

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
            whileHover={{
              y: -7,
              scale: 1.015,
              transition: { duration: 0.25 },
            }}
            className="
              group
              min-h-[155px]
              md:min-h-[175px]
              border
              border-[#2995c5]
              bg-[#333333]
              px-5
              py-6
              flex
              flex-col
              justify-center
              transition-all
              duration-300
              hover:bg-[#373737]
              hover:border-[#48b7df]
              hover:shadow-[0_10px_30px_rgba(41,149,197,0.12)]
            "
          >
            <div className="flex items-center gap-3">
              <span className="text-[13px] sm:text-[14px] md:text-[16px] font-bold text-[#2995c5]">
                {item.step}
              </span>
              <h3
                className="
                  text-[13px]
                  sm:text-[14px]
                  md:text-[16px]
                  font-bold
                  tracking-[0.6px]
                  bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-transparent
                  transition-colors
                  duration-300
                  group-hover:text-[#62c6df]
                "
              >
                {item.title}
              </h3>
            </div>

            <div className="w-[42px] h-[2px] bg-[#2995c5] mt-4 mb-4 transition-all duration-300 group-hover:w-[65px]" />

            <p
              className="
                text-[12px]
                sm:text-[13px]
                md:text-[14px]
                leading-[1.65]
                font-medium
                text-white/85
              "
            >
              {item.description}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}
