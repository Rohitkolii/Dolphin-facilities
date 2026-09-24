"use client";

import { motion } from "framer-motion";
import { display } from "./aboutFonts";

const stats = [
  {
    title: "INTEGRATED CAPABILITIES",
    description:
      "Events, activations, advertising, digital support, customized products and on-ground execution can operate within one plan.",
  },
  {
    title: "SINGLE POINT OF COORDINATION",
    description:
      "One responsible team reduces communication gaps across departments and partners.",
  },
  {
    title: "EXECUTION FOCUS",
    description:
      "Ideas are tested against budget, venue, timeline, logistics and ground feasibility.",
  },
  {
    title: "FLEXIBLE SCALE",
    description:
      "The delivery model can be adapted for a focused local requirement or a coordinated multi-location assignment.",
  },
  {
    title: "CLIENT-ALIGNED PLANNING",
    description:
      "Scope, approvals and priorities are structured around the client's actual objective.",
  },
  {
    title: "DOCUMENTED DELIVERY",
    description:
      "Checklists, schedules, field evidence and closure reporting create better visibility and accountability.",
  },
];

export default function AboutStats() {
  return (
    <section className="w-full overflow-hidden bg-[#f8f4ec] px-5 py-14 sm:px-6 md:py-20">
      {/* =====================================================
          WHY CHOOSE
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-[950px] text-center"
      >
        <h2
          style={display}
          className="text-[26px] font-semibold text-[#13253b] sm:text-[30px] md:text-[40px]"
        >
          The Dolphin Difference
        </h2>

        <div className="mx-auto mt-5 h-px w-14 bg-[#c9a768]" />

        <p className="mt-5 text-[14px] leading-7 text-[#6b6255] md:text-[16px]">
          Why coordinate multiple vendors when one team can connect the
          complete requirement?
        </p>
      </motion.div>

      {/* =====================================================
          CARDS
      ===================================================== */}

      <div className="container-x mx-auto mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
        {stats.map((stat, index) => (
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
              bg-white
              px-6
              py-7
              transition-all
              duration-300
              hover:border-[#c9a768]
              hover:shadow-[0_18px_40px_-20px_rgba(19,37,59,0.25)]
              md:min-h-[175px]
            "
          >
            <h3
              style={display}
              className="text-[13px] font-semibold tracking-[0.14em] text-[#13253b] sm:text-[14px] md:text-[15px]"
            >
              {stat.title}
            </h3>

            <div className="mb-4 mt-4 h-px w-[42px] bg-[#c9a768] transition-all duration-300 group-hover:w-[65px]" />

            <p className="text-[13px] leading-[1.75] text-[#6b6255] sm:text-[14px] md:text-[15px]">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* =====================================================
          PROMISE
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-16 max-w-[950px] text-center md:mt-24"
      >
        <h2
          style={display}
          className="text-[26px] font-semibold text-[#13253b] sm:text-[30px] md:text-[40px]"
        >
          The Dolphin Promise
        </h2>

        <div className="mx-auto mt-5 h-px w-14 bg-[#c9a768]" />

        <p className="mt-6 text-[14px] leading-[1.8] text-[#4a4438] md:text-[16px]">
          Every project is different, but our commitment remains consistent:
          understand the requirement honestly, plan the details carefully,
          communicate clearly and execute responsibly. We aim to create work
          that serves the client&apos;s purpose, respects the audience and
          stands up to the realities of the ground.
        </p>

        <p className="mt-4 text-[14px] leading-[1.8] text-[#4a4438] md:text-[16px]">
          For Dolphin, a successful assignment is not defined only by how it
          looks. It is defined by how well every part works together.
        </p>
      </motion.div>
    </section>
  );
}
