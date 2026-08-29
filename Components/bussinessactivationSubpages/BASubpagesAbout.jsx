"use client";

import { motion } from "framer-motion";

export default function NationAbout({
  image1 = "/businessss/nationalpage/nation1.jpg",
  image2 = "/businessss/nationalpage/nation2.jpg",
  image3 = "/businessss/nationalpage/nation3.jpg",

  paragraph1 = `Being the pioneers in nation building and large-scale event
  management, Wizcraft has designed milestone experiences celebrating
  India's journey, complementing its success, and evoking people's pride.
  From cultural festivals and milestone events to awareness missions and
  mass communication, our experience is in creating events that build an
  indomitable people-nation bond.`,

  paragraph2 = `Our portfolio spans large-scale public engagement events,
  far-reaching community outreach events, and iconic national festivals
  that bring together citizens, opinion leaders, and changemakers.
  Backed by our command of protocol, audience insight, and cultural
  sensitivity, we don't just deliver impactful and seamless large scale
  events, we create transformative experiences that leave a powerful,
  enduring impact on society.`,

  paragraph3 = `Wizcraft is a reliable partner in Government Event Management
  India, providing experiences that meet vision-based goals. We also extend
  our skills to the international platform with Public Event Management
  Dubai, where our cutting-edge storytelling, design, and delivery
  expertise generates high-impact experiences for cross-sections of
  audiences.`,
}) {
  return (
    <section className="w-full bg-[#303030] px-4 sm:px-6 md:px-8 lg:px-[58px]">

      <div
        className="
          mx-auto
          max-w-[1550px]
          py-8
          md:py-10
        "
      >

        <div
          className="
            grid
            grid-cols-1
            gap-7
            lg:grid-cols-[1fr_1fr]
            lg:gap-8
          "
        >

          {/* =====================================================
              LEFT IMAGES
          ===================================================== */}

          <div className="w-full">

            {/* BIG IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
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
              className="
                w-full
                overflow-hidden
                border
                border-[#2999c7]
              "
            >
              <img
                src={image1}
                alt="Event"
                draggable="false"
                className="
                  block
                  w-full
                  h-[280px]
                  sm:h-[330px]
                  md:h-[370px]
                  lg:h-[340px]
                  xl:h-[342px]
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
              />
            </motion.div>


            {/* TWO SMALL IMAGES */}

            <div
              className="
                grid
                grid-cols-2
                gap-7
                mt-7
              "
            >

              <motion.div
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="
                  overflow-hidden
                  border
                  border-[#2999c7]
                "
              >
                <img
                  src={image2}
                  alt="Event"
                  draggable="false"
                  className="
                    block
                    w-full
                    h-[250px]
                    sm:h-[290px]
                    md:h-[320px]
                    lg:h-[338px]
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.04]
                  "
                />
              </motion.div>


              <motion.div
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="
                  overflow-hidden
                  border
                  border-[#2999c7]
                "
              >
                <img
                  src={image3}
                  alt="Event"
                  draggable="false"
                  className="
                    block
                    w-full
                    h-[250px]
                    sm:h-[290px]
                    md:h-[320px]
                    lg:h-[338px]
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.04]
                  "
                />
              </motion.div>

            </div>

          </div>


          {/* =====================================================
              RIGHT CONTENT
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
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
            className="
              flex
              items-center
              lg:pt-[90px]
            "
          >

            <div className="w-full">

              <p
                className="
                  text-white
                  text-[15px]
                  sm:text-[14px]
                  md:text-[15px]
                  lg:text-[15px]
                  leading-[1.55]
                  text-justify
                "
              >
                {paragraph1}
              </p>


              <p
                className="
                  mt-5
                  text-white
                  text-[15px]
                  sm:text-[14px]
                  md:text-[15px]
                  lg:text-[15px]
                  leading-[1.55]
                  text-justify
                "
              >
                {paragraph2}
              </p>


              <p
                className="
                  mt-5
                  text-white
                  text-[15px]
                  sm:text-[14px]
                  md:text-[15px]
                  lg:text-[15px]
                  leading-[1.55]
                  text-justify
                "
              >
                {paragraph3}
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}