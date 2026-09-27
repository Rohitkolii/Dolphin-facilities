"use client";

import { motion } from "framer-motion";
import { display, luxury } from "./baFonts";

const ease = [0.22, 1, 0.36, 1];

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
      className="relative w-full overflow-hidden border-b border-[#c9a768]/40 bg-[#f8f4ec] px-5 py-14 sm:px-8 md:px-12 md:py-20"
      style={{
        // soft gold glow from the top + fine navy dot texture, same as About
        backgroundImage:
          "radial-gradient(ellipse at 50% -10%, rgba(201,167,104,0.22), transparent 60%), radial-gradient(rgba(19,37,59,0.06) 1px, transparent 1px)",
        backgroundSize: "100% 100%, 24px 24px",
      }}
    >
      {/* Gold corner brackets — quiet frame, matches About hero */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-5 hidden h-8 w-8 border-l border-t border-[#c9a768] sm:block md:left-8 md:top-8"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-5 hidden h-8 w-8 border-r border-t border-[#c9a768] sm:block md:right-8 md:top-8"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 left-5 hidden h-8 w-8 border-b border-l border-[#c9a768] sm:block md:bottom-8 md:left-8"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 right-5 hidden h-8 w-8 border-b border-r border-[#c9a768] sm:block md:bottom-8 md:right-8"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-4 flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-[#c9a768]" />
          <span className="text-xs font-medium tracking-[0.3em] text-[#a5803a]">
            OUR BUSINESSES
          </span>
          <span className="h-px w-10 bg-[#c9a768]" />
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          style={display}
          className="text-[26px] font-semibold uppercase leading-[1.2] tracking-tight text-[#13253b] sm:text-[32px] md:text-[42px] lg:text-[48px]"
        >
          {title}
        </motion.h1>

        {/* DIAMOND DIVIDER */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mx-auto my-5 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-[#c9a768]" />
          <span className="h-2 w-2 rotate-45 bg-[#c9a768]" />
          <span className="h-px w-12 bg-[#c9a768]" />
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          style={luxury}
          className="mx-auto max-w-[850px] text-center text-[15px] font-medium italic leading-[1.65] text-[#4a4438] sm:text-[16px] md:text-[19px]"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
