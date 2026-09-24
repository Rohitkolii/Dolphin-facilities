"use client";

import { motion } from "framer-motion";
import { luxury } from "./aboutFonts";

const ease = [0.22, 1, 0.36, 1];

const facts = [
  ["2019", "Our journey began"],
  ["4", "Core service verticals"],
  ["MP & India", "Growing footprint"],
  ["Govt. & Corporate", "Clients we serve"],
];

export default function AboutHero() {
  return (
    <section
      className="relative w-full overflow-hidden border-b border-[#c9a768]/40 bg-[#f8f4ec] px-4 py-12 md:py-16"
      style={{
        // soft gold glow from the top + fine navy dot texture
        backgroundImage:
          "radial-gradient(ellipse at 50% -10%, rgba(201,167,104,0.22), transparent 60%), radial-gradient(rgba(19,37,59,0.06) 1px, transparent 1px)",
        backgroundSize: "100% 100%, 24px 24px",
      }}
    >
      {/* ================= DECORATION ================= */}

      {/* Big outlined watermark */}
      <div
        aria-hidden="true"
        style={{ ...luxury, WebkitTextStroke: "1px rgba(201,167,104,0.4)" }}
        className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 select-none whitespace-nowrap text-[70px] font-bold leading-none text-transparent sm:text-[120px] md:top-2 md:text-[190px]"
      >
        DOLPHIN
      </div>

      {/* Concentric rings — left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 hidden h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-[#c9a768]/30 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 hidden h-[270px] w-[270px] -translate-y-1/2 rounded-full border border-[#c9a768]/40 lg:block"
      />

      {/* Concentric rings — right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 hidden h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-[#c9a768]/30 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[270px] w-[270px] -translate-y-1/2 rounded-full border border-[#c9a768]/40 lg:block"
      />

      {/* Gold corner brackets */}
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

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="mb-4 flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-[#c9a768]" />
          <span className="text-xs font-medium tracking-[0.3em] text-[#a5803a]">
            SINCE 2019
          </span>
          <span className="h-px w-10 bg-[#c9a768]" />
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          style={luxury}
          className="text-[44px] font-semibold leading-[1.02] text-[#13253b] md:text-[68px]"
        >
          About <span className="italic text-[#a5803a]">Dolphin</span>
        </motion.h1>

        {/* DIAMOND DIVIDER */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="mx-auto my-5 flex items-center justify-center gap-3"
        >
          <span className="h-px w-16 bg-[#c9a768]" />
          <span className="h-2 w-2 rotate-45 bg-[#c9a768]" />
          <span className="h-px w-16 bg-[#c9a768]" />
        </motion.div>

        {/* LEAD LINE */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          style={luxury}
          className="mx-auto max-w-3xl text-[22px] font-medium italic leading-[1.3] text-[#13253b] md:text-[30px]"
        >
          Ideas become experiences when every detail comes together.
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.55, ease }}
          style={luxury}
          className="mx-auto mt-4 max-w-[720px] text-[17px] font-medium leading-[1.65] text-[#4a4438] md:text-[20px]"
        >
          Dolphin Facilities is an integrated event management, advertising
          and brand execution company helping organisations transform
          requirements into well-planned, professionally delivered
          experiences. From the first discussion to final on-ground
          execution, we bring strategy, creativity, production and
          coordination together under{" "}
          <span className="italic text-[#a5803a]">one accountable team.</span>
        </motion.p>

        {/* FACTS STRIP */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-px border border-[#c9a768]/40 bg-[#c9a768]/30 shadow-[0_20px_45px_-25px_rgba(19,37,59,0.3)] md:mt-10 md:grid-cols-4">
          {facts.map(([value, label], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.75 + i * 0.1, ease }}
              className="bg-white/90 px-4 py-4 backdrop-blur-sm"
            >
              <div
                style={luxury}
                className="text-[24px] font-semibold leading-none text-[#13253b] md:text-[30px]"
              >
                {value}
              </div>
              <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#6b6255] md:text-[11px]">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}