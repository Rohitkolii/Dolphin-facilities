"use client";

import { motion } from "framer-motion";

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
    <section className="w-full bg-[#303030] text-white px-5 sm:px-6 py-12 md:py-16 overflow-hidden">

      {/* =====================================================
          WHY CHOOSE
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-[950px] mx-auto text-center"
      >
        <h2 className="text-[22px] sm:text-[25px] md:text-[35px] font-bold bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-transparent uppercase tracking-[0.5px]">
          THE DOLPHIN DIFFERENCE
        </h2>

        <p className="mt-4 text-[12px] sm:text-[13px] md:text-[15px] leading-6 font-medium text-white/90">
          Why coordinate multiple vendors when one team can connect the
          complete requirement?
        </p>
      </motion.div>


      {/* =====================================================
          CARDS
      ===================================================== */}

      <div className="container-x mx-auto mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -7,
              scale: 1.015,
              transition: {
                duration: 0.25,
              },
            }}
            className="
              group
              min-h-[155px]
              md:min-h-[175px]
              border
              border-[#2995c5]
              bg-[#333333]/10
              px-5
              py-6
              flex
              flex-col
              justify-center
              transition-all
              duration-300
              hover:bg-[#373737]/20
              hover:border-[#48b7df]
              hover:shadow-[0_10px_30px_rgba(41,149,197,0.12)]
            "
          >
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
              {stat.title}
            </h3>

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
              {stat.description}
            </p>
          </motion.div>
        ))}

      </div>


      {/* =====================================================
          PROMISE
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 70,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          max-w-[950px]
          mx-auto
          mt-16
          md:mt-24
          text-center
        "
      >
        <h2
          className="
            text-[22px]
            sm:text-[25px]
            md:text-[35px]
            font-bold
            bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-transparent
            uppercase
            tracking-[0.5px]
          "
        >
          THE DOLPHIN PROMISE
        </h2>

        <p
          className="
            mt-5
            text-[12px]
            sm:text-[13px]
            md:text-[15px]
            leading-[1.75]
            font-medium
            text-white/90
          "
        >
          Every project is different, but our commitment remains consistent:
          understand the requirement honestly, plan the details carefully,
          communicate clearly and execute responsibly. We aim to create work
          that serves the client&apos;s purpose, respects the audience and
          stands up to the realities of the ground.
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
          For Dolphin, a successful assignment is not defined only by how it
          looks. It is defined by how well every part works together.
        </p>
      </motion.div>

    </section>
  );
}