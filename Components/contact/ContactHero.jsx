"use client";

import { motion } from "framer-motion";
import { playfair } from "@/lib/fonts";

// Same display font as page.js / Navbar / About / Blog
const display = { fontFamily: playfair.style.fontFamily };

const ease = [0.22, 1, 0.36, 1];

export default function ContactHero() {
  return (
    <section
      className="relative w-full overflow-hidden border-b border-[#c9a768]/40 bg-[#f8f4ec] px-4 py-16 md:py-24"
      style={{
        // soft gold glow from the top + fine navy dot texture — same as AboutHero / BlogHero
        backgroundImage:
          "radial-gradient(ellipse at 50% -10%, rgba(201,167,104,0.22), transparent 60%), radial-gradient(rgba(19,37,59,0.06) 1px, transparent 1px)",
        backgroundSize: "100% 100%, 24px 24px",
      }}
    >
      {/* ================= DECORATION ================= */}

      {/* Big outlined watermark */}
      <div
        aria-hidden="true"
        style={{ ...display, WebkitTextStroke: "1px rgba(201,167,104,0.4)" }}
        className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 select-none whitespace-nowrap text-[60px] font-bold leading-none text-transparent sm:text-[100px] md:top-2 md:text-[160px]"
      >
        CONNECT
      </div>

      {/* Concentric rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 hidden h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-[#c9a768]/30 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 hidden h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-[#c9a768]/30 lg:block"
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
          className="mb-6 flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-[#c9a768]" />
          <span className="text-xs font-medium tracking-[0.3em] text-[#a5803a]">
            GET IN TOUCH
          </span>
          <span className="h-px w-10 bg-[#c9a768]" />
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          style={display}
          className="text-[36px] font-semibold leading-[1.1] text-[#13253b] md:text-[56px]"
        >
          Connect <span className="italic text-[#a5803a]">With Us</span>
        </motion.h1>

        {/* DIAMOND DIVIDER */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="mx-auto my-7 flex items-center justify-center gap-3"
        >
          <span className="h-px w-16 bg-[#c9a768]" />
          <span className="h-2 w-2 rotate-45 bg-[#c9a768]" />
          <span className="h-px w-16 bg-[#c9a768]" />
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="mx-auto max-w-2xl text-[15px] leading-[1.85] text-[#4a4438] md:text-[18px]"
        >
          Now it&apos;s your turn to tell your brand story. Let&apos;s connect
          and craft an unforgettable, inspiring experience together.
        </motion.p>
      </div>
    </section>
  );
}