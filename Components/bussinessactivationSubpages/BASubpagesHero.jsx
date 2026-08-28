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
        h-[410px]
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
          pt-[116px]
          px-5
          sm:px-8
          md:px-10
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
            font-extrabold
            tracking-[-0.5px]
            leading-none

            text-[20px]
            sm:text-[23px]
            md:text-[28px]
            lg:text-[33px]
            xl:text-[35px]
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
            mt-[21px]
            max-w-[1500px]
            text-center
            text-white
            font-normal
            leading-[1.65]

            text-[11px]
            sm:text-[12px]
            md:text-[13px]
            lg:text-[15px]
            xl:text-[16px]
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
          top-[200px]
          hidden
          md:flex
          flex-col
          gap-[20px]
        "
      >

        <SocialButton>
          <span>f</span>
        </SocialButton>

        <SocialButton>
          <span>𝕏</span>
        </SocialButton>

        <SocialButton>
          <span>▶</span>
        </SocialButton>

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
        w-[45px]
        h-[55px]
        flex
        items-center
        justify-center
        bg-[#2387c1]
        border-l-[5px]
        border-t-[3px]
        border-b-[3px]
        border-[#69c6aa]
        text-white
        cursor-pointer
      "
    >
      <span className="text-[15px] font-bold">
        {children}
      </span>
    </motion.div>
  );
}