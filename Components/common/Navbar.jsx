"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Playfair_Display } from "next/font/google";

// Same display font as page.js so the navbar matches on every page
// (not only where the wrapper defines --font-display).
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const display = { fontFamily: playfair.style.fontFamily };

const links = [
  ["HOME", "/"],
  ["ABOUT US", "/about"],

  {
    label: "OUR BUSINESSES",
    href: "#",

    children: [
      /* BRAND ACTIVATION */
      {
        label: "Brand Activation",
        href: "/business/brand-activation",

        children: [
          // [
          //   "Nation Building Events",
          //   "/business/brand-activation/nation-building-events",
          // ],
          // [
          //   "Data Derived Customer Centric Solutions",
          //   "/business/brand-activation/data-drive-customer-centric-solution",
          // ],
          // [
          //   "Corporate Event Launches",
          //   "/business/brand-activation/corporate-event-launches",
          // ],
          // [
          //   "On-Ground Activations",
          //   "/business/brand-activation/on-ground-activation",
          // ],
          // [
          //   "Exhibition Design & Management",
          //   "/business/brand-activation/exhibition-design-and-management",
          // ],
          // [
          //   "Content Curation – Animations, Graphics & AVs",
          //   "/business/brand-activation/content-curation-animations-graphics-and-avs",
          // ],
          [
            "Explore Activations",
            "/business/brand-activation/explore-activations",
          ],
          ["Explore Launches", "/business/brand-activation/explore-launches"],
        ],
      },

      /* DIGITAL SOLUTIONS */
      {
        label: "Digital Solutions",
        href: "/business/digital-solutions",

        children: [
          // ["Live Streaming", "/business/digital-solutions/live-streaming"],
          // [
          //   "Virtual Events in Immersive Environments",
          //   "/business/digital-solutions/virtual-events-immersive-environments",
          // ],
          // [
          //   "Virtual Events with AR Based Content",
          //   "/business/digital-solutions/virtual-events-with-ar-based-content",
          // ],
          // [
          //   "Virtual Events with Integrated VR",
          //   "/business/digital-solutions/virtual-events-with-integrated-vr",
          // ],
          // ["Hybrid Events", "/business/digital-solutions/hybrid-events"],
          // [
          //   "Content Design & Management",
          //   "/business/digital-solutions/content-design-and-management",
          // ],
          // [
          //   "Digital Marketing",
          //   "/business/digital-solutions/digital-marketing",
          // ],
          ["Explore our work", "/business/digital-solutions/explore-our-work"],
        ],
      },

      /* SPECIAL EVENTS */
      {
        label: "Special Events",
        href: "/business/special-events",

        children: [
          // [
          //   "Special Event Management Services",
          //   "/business/special-events/special-event-management-services",
          // ],
          // [
          //   "Opening & Closing Ceremonies",
          //   "/business/special-events/opening-closing-ceremonies",
          // ],
          // [
          //   "Concerts & Festivals",
          //   "/business/special-events/concerts-festivals",
          // ],
          // ["Sporting Events", "/business/special-events/sporting-events"],
          // [
          //   "Launch of New Initiatives",
          //   "/business/special-events/launch-new-initiatives",
          // ],
          // ["Trade Shows", "/business/special-events/trade-shows"],
          // [
          //   "Cultural & Tourism Events",
          //   "/business/special-events/cultural-tourism-events",
          // ],
          // [
          //   "Son Et Lumière Spectaculars",
          //   "/business/special-events/son-et-lumiere-spectaculars",
          // ],
          // [
          //   "Social Celebrations",
          //   "/business/special-events/social-celebrations",
          // ],
          // ["Weddings", "/business/special-events/weddings"],
          ["Explore Events", "/business/special-events/explore-events"],
          [
            "Explore Goverment Projects",
            "/business/special-events/explore-government-projects",
          ],
        ],
      },
      {
        label: "Advertising & Outdoor Marketing",
        href: "/business/advertising-outdoor-marketing",
        children: [
          [
            "Explore outdoor media",
            "/business/advertising-outdoor-marketing/explore-outdoor-media",
          ],
        ],
      },
    ],
  },

  ["PORTFOLIO", "/portfolio"],
  ["BLOG", "/blog"],
  ["CONTACT US", "/contact"],
];

