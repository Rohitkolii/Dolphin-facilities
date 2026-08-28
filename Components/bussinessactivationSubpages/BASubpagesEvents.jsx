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
    <section className="w-full bg-[#303030] px-5 sm:px-8 md:px-12 lg:px-[58px]">

      <div
        className="
          mx-auto
          max-w-[1458px]
          py-10
          md:py-12
          lg:py-16
        "
      >

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[1.45fr_0.95fr]
            lg:gap-12
            xl:gap-14
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -55,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
            }}
            className="w-full"
          >

            <p
              className="
                text-white
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[16px]
                leading-[1.75]
                text-justify
              "
            >
              {paragraph1}
            </p>


            <p
              className="
                mt-6
                text-white
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[16px]
                leading-[1.75]
                text-justify
              "
            >
              {paragraph2}
            </p>


            {/* BUTTON */}

            <motion.a
              href="/portfolio"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex
                items-center
                gap-3
                mt-6
                px-6
                py-3
                bg-gradient-to-r
                from-[#79cba8]
                to-[#2999c7]
                border
                border-[#73c9b9]
                text-white
                text-[13px]
                sm:text-[14px]
                font-medium
                transition-all
                duration-300
                hover:brightness-110
              "
            >
              See Our Portfolio

              <span className="text-[25px] leading-none">
                →
              </span>
            </motion.a>

          </motion.div>


          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 55,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              w-full
              flex
              justify-center
              lg:justify-end
            "
          >

            <div
              className="
                w-full
                max-w-[590px]
                overflow-hidden
                border
                border-[#2999c7]
              "
            >

              <img
                src={image}
                alt="Event"
                draggable="false"
                className="
                  block
                  w-full
                  aspect-square
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}