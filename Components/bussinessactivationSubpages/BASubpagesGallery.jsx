"use client";

import { motion } from "framer-motion";

export default function NationGallery({
  image = "/businessss/nationalpage/nation4.jpg",
}) {
  return (
    <section
      className="
        w-full
        bg-[#303030]
        px-4
        sm:px-6
        md:px-8
        lg:px-[58px]
      "
    >

      <div
        className="
          mx-auto
          max-w-[1458px]
          py-8
          md:py-10
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-full
            overflow-hidden
            border
            border-[#2999c7]
          "
        >

          <img
            src={image}
            alt="Event Gallery"
            draggable="false"
            className="
              block
              w-full
              h-[190px]
              sm:h-[250px]
              md:h-[350px]
              lg:h-[430px]
              xl:h-[610px]
              object-cover
              transition-transform
              duration-700
              hover:scale-[1.02]
            "
          />

        </motion.div>

      </div>

    </section>
  );
}