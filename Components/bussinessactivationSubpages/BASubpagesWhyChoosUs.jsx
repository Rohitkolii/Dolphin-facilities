"use client";

import { motion } from "framer-motion";

export default function NationWhyChooseUs() {
  return (
    <section
      className="
        w-full
        h-[260px]
        flex
        items-center
        justify-center
        px-5
        sm:px-8
        md:px-12
        bg-gradient-to-r
        from-[#247fbd]
        via-[#42a8c4]
        to-[#76c8a9]
        overflow-hidden
      "
    >
      <motion.p
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          max-w-[1450px]
          text-center
          text-white
          font-normal
          text-[17px]
          sm:text-[19px]
          md:text-[23px]
          lg:text-[27px]
          leading-[1.65]
        "
      >
        With Wizcraft, nation-building events transcend gatherings;
        they become powerful platforms that drive participation, foster
        unity, and accelerate development.
      </motion.p>
    </section>
  );
}