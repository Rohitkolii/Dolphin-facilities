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
        <h2 className="text-[22px] sm:text-[25px] md:text-[30px] font-bold text-[#3ba1ca] uppercase tracking-[0.5px]">
          WHY CHOOSE WIZCRAFT?
        </h2>

        <p className="mt-4 text-[12px] sm:text-[13px] md:text-[15px] leading-6 font-medium text-white/90">
          What makes Wizcraft Event Management Company stand out is its
          philosophy: while events are temporary, experiences last forever.
        </p>

        <p className="mt-1 text-[12px] sm:text-[13px] md:text-[15px] font-medium text-white/90">
          Brands choose Wizcraft because:
        </p>
      </motion.div>


      {/* =====================================================
          CARDS
      ===================================================== */}

      <div className="max-w-[1050px] mx-auto mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

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
            <h3
              className="
                text-[13px]
                sm:text-[14px]
                md:text-[16px]
                font-bold
                tracking-[0.6px]
                text-[#38a4d0]
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
            md:text-[30px]
            font-bold
            text-[#3ba1ca]
            uppercase
            tracking-[0.5px]
          "
        >
          THE WIZCRAFT PROMISE
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
          As one of the most respected experiential marketing companies,
          Wizcraft is committed to delivering creativity, innovation, and
          excellence. Whether you need a corporate event organizer, a brand
          activation agency in India, or a partner for exhibitions, launches,
          or virtual experiences, Wizcraft turns
        </p>

        <p
          className="
            text-[12px]
            sm:text-[13px]
            md:text-[15px]
            leading-[1.75]
            font-medium
            text-white/90
          "
        >
          vision into reality.
        </p>
      </motion.div>

    </section>
  );
}