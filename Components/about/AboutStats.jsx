"use client";

import { motion } from "framer-motion";

const stats = [
  {
    title: "EVENTS & EXPERIENCES",
    description:
      "From product launches and corporate celebrations to government events and VIP functions, we manage every detail—from concept and production to flawless on-ground execution.",
  },
  {
    title: "EXHIBITIONS & BRAND PAVILIONS",
    description:
      "Creative exhibition stalls, product display zones and branded environments—designed, fabricated and executed to attract attention and create meaningful engagement.",
  },
  {
    title: "RURAL MARKETING & ACTIVATIONS",
    description:
      "Advertisement vans, roadshows, farmer meetings, village activations and live product demonstrations that connect brands with audiences across rural India.",
  },
  {
    title: "PRODUCT LAUNCHES",
    description:
      "From grand stages and immersive branding to product displays, cultural performances and guest experiences, we create launches that leave a lasting impression.",
  },
  {
    title: "OUTDOOR ADVERTISING",
    description:
      "Mobile van branding, wall paintings, hoardings, bus branding, pole kiosks, dealer branding and high-impact outdoor campaigns executed across multiple locations.",
  },
  {
    title: "GOVERNMENT & INSTITUTIONAL EVENTS",
    description:
      "End-to-end event infrastructure, venue branding, stage production, logistics, protocol support and on-ground coordination for government and institutional assignments.",
  },
  {
    title: "DIGITAL & TECHNOLOGY SOLUTIONS",
    description:
      "Websites, mobile applications, business portals and customized digital platforms designed to improve visibility, engagement and operational efficiency.",
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
          WHAT WE OFFER
        </h2>

        <p className="mt-4 text-[12px] sm:text-[13px] md:text-[15px] leading-6 font-medium text-white/90">
          A dynamic, multi-service organization delivering innovative
          marketing, branding, promotional, event, digital and execution
          solutions across Madhya Pradesh and throughout India.
        </p>

        <p className="mt-1 text-[12px] sm:text-[13px] md:text-[15px] font-medium text-white/90">
          One trusted partner for every requirement:
        </p>
      </motion.div>


      {/* =====================================================
          CARDS
      ===================================================== */}

      <div className="container-x mx-auto mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {stats.map((stat, index) => {
          const isLastOrphan =
            index === stats.length - 1 && stats.length % 3 === 1;

          return (
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
            className={`
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
              ${isLastOrphan ? "sm:col-start-1 lg:col-start-2" : ""}
              hover:border-[#48b7df]
              hover:shadow-[0_10px_30px_rgba(41,149,197,0.12)]
            `}
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
          );
        })}

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
          THE DOLPHIN FACILITIES PROMISE
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
          At Dolphin Facilities, we do more than provide services—we take
          complete ownership of our clients&apos; requirements and transform
          ideas into impactful results. Because for us, it&apos;s always
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
          One Client. One Requirement. One Trusted Partner. One Complete
          Solution.
        </p>
      </motion.div>

    </section>
  );
}