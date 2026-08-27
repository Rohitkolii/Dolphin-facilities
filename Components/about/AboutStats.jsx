"use client";

import { motion } from "framer-motion";

const stats = [
  {
    title: "UNMATCHED EXPERIENCE",
    description:
      "30+ years as a leading event management company in India and UAE.",
  },
  {
    title: "CREATIVE EXCELLENCE",
    description:
      "A trusted creative event solutions provider with innovation at every level.",
  },
  {
    title: "DIVERSE PORTFOLIO",
    description:
      "From corporate event management to activations, exhibitions, and entertainment.",
  },
  {
    title: "PAN-INDIA REACH",
    description:
      "A strong Event Management Company in India with offices across metros.",
  },
  {
    title: "GLOBAL PARTNERSHIPS",
    description:
      "The preferred Event Management Company in India & UAE with global alliances.",
  },
  {
    title: "EXPERT TEAM",
    description:
      "A powerhouse of seasoned professionals blending strategy, creativity, & flawless execution to deliver exceptional experiences.",
  },
];

export default function AboutStats() {
  return (
    <section className="w-full bg-[#303030] text-white px-4 py-10 md:py-14 overflow-hidden">

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
        className="max-w-[820px] mx-auto text-center"
      >
        <h2 className="text-[24px] md:text-[25px] font-bold text-[#3ba1ca] uppercase">
          WHY CHOOSE WIZCRAFT?
        </h2>

        <p className="mt-3 text-[11px] md:text-[12px] leading-5 font-semibold text-white/90">
          What makes Wizcraft Event Management Company stand out is its
          philosophy: while events are temporary, experiences last forever.
        </p>

        <p className="text-[11px] md:text-[12px] font-semibold text-white/90">
          Brands choose Wizcraft because:
        </p>
      </motion.div>


      {/* =====================================================
          CARDS
      ===================================================== */}

      <div className="max-w-[810px] mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

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
              y: -5,
              transition: {
                duration: 0.25,
              },
            }}
            className="
              min-h-[112px]
              border
              border-[#2995c5]
              bg-transparent
              px-3.5
              py-4
              transition-colors
              duration-300
              hover:bg-[#353535]
              hover:border-[#48b7df]
            "
          >
            <h3
              className="
                text-[11px]
                md:text-[12px]
                font-bold
                tracking-wide
                text-[#2699ca]
              "
            >
              {stat.title}
            </h3>

            <p
              className="
                mt-2
                text-[10px]
                md:text-[11px]
                leading-[1.5]
                font-semibold
                text-white/90
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
          max-w-[810px]
          mx-auto
          mt-16
          md:mt-[70px]
          text-center
        "
      >
        <h2
          className="
            text-[23px]
            md:text-[25px]
            font-bold
            text-[#3ba1ca]
            uppercase
          "
        >
          THE WIZCRAFT PROMISE
        </h2>

        <p
          className="
            mt-3
            text-[11px]
            md:text-[12px]
            leading-[1.6]
            font-medium
            text-white/95
          "
        >
          As one of the most respected experiential marketing companies,
          Wizcraft is committed to delivering creativity, innovation, and
          excellence. Whether you need a corporate event organizer, a brand
          activation agency in India, or a partner for exhibitions, launches,
          or virtual experiences, Wizcraft turns
        </p>

        <p
          className="
            text-[11px]
            md:text-[12px]
            leading-[1.6]
            font-medium
            text-white/95
          "
        >
          vision into reality.
        </p>
      </motion.div>

    </section>
  );
}