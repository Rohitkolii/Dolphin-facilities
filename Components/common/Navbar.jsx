"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["HOME", "/"],
  ["ABOUT US", "/about"],

  {
    label: "OUR BUSINESSES",
    href: "#",

    children: [
      /* =====================================================
         BRAND ACTIVATION
      ===================================================== */

      {
        label: "Brand Activation",
        href: "/business/brand-activation",

        children: [
          [
            "Nation Building Events",
            "/business/brand-activation/nation-building-events",
          ],

          [
            "Data Derived Customer Centric Solutions",
            "/business/brand-activation/data-drive-customer-centric-solution",
          ],

          [
            "Corporate Event Launches",
            "/business/brand-activation/corporate-event-launches",
          ],

          [
            "On-Ground Activations",
            "/business/brand-activation/on-ground-activation",
          ],

          [
            "Exhibition Design & Management",
            "/business/brand-activation/exhibition-design-and-management",
          ],

          [
            "Content Curation – Animations, Graphics & AVs",
            "/business/brand-activation/content-curation-animations-graphics-and-avs",
          ],
        ],
      },

      /* =====================================================
         DIGITAL SOLUTIONS
      ===================================================== */

      {
        label: "Digital Solutions",
        href: "/business/digital-solutions",

        children: [
          ["Live Streaming", "/business/digital-solutions/live-streaming"],

          [
            "Virtual Events in Immersive Environments",
            "/business/digital-solutions/virtual-events-immersive-environments",
          ],

          [
            "Virtual Events with AR Based Content",
            "/business/digital-solutions/virtual-events-with-ar-based-content",
          ],

          [
            "Virtual Events with Integrated VR",
            "/business/digital-solutions/virtual-events-with-integrated-vr",
          ],

          ["Hybrid Events", "/business/digital-solutions/hybrid-events"],

          [
            "Content Design & Management",
            "/business/digital-solutions/content-design-and-management",
          ],

          [
            "Digital Marketing",
            "/business/digital-solutions/digital-marketing",
          ],
        ],
      },

      /* =====================================================
         SPECIAL EVENTS
      ===================================================== */

      {
        label: "Special Events",
        href: "/business/special-events",

        children: [
          [
            "Special Event Management Services",
            "/business/special-events/special-event-management-services",
          ],

          [
            "Opening & Closing Ceremonies",
            "/business/special-events/opening-closing-ceremonies",
          ],

          [
            "Concerts & Festivals",
            "/business/special-events/concerts-festivals",
          ],

          ["Sporting Events", "/business/special-events/sporting-events"],

          [
            "Launch of New Initiatives",
            "/business/special-events/launch-new-initiatives",
          ],

          ["Trade Shows", "/business/special-events/trade-shows"],

          [
            "Cultural & Tourism Events",
            "/business/special-events/cultural-tourism-events",
          ],

          [
            "Son Et Lumière Spectaculars",
            "/business/special-events/son-et-lumiere-spectaculars",
          ],

          [
            "Social Celebrations",
            "/business/special-events/social-celebrations",
          ],

          ["Weddings", "/business/special-events/weddings"],
        ],
      },
    ],
  },

  ["PORTFOLIO", "/portfolio"],
  ["BLOG", "/blog"],
  ["CONTACT US", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#2f2f2f]/95 backdrop-blur-md">
        <div className="container-x flex h-[90px] items-center justify-between md:h-[120px]">
          {/* ================= LOGO ================= */}

          <Link href="/">
            <img
              src="https://wizcraft.co/assets/images/logo/wizcraft-logo.png"
              alt="Wizcraft Logo"
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
            {links.map((item, i) => {
              const isDropdown = !Array.isArray(item);

              const label = isDropdown ? item.label : item[0];

              const href = isDropdown ? item.href : item[1];

              return (
                <div key={label} className="group relative">
                  {/* ================= MAIN LINK ================= */}

                  <Link
                    href={href}
                    className={`
                      flex
                      items-center
                      gap-1
                      text-[15px]
                      font-bold
                      tracking-wide
                      transition-colors
                      duration-300
                      hover:text-[#68c4b2]
                      xl:text-[17px]
                      ${i === 0 ? "text-[#68c4b2]" : "text-white"}
                    `}
                  >
                    {label}

                    {isDropdown && (
                      <span
                        className="
                          text-xs
                          transition-transform
                          duration-300
                          group-hover:rotate-180
                        "
                      >
                        +
                      </span>
                    )}
                  </Link>

                  {/* =====================================================
                      FIRST LEVEL DROPDOWN
                  ===================================================== */}

                  {isDropdown && (
                    <div
                      className="
                        invisible
                        absolute
                        left-0
                        top-full
                        mt-5
                        w-[260px]
                        translate-y-2
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:visible
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <div
                        className="
                          overflow-visible
                          bg-[#2f2f2f]/95
                          py-2
                          shadow-2xl
                        "
                      >
                        {item.children.map((child) => {
                          const hasChildren = child.children?.length > 0;

                          return (
                            <div
                              key={child.label}
                              className="group/sub relative"
                            >
                              {/* ================= BUSINESS ITEM ================= */}

                              <Link
                                href={child.href}
                                className="
                                  flex
                                  items-center
                                  justify-between
                                  px-5
                                  py-3
                                  text-[15px]
                                  font-semibold
                                  text-white
                                  transition
                                  hover:bg-[#3376ad]
                                "
                              >
                                <span>{child.label}</span>
                              </Link>

                              {/* =====================================================
                                  SECOND LEVEL DROPDOWN
                              ===================================================== */}

                              {hasChildren && (
                                <div
                                  className="
                                    invisible
                                    absolute
                                    left-full
                                    top-0
                                    w-[300px]
                                    translate-x-2
                                    opacity-0
                                    transition-all
                                    duration-300
                                    group-hover/sub:visible
                                    group-hover/sub:translate-x-0
                                    group-hover/sub:opacity-100
                                  "
                                >
                                  {/* IMPORTANT:
                                      Special Events mein 10 items hain
                                      isliye scroll enabled hai
                                  */}

                                  <div
                                    className="
                                      max-h-[400px]
                                      overflow-y-auto
                                      bg-[#2f2f2f]/95
                                      py-2
                                      shadow-2xl
                                    "
                                  >
                                    {child.children.map(
                                      ([subLabel, subHref]) => (
                                        <Link
                                          key={subHref}
                                          href={subHref}
                                          className="
                                            block
                                            border-b
                                            border-white/10
                                            px-5
                                            py-3
                                            text-[15px]
                                            font-medium
                                            leading-relaxed
                                            text-white
                                            transition
                                            hover:bg-[#3376ad]
                                          "
                                        >
                                          {subLabel}
                                        </Link>
                                      ),
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* =====================================================
              HAMBURGER
          ===================================================== */}

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-md
              transition
              hover:bg-white/10
            "
          >
            <span className="flex flex-col items-end gap-[5px]">
              <span className="block h-[3px] w-5 bg-white" />
              <span className="block h-[3px] w-7 bg-white" />
              <span className="block h-[3px] w-3 bg-white" />
            </span>
          </button>
        </div>
      </header>

      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          z-[60]
          bg-black/70
          backdrop-blur-[2px]
          transition-all
          duration-500
          ${open ? "visible opacity-100" : "invisible opacity-0"}
        `}
      />

      {/* =====================================================
          SIDE MENU
      ===================================================== */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-[70]
          h-screen
          w-[375px]
          max-w-[90vw]
          overflow-y-auto
          text-white
          shadow-2xl
          transition-transform
          duration-500
          ease-[cubic-bezier(0.4,0,0.2,1)]

          ${open ? "translate-x-0" : "-translate-x-full"}

          bg-[#030006]

          lg:bg-gradient-to-b
          lg:from-[#1684c5]
          lg:via-[#2998c4]
          lg:to-[#5db9bb]
        `}
      >
        <div className="relative min-h-full px-[19px] py-7">
          {/* =====================================================
              CLOSE BUTTON
          ===================================================== */}

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="
              absolute
              right-4
              top-5
              z-10
              flex
              h-9
              w-9
              items-center
              justify-center
              text-[32px]
              font-light
              leading-none
              text-white
              transition
              hover:text-[#1684c5]
            "
          >
            ×
          </button>

          {/* =====================================================
              MOBILE LOGO
          ===================================================== */}

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="
              mt-2
              block
              border-b
              border-white/10
              pb-12
              lg:hidden
            "
          >
            <div className="text-left leading-none">
              <div
                className="
                  text-[30px]
                  font-black
                  tracking-[-0.09em]
                  text-[#187cc1]
                "
              >
                <span className="mr-1 text-[22px] text-white">★</span>
                WIZCRAFT
              </div>

              <div
                className="
                  mt-2
                  text-[8px]
                  font-bold
                  tracking-[0.42em]
                  text-white/60
                "
              >
                ENTERTAINMENT AGENCY
              </div>
            </div>
          </Link>

          {/* =====================================================
              MOBILE MENU
          ===================================================== */}

          <nav className="lg:hidden">
            {links.map((item) => {
              const isDropdown = !Array.isArray(item);

              const label = isDropdown ? item.label : item[0];

              const href = isDropdown ? item.href : item[1];

              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="
                    relative
                    flex
                    min-h-[45px]
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    text-[13px]
                    font-medium
                    text-white
                    transition-colors
                    hover:text-[#1684c5]
                  "
                >
                  <span>{label}</span>

                  {isDropdown && (
                    <span
                      className="
                        absolute
                        right-0
                        top-1/2
                        flex
                        h-[38px]
                        w-[38px]
                        -translate-y-1/2
                        items-center
                        justify-center
                        bg-[#187fc2]
                        text-[28px]
                        font-light
                        leading-none
                      "
                    >
                      ›
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* =====================================================
              MOBILE CONTACT
          ===================================================== */}

          <div className="mt-6 lg:hidden">
            {/* EMAIL */}

            <a
              href="mailto:info@wizcraft.co"
              className="mb-3 flex items-center gap-4"
            >
              <span
                className="
                  flex
                  h-[30px]
                  w-[30px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#187fc2]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[15px] w-[15px] fill-none stroke-white"
                  strokeWidth="2"
                >
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>

              <span className="text-[16px]">info@wizcraft.co</span>
            </a>

            {/* PHONE 1 */}

            <a
              href="tel:+919819822333"
              className="mb-3 flex items-center gap-4"
            >
              <span
                className="
                  flex
                  h-[30px]
                  w-[30px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#187fc2]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[15px] w-[15px] fill-white"
                >
                  <path d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2l3.4 1.4c.4.2.6.6.6 1v3.1c0 .6-.4 1-1 1C10.4 21.5 2.5 13.6 2.5 4.5c0-.6.4-1 1-1h3.1c.4 0 .8.2 1 .6L9 7.5c.2.4.1.8-.2 1.1l-2.2 2.2z" />
                </svg>
              </span>

              <span className="text-[16px]">+91 9819822333</span>
            </a>

            {/* PHONE 2 */}

            <a href="tel:+912247791300" className="flex items-center gap-4">
              <span
                className="
                  flex
                  h-[30px]
                  w-[30px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#187fc2]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[15px] w-[15px] fill-white"
                >
                  <path d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2l3.4 1.4c.4.2.6.6.6 1v3.1c0 .6-.4 1-1 1C10.4 21.5 2.5 13.6 2.5 4.5c0-.6.4-1 1-1h3.1c.4 0 .8.2 1 .6L9 7.5c.2.4.1.8-.2 1.1l-2.2 2.2z" />
                </svg>
              </span>

              <span className="text-[16px]">+91 02247791300</span>
            </a>
          </div>

          {/* =====================================================
              MOBILE SOCIAL
          ===================================================== */}

          <div
            className="
              mt-4
              flex
              items-center
              gap-5
              pb-8
              lg:hidden
            "
          >
            {/* INSTAGRAM */}

            <a
              href="#"
              aria-label="Instagram"
              className="text-white transition hover:text-[#187fc2]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] fill-none stroke-current"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />

                <circle cx="12" cy="12" r="4" />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            {/* WHATSAPP */}

            <a
              href="#"
              aria-label="WhatsApp"
              className="text-white transition hover:text-[#187fc2]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] fill-none stroke-current"
                strokeWidth="2"
              >
                <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />

                <path d="M8.5 8.5c.3-.6.6-.6 1-.6h.4c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c.6 1.1 1.5 2 2.6 2.6l.7-.6c.2-.2.4-.2.7-.1l1.7.7c.3.1.4.3.4.5v.4c0 .4 0 .7-.6 1-2.1.9-6.8-2.1-7.4-6.9Z" />
              </svg>
            </a>

            {/* LINKEDIN */}

            <a
              href="#"
              aria-label="LinkedIn"
              className="
                text-[18px]
                font-bold
                text-white
                hover:text-[#187fc2]
              "
            >
              in
            </a>

            {/* FACEBOOK */}

            <a
              href="#"
              aria-label="Facebook"
              className="
                text-[18px]
                font-bold
                text-white
                hover:text-[#187fc2]
              "
            >
              f
            </a>

            {/* YOUTUBE */}

            <a
              href="#"
              aria-label="YouTube"
              className="text-white hover:text-[#187fc2]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] fill-current"
              >
                <path d="M23 12s0-3.5-.5-5.1c-.3-1.1-1.2-2-2.3-2.3C18.6 4 12 4 12 4s-6.6 0-8.2.6c-1.1.3-2 1.2-2.3 2.3C1 8.5 1 12 1 12s0 3.5.5 5.1c.3 1.1 1.2 2 2.3 2.3 1.6.6 8.2.6 8.2.6s6.6 0 8.2-.6c1.1-.3 2-1.2 2.3-3.3C23 15.5 23 12 23 12Z" />

                <path d="m10 8 6 4-6 4V8Z" className="fill-[#030006]" />
              </svg>
            </a>

            {/* X */}

            <a
              href="#"
              aria-label="X"
              className="
                text-[18px]
                text-white
                hover:text-[#187fc2]
              "
            >
              𝕏
            </a>
          </div>

          {/* =====================================================
              DESKTOP SIDE MENU CONTENT
          ===================================================== */}

          <div className="hidden lg:block">
            {/* LOGO */}

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="mt-10 block"
            >
              <div className="text-left leading-none">
                <div className="text-[38px] font-black tracking-[-0.09em]">
                  <span className="mr-2 text-2xl">★</span>
                  WIZCRAFT
                </div>

                <div className="mt-2 text-[9px] font-bold tracking-[0.42em]">
                  ENTERTAINMENT AGENCY
                </div>
              </div>
            </Link>

            {/* ABOUT */}

            <section className="mt-10">
              <h2 className="text-[18px] font-medium">ABOUT US</h2>

              <p className="mt-2 text-[15px] font-medium leading-[1.65]">
                Wizcraft Entertainment Agency Pvt. Ltd. is one of the leading
                corporate event management company, with pan India reach. We
                have offices in Mumbai, Dubai, Bangalore, Gurgaon, Chennai, and
                Hyderabad all set to create unforgettable corporate events.
              </p>
            </section>

            {/* CONTACT FORM */}

            <section className="mt-8">
              <h2 className="text-[22px] font-medium">GET IN TOUCH</h2>

              <form className="mt-2 space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    h-[54px]
                    w-full
                    border-0
                    bg-white
                    px-5
                    text-[16px]
                    text-gray-700
                    outline-none
                    placeholder:text-gray-500
                  "
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="
                    h-[54px]
                    w-full
                    border-0
                    bg-white
                    px-5
                    text-[16px]
                    text-gray-700
                    outline-none
                    placeholder:text-gray-500
                  "
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="
                    h-[54px]
                    w-full
                    border-0
                    bg-white
                    px-5
                    text-[16px]
                    text-gray-700
                    outline-none
                    placeholder:text-gray-500
                  "
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="
                    h-[54px]
                    w-full
                    border-0
                    bg-white
                    px-5
                    text-[16px]
                    text-gray-700
                    outline-none
                    placeholder:text-gray-500
                  "
                />

                <textarea
                  rows={4}
                  placeholder="Message"
                  className="
                    w-full
                    resize-none
                    border-0
                    bg-white
                    px-5
                    py-4
                    text-[16px]
                    text-gray-700
                    outline-none
                    placeholder:text-gray-500
                  "
                />

                <button
                  type="submit"
                  className="
                    px-8
                    py-3
                  "
                  style={{
                    background:
                      "linear-gradient(105deg, #2079bd 0%, #287fbd 38%, #72c4aa 100%)",
                  }}
                >
                  Submit
                </button>
              </form>
            </section>
          </div>
        </div>
      </aside>
    </>
  );
}