// Helper: check if a dropdown item (or its nested children) matches current path
function isDropdownActive(item, pathname) {
  if (!item.children) return false;

  return item.children.some((child) => {
    if (Array.isArray(child)) {
      return child[1] === pathname;
    }
    if (child.href && child.href === pathname) return true;
    if (child.children) {
      return child.children.some(([, subHref]) => subHref === pathname);
    }
    return false;
  });
}

// Shared input styles for the side-menu form (underline style, like page.js)
const inputClass =
  "h-[46px] w-full border-b border-[#13253b]/20 bg-transparent px-1 text-[15px] text-[#13253b] outline-none transition-all placeholder:text-[#8a8a8a] focus:border-[#c9a768]";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [formData, setFormData] = useState({
    full_name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          ...formData,
          location: "----",
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("Message sent successfully!");

      setFormData({
        full_name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("");
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header className="sticky top-0 z-40 border-b border-[#c9a768]/50 bg-[#f8f4ec]/95 shadow-[0_10px_30px_-20px_rgba(19,37,59,0.35)] backdrop-blur-md">
        <div className="container-x flex h-[90px] items-center justify-between md:h-[120px]">
          {/* ================= LOGO ================= */}
          <Link href="/" className="shrink-0">
            <img
              src="/home/Dolphin-Logo.png"
              alt="Dolphin Facilities Logo"
              className="h-[110px] w-[180px] object-contain md:h-[170px] md:w-[280px]"
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
            {links.map((item) => {
              const isDropdown = !Array.isArray(item);
              const label = isDropdown ? item.label : item[0];
              const href = isDropdown ? item.href : item[1];

              const active = isDropdown
                ? isDropdownActive(item, pathname)
                : pathname === href;

              return (
                <div key={label} className="group relative">
                  {/* ================= MAIN LINK ================= */}
                  <Link
                    href={href}
                    style={display}
                    className={`
                      flex
                      items-center
                      gap-1.5
                      border-b
                      pb-1
                      text-[14px]
                      font-medium
                      tracking-[0.12em]
                      transition-colors
                      duration-300
                      hover:border-[#c9a768]
                      hover:text-[#a5803a]
                      xl:text-[15px]
                      ${
                        active
                          ? "border-[#c9a768] text-[#a5803a]"
                          : "border-transparent text-[#13253b]"
                      }
                    `}
                  >
                    {label}

                    {isDropdown && (
                      <span
                        className="
                          text-xs
                          text-[#a5803a]
                          transition-transform
                          duration-300
                          group-hover:rotate-45
                        "
                      >
                        +
                      </span>
                    )}
                  </Link>

                  {/* =====================================================
                      FIRST LEVEL DROPDOWN
                      (pt-5 instead of mt-5 so the hover doesn't break
                      when the mouse crosses the gap)
                  ===================================================== */}
                  {isDropdown && (
                    <div
                      className="
                        invisible
                        absolute
                        left-0
                        top-full
                        w-[270px]
                        translate-y-2
                        pt-5
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
                          border
                          border-[#c9a768]/30
                          border-t-2
                          border-t-[#c9a768]
                          bg-[#f8f4ec]
                          py-2
                          shadow-[0_25px_50px_-20px_rgba(19,37,59,0.3)]
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
                                href={child.href || "#"}
                                style={display}
                                className="
                                  flex
                                  items-center
                                  justify-between
                                  border-l-2
                                  border-transparent
                                  px-5
                                  py-3
                                  text-[15px]
                                  font-medium
                                  text-[#13253b]
                                  transition
                                  hover:border-[#c9a768]
                                  hover:bg-[#c9a768]/10
                                  hover:text-[#a5803a]
                                "
                              >
                                <span>{child.label}</span>
                                {hasChildren && (
                                  <span className="text-[#a5803a]">›</span>
                                )}
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
                                  <div
                                    className="
                                      max-h-[400px]
                                      overflow-y-auto
                                      border
                                      border-[#c9a768]/30
                                      bg-[#f8f4ec]
                                      py-2
                                      shadow-[0_25px_50px_-20px_rgba(19,37,59,0.3)]
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
                                            border-[#13253b]/10
                                            px-5
                                            py-3
                                            text-[14px]
                                            font-normal
                                            leading-relaxed
                                            text-[#13253b]/80
                                            transition
                                            last:border-b-0
                                            hover:bg-[#c9a768]/10
                                            hover:text-[#a5803a]
                                          "
                                        >
                                          {subLabel}
                                        </Link>
                                      )
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
              border
              border-[#c9a768]/40
              transition
              hover:border-[#c9a768]
              hover:bg-[#c9a768]/10
            "
          >
            <span className="flex flex-col items-end gap-[5px]">
              <span className="block h-[2px] w-5 bg-[#13253b]" />
              <span className="block h-[2px] w-7 bg-[#13253b]" />
              <span className="block h-[2px] w-3 bg-[#13253b]" />
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
          bg-[#13253b]/50
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
          border-r
          border-[#c9a768]/30
          bg-[#f8f4ec]
          text-[#13253b]
          shadow-2xl
          transition-transform
          duration-500
          ease-[cubic-bezier(0.4,0,0.2,1)]
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="relative min-h-full px-[19px] py-7">
          {/* CLOSE BUTTON */}
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
              text-[#13253b]
              transition
              hover:text-[#a5803a]
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
              border-[#c9a768]/30
              pb-10
              lg:hidden
            "
          >
            <div className="text-left leading-none">
              <div
                style={display}
                className="text-[28px] font-semibold tracking-tight text-[#13253b]"
              >
                <span className="mr-2 text-[20px] text-[#a5803a]">★</span>
                Dolphin Facilities
              </div>

              <div className="mt-3 text-[9px] font-medium tracking-[0.42em] text-[#a5803a]">
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
                <div key={label} className="border-b border-[#13253b]/10">
                  {/* Main Item */}
                  {isDropdown ? (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(openDropdown === label ? null : label)
                      }
                      style={display}
                      className="
                        relative
                        flex
                        min-h-[48px]
                        w-full
                        items-center
                        justify-between
                        text-left
                        text-[14px]
                        font-medium
                        tracking-[0.1em]
                        text-[#13253b]
                        transition-colors
                      "
                    >
                      <span>{label}</span>

                      <span
                        className={`
                          flex
                          h-[38px]
                          w-[38px]
                          items-center
                          justify-center
                          bg-[#c9a768]
                          text-[26px]
                          font-light
                          leading-none
                          text-[#13253b]
                          transition-transform
                          duration-200
                          ${openDropdown === label ? "rotate-90" : ""}
                        `}
                      >
                        ›
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      style={display}
                      className="
                        flex
                        min-h-[48px]
                        items-center
                        text-[14px]
                        font-medium
                        tracking-[0.1em]
                        text-[#13253b]
                        transition-colors
                        hover:text-[#a5803a]
                      "
                    >
                      {label}
                    </Link>
                  )}

                  {/* OUR BUSINESSES Dropdown */}
                  {isDropdown && openDropdown === label && (
                    <div className="pb-2 pl-3">
                      {item.children?.map((child) => {
                        const childIsDropdown = !Array.isArray(child);

                        const childLabel = childIsDropdown
                          ? child.label
                          : child[0];

                        const childHref = childIsDropdown
                          ? child.href
                          : child[1];

                        return (
                          <div key={childLabel}>
                            {childIsDropdown ? (
                              <details className="group">
                                <summary
                                  className="
                                    flex
                                    cursor-pointer
                                    items-center
                                    justify-between
                                    py-2
                                    pr-2
                                    text-[12px]
                                    font-medium
                                    text-[#13253b]/85
                                  "
                                >
                                  <Link
                                    href={childHref || "#"}
                                    onClick={() => setOpen(false)}
                                    className="
                                      block
                                      w-full
                                      py-2.5
                                      text-[14px]
                                      text-[#13253b]/75
                                      transition-colors
                                      hover:text-[#a5803a]
                                    "
                                  >
                                    {childLabel}
                                  </Link>

                                  <span
                                    className="
                                      flex
                                      h-[38px]
                                      w-[40px]
                                      items-center
                                      justify-center
                                      border
                                      border-[#c9a768]/60
                                      text-[20px]
                                      text-[#a5803a]
                                      transition-transform
                                      group-open:rotate-90
                                    "
                                  >
                                    ›
                                  </span>
                                </summary>

                                <div className="ml-3 border-l border-[#c9a768]/40 pl-3">
                                  {child.children?.map((subChild) => (
                                    <Link
                                      key={subChild[0]}
                                      href={subChild[1]}
                                      onClick={() => setOpen(false)}
                                      className="
                                        block
                                        py-2.5
                                        text-[13px]
                                        text-[#13253b]/65
                                        transition-colors
                                        hover:text-[#a5803a]
                                      "
                                    >
                                      {subChild[0]}
                                    </Link>
                                  ))}
                                </div>
                              </details>
                            ) : (
                              <Link
                                href={childHref}
                                onClick={() => setOpen(false)}
                                className="
                                  block
                                  py-3
                                  text-[14px]
                                  text-[#13253b]/75
                                  hover:text-[#a5803a]
                                "
                              >
                                {childLabel}
                              </Link>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
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
              className="mb-3 flex items-center gap-4 transition-colors hover:text-[#a5803a]"
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
                  bg-[#c9a768]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[15px] w-[15px] fill-none stroke-[#13253b]"
                  strokeWidth="2"
                >
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>

              <span className="text-[15px]">info@wizcraft.co</span>
            </a>

            {/* PHONE 1 */}
            <a
              href="tel:+919819822333"
              className="mb-3 flex items-center gap-4 transition-colors hover:text-[#a5803a]"
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
                  bg-[#c9a768]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[15px] w-[15px] fill-[#13253b]"
                >
                  <path d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2l3.4 1.4c.4.2.6.6.6 1v3.1c0 .6-.4 1-1 1C10.4 21.5 2.5 13.6 2.5 4.5c0-.6.4-1 1-1h3.1c.4 0 .8.2 1 .6L9 7.5c.2.4.1.8-.2 1.1l-2.2 2.2z" />
                </svg>
              </span>

              <span className="text-[15px]">+91 9819822333</span>
            </a>

            {/* PHONE 2 */}
            <a
              href="tel:+912247791300"
              className="flex items-center gap-4 transition-colors hover:text-[#a5803a]"
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
                  bg-[#c9a768]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[15px] w-[15px] fill-[#13253b]"
                >
                  <path d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2l3.4 1.4c.4.2.6.6.6 1v3.1c0 .6-.4 1-1 1C10.4 21.5 2.5 13.6 2.5 4.5c0-.6.4-1 1-1h3.1c.4 0 .8.2 1 .6L9 7.5c.2.4.1.8-.2 1.1l-2.2 2.2z" />
                </svg>
              </span>

              <span className="text-[15px]">+91 02247791300</span>
            </a>
          </div>

          {/* =====================================================
              MOBILE SOCIAL
          ===================================================== */}
          <div
            className="
              mt-5
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
              className="text-[#13253b] transition hover:text-[#a5803a]"
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
              className="text-[#13253b] transition hover:text-[#a5803a]"
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
              className="text-[18px] font-bold text-[#13253b] transition hover:text-[#a5803a]"
            >
              in
            </a>

            {/* FACEBOOK */}
            <a
              href="#"
              aria-label="Facebook"
              className="text-[18px] font-bold text-[#13253b] transition hover:text-[#a5803a]"
            >
              f
            </a>

            {/* YOUTUBE */}
            <a
              href="#"
              aria-label="YouTube"
              className="text-[#13253b] transition hover:text-[#a5803a]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] fill-current"
              >
                <path d="M23 12s0-3.5-.5-5.1c-.3-1.1-1.2-2-2.3-2.3C18.6 4 12 4 12 4s-6.6 0-8.2.6c-1.1.3-2 1.2-2.3 2.3C1 8.5 1 12 1 12s0 3.5.5 5.1c.3 1.1 1.2 2 2.3 2.3 1.6.6 8.2.6 8.2.6s6.6 0 8.2-.6c1.1-.3 2-1.2 2.3-3.3C23 15.5 23 12 23 12Z" />
                <path d="m10 8 6 4-6 4V8Z" className="fill-[#f8f4ec]" />
              </svg>
            </a>

            {/* X */}
            <a
              href="#"
              aria-label="X"
              className="text-[18px] text-[#13253b] transition hover:text-[#a5803a]"
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
                <div
                  style={display}
                  className="text-[32px] font-semibold tracking-tight text-[#13253b]"
                >
                  <span className="mr-2 text-2xl text-[#a5803a]">★</span>
                  Dolphin Facilities
                </div>

                <div className="mt-3 text-[10px] font-medium tracking-[0.42em] text-[#a5803a]">
                  ENTERTAINMENT AGENCY
                </div>
              </div>
            </Link>

            <div className="mt-8 h-px w-14 bg-[#c9a768]" />

            {/* ABOUT */}
            <section className="mt-8">
              <p className="text-xs font-medium tracking-[0.2em] text-[#a5803a]">
                ABOUT US
              </p>

              <p className="mt-3 text-[15px] leading-[1.75] text-[#13253b]/75">
                <strong className="font-semibold text-[#13253b]">
                  Dolphin Facilities Pvt. Ltd.
                </strong>{" "}
                is a Bhopal-based corporate event management company
                specializing in creating memorable and impactful events. We
                provide complete event management solutions, from planning and
                creative concepts to production and on-ground execution.
              </p>

              <p className="mt-3 text-[15px] leading-[1.75] text-[#13253b]/75">
                Our office is located at{" "}
                <strong className="font-semibold text-[#13253b]">
                  17-18, Block A, Second Floor, Gammon India, TT Nagar, Bhopal –
                  462003
                </strong>
                .
              </p>

              <p className="mt-3 text-[15px] leading-[1.75] text-[#13253b]/75">
                We specialize in corporate events, exhibitions, brand
                activations, product launches, outdoor advertising, and other
                promotional events.
              </p>
            </section>

            {/* CONTACT FORM */}
            <section className="mt-10">
              <p className="text-xs font-medium tracking-[0.2em] text-[#a5803a]">
                GET IN TOUCH
              </p>

              <h2
                style={display}
                className="mt-2 text-[26px] font-medium text-[#13253b]"
              >
                Let's talk
              </h2>

              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className={inputClass}
                />

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  required
                  className={inputClass}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className={inputClass}
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  maxLength={10}
                  required
                  className={inputClass}
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Message"
                  required
                  className="w-full resize-none border border-[#13253b]/20 bg-transparent px-3 py-3 text-[15px] text-[#13253b] outline-none transition-all placeholder:text-[#8a8a8a] focus:border-[#c9a768]"
                />

                <button
                  type="submit"
                  disabled={isSending}
                  className="mt-2 border border-[#13253b] bg-[#13253b] px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:border-[#c9a768] hover:bg-[#c9a768] hover:text-[#13253b] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? "Sending..." : "Submit"}
                </button>

                {status && (
                  <p
                    className={`text-[14px] font-medium ${
                      status.includes("successfully")
                        ? "text-[#a5803a]"
                        : "text-red-600"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </section>
          </div>
        </div>
      </aside>
    </>
  );
}