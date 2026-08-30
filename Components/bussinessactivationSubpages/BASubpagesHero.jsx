"use client";

import { motion } from "framer-motion";

export default function NationHero({
  title = "Nation Building Event Management Services",
  description = `At Wizcraft, we think that events have the ability to inspire,
  unite, and effect change. With 30+ years of experience in managing
  large-scale events, we have collaborated with governments,
  institutions, and communities to co-create transformative
  platforms that resonate well beyond the stage.`,
}) {
  return (
    <section
      className="
        relative
        w-full
        h-[250px]
        sm:h-[270px]
        md:h-[285px]
        overflow-hidden
        bg-gradient-to-r
        from-[#247fbd]
        via-[#3fa7c3]
        to-[#72c5a8]
      "
    >
      <div
        className="
          w-full
          h-full
          flex
          flex-col
          items-center
          justify-center
          px-5
          sm:px-8
          md:px-12
          pb-2
        "
      >
        {/* HEADING */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-white
            text-center
            uppercase
            font-bold
            tracking-[-0.3px]
            leading-[1.15]

            text-[17px]
            sm:text-[20px]
            md:text-[24px]
            lg:text-[28px]
            xl:text-[30px]
          "
        >
          {title}
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-4
            max-w-[1250px]
            text-center
            text-white/95
            font-normal
            leading-[1.55]

            text-[13px]
            sm:text-[11px]
            md:text-[12px]
            lg:text-[15px]
            xl:text-[18px]
          "
        >
          {description}
        </motion.p>
      </div>

      {/* SOCIAL BUTTONS */}
      <div
        className="
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          hidden
          md:flex
          flex-col
          gap-3
        "
      >
        {/* <SocialButton>
          <span>f</span>
        </SocialButton>

        <SocialButton>
          <span>𝕏</span>
        </SocialButton>

        <SocialButton>
          <span>▶</span>
        </SocialButton> */}
      </div>
    </section>
  );
}

/* ============================================================
   SOCIAL BUTTON
============================================================ */

function SocialButton({ children }) {
  return (
    <motion.div
      whileHover={{
        x: -5,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        w-[38px]
        h-[43px]
        flex
        items-center
        justify-center
        bg-[#2387c1]
        border-l-[4px]
        border-t-[2px]
        border-b-[2px]
        border-[#69c6aa]
        text-white
        cursor-pointer
      "
    >
      <span className="text-[13px] font-bold">
        {children}
      </span>
    </motion.div>
  );
}