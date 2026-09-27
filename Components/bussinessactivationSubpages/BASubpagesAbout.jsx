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
    <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-[58px]">
      <div className="mx-auto max-w-[1550px] py-14 md:py-20">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_1fr] lg:gap-10">
          {/* =====================================================
              LEFT IMAGES
          ===================================================== */}

          <div className="w-full">
            {/* BIG IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full overflow-hidden border border-[#c9a768] shadow-[0_18px_40px_-20px_rgba(19,37,59,0.3)]"
            >
              <img
                src={image1}
                alt="Event"
                draggable="false"
                className="block h-[280px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[330px] md:h-[370px] lg:h-[340px] xl:h-[342px]"
              />
            </motion.div>

            {/* TWO SMALL IMAGES */}
            <div className="mt-7 grid grid-cols-2 gap-7">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden border border-[#c9a768] shadow-[0_18px_40px_-20px_rgba(19,37,59,0.3)]"
              >
                <img
                  src={image2}
                  alt="Event"
                  draggable="false"
                  className="block h-[250px] w-full object-cover transition-transform duration-700 hover:scale-[1.04] sm:h-[290px] md:h-[320px] lg:h-[338px]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden border border-[#c9a768] shadow-[0_18px_40px_-20px_rgba(19,37,59,0.3)]"
              >
                <img
                  src={image3}
                  alt="Event"
                  draggable="false"
                  className="block h-[250px] w-full object-cover transition-transform duration-700 hover:scale-[1.04] sm:h-[290px] md:h-[320px] lg:h-[338px]"
                />
              </motion.div>
            </div>
          </div>

          {/* =====================================================
              RIGHT CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center lg:pt-[70px]"
          >
            <div className="w-full">
              <div className="mb-6 h-px w-14 bg-[#c9a768]" />

              <p className="text-justify text-[14px] leading-[1.8] text-[#4a4438] sm:text-[14px] md:text-[15px]">
                {paragraph1}
              </p>

              <p className="mt-5 text-justify text-[14px] leading-[1.8] text-[#4a4438] sm:text-[14px] md:text-[15px]">
                {paragraph2}
              </p>

              <p className="mt-5 text-justify text-[14px] leading-[1.8] text-[#4a4438] sm:text-[14px] md:text-[15px]">
                {paragraph3}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
