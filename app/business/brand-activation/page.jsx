"use client";

import Footer from "@/Components/common/Footer";
import Navbar from "@/Components/common/Navbar";
import { motion } from "framer-motion";

import {
  FaBuilding,
  FaHandshake,
  FaCommentDots,
  FaChartLine,
  FaAward,
  FaMapMarkerAlt,
  FaGlobe,
  FaMobileAlt,
  FaShoppingBag,
  FaCrown,
  FaHeartbeat,
  FaIndustry,
  FaBriefcase,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import SocialRail from "@/Components/home/SocialRail";

const ease = [0.22, 1, 0.36, 1];

const services = [
  {
    icon: FaAward,
    title: "Experiential Brand Activations",
    text: "We are experts at crafting and delivering powerful brand activations that transport audiences into your brand world. From interactive installations to live demonstrations and pop ups, we craft experiences that people recall and share.",
    featured: true,
    animate: "fade-right",
  },
  {
    icon: FaBuilding,
    title: "Event Management Services in Dubai and India",
    text: "Our area of expertise is end-to-end event management services in Dubai and India with immersive concepts, perfect logistics, and smooth execution. For marquee exhibitions and conferences, we deliver professionalism and creativity at every step of your event.",
    animate: "fade-left",
  },
  {
    icon: FaCommentDots,
    title: "Customer Engagement Campaigns",
    text: "Engagement is at the center of everything we do. Our customer engagement campaigns can be designed for social advertising, to create authentic connections, influencer-led events, or digital-physical event hybrids.",
    animate: "fade-right",
  },
  {
    icon: FaHandshake,
    title: "Corporate & Retail Activations",
    text: "As a trusted brand activation agency, we empower corporates and retail giants through impactful launches, immersive in-store experiences, and meaningful consumer touchpoints.",
    animate: "fade-left",
  },
  {
    icon: FaChartLine,
    title: "Digital & Hybrid Brand Experiences",
    text: "Hybrid brand activations are the future. We craft digital experiences that enhance live events, broaden audience reach, and keep your brand top of mind in a rapidly changing world.",
    animate: "fade-left",
  },
];

const advantages = [
  [
    "Proven Expertise",
    "With years of experience as a veteran brand activation agency, we've worked with brands around the world and created award-winning activations.",
    FaAward,
  ],
  [
    "Local Advantage",
    "Searching for a Brand Activation Agency in Mumbai, Gurgaon, Hyderabad, Bangalore and Chennai? We have people on the ground to localize your campaigns and make them culturally relevant.",
    FaMapMarkerAlt,
  ],
  [
    "Middle East Exposure",
    "As a premier brand activation agency in Dubai, we enable brands to connect with the Middle East's vibrant and diverse consumer base.",
    FaGlobe,
  ],
  [
    "Creative Brilliance",
    "Not many experiential marketing agencies can match our out of the box thinking with data driven strategies.",
    FaChartLine,
  ],
  [
    "Pan-India Reach",
    "From the metros to the emerging markets, our India Brand Activation Services have a presence in every nook and corner of the nation.",
    FaGlobe,
  ],
];

const industries = [
  ["FMCG", "Launches, sampling, retail promotions, and roadshows.", FaIndustry],
  [
    "Technology",
    "Product demonstrations, AR/VR showcases, and interactive digital experiences.",
    FaMobileAlt,
  ],
  [
    "Luxury & Lifestyle",
    "High-level experiential brand activations that bring luxury products to life.",
    FaCrown,
  ],
  [
    "Healthcare & Pharma",
    "Interactive education and awareness drives.",
    FaHeartbeat,
  ],
  [
    "Retail & E-commerce",
    "Conversion driven in-store customer engagement.",
    FaShoppingBag,
  ],
  [
    "Corporate",
    "B2B activations, conferences, and internal engagement initiatives.",
    FaBriefcase,
  ],
];

const locations = [
  [
    "Dubai",
    "As a top brand activation agency in Dubai, we create experiences that resonate with one of the world's most cosmopolitan audiences.",
  ],
  [
    "India",
    "Providing unparalleled Brand Activation Services in India, we reach metro cities and more through our rich network of local teams and consumer sentiments.",
  ],
  [
    "Metro Hubs",
    "Being a full service Brand Activation Company in Mumbai, Gurgaon, Hyderabad, Bangalore and Chennai, our people understand the capabilities to conduct flawless activations across different geographies at the same time.",
  ],
];

/* ================= HERO (Wizcraft / NationHero style) ================= */
function BrandActivationHero({
  title = "Brand Activation Agency in India",
  desc = "At Dolphin Facilities, we go beyond designing events, we craft experiential brand activations that bring your brand to life. As a leading brand activation agency in India and Dubai, we help businesses connect with audiences through experiences that inspire loyalty, spark conversations, and deliver measurable outcomes.",
  eyebrow = "WHAT WE DO",
}) {
  return (
    <section
      className="relative w-full overflow-hidden border-b border-[#c9a768]/40 bg-[#f8f4ec] px-5 py-14 sm:px-8 md:px-12 md:py-20"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% -10%, rgba(201,167,104,0.22), transparent 60%), radial-gradient(rgba(19,37,59,0.06) 1px, transparent 1px)",
        backgroundSize: "100% 100%, 24px 24px",
      }}
    >
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
            {eyebrow}
          </span>
          <span className="h-px w-10 bg-[#c9a768]" />
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
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
          className="mx-auto max-w-[850px] text-center text-[15px] font-medium italic leading-[1.65] text-[#4a4438] sm:text-[16px] md:text-[19px]"
        >
          {desc}
        </motion.p>
      </div>
    </section>
  );
}

function IconBox({ icon: Icon, item }) {
  return (
    <div className={`grid h-14 w-14 shrink-0 place-items-center border ${item.featured ? "text-white border-white/40" : "text-[#a5803a] border-[#c9a768]/50"} sm:h-16 sm:w-16 md:h-20 md:w-20`}>
      <Icon size={18} />
    </div>
  );
}

function ServiceCard({ item }) {
  const Icon = item.icon;

  return (
    <article
      data-aos={item.animate}
      className={`border transition-colors duration-300 p-4 sm:p-6 md:p-8 lg:p-10 ${
        item.featured
          ? "border-[#c9a768]/40 bg-[#13253b]"
          : "border-[#13253b]/10 bg-white hover:border-[#c9a768]"
      }`}
    >
      <div className="flex flex-col gap-4 min-[480px]:flex-row sm:gap-5">
        <IconBox icon={Icon} item={item} />

        <div className="min-w-0 flex-1">
          <h3 className={`text-[16px] font-bold leading-tight ${item.featured ? "text-white" : "text-[#13253b]"} sm:text-[20px] md:text-[23px]`}>
            {item.title}
          </h3>

          <p
            className={`mt-2 text-[12px] leading-[1.6] sm:text-[14px] md:text-[15px] lg:text-[16px] ${
              item.featured ? "text-white/85" : "text-[#6b6255]"
            }`}
          >
            {item.text}
          </p>
        </div>
      </div>
    </article>
  );
}

function IndustryCard({ item }) {
  const [title, text, Icon] = item;

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1200"
      className="border border-[#c9a768]/25 bg-white/5 px-4 py-5 transition-colors duration-300 hover:border-[#c9a768] sm:px-6 sm:py-7 md:px-8"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <Icon
          size={24}
          className="mt-1 shrink-0 text-[#c9a768] sm:h-[30px] sm:w-[30px]"
        />

        <div className="min-w-0">
          <h3 className="text-[15px] font-bold text-white sm:text-[18px] md:text-[20px]">
            {title}
          </h3>

          <p className="mt-1 text-[12px] leading-[1.55] text-[#4a4438] sm:text-[14px] md:text-[15px]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function AdvantageCard({ title, text, Icon }) {
  return (
    <div data-aos="fade-up">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center bg-[#13253b] sm:h-16 sm:w-16 md:h-20 md:w-20">
          <Icon size={17} className="text-[#c9a768] sm:h-[19px] sm:w-[19px]" />
        </div>

        <div className="min-w-0">
          <h3 className="text-[15px] font-bold text-[#a5803a] sm:text-[17px] md:text-[18px]">
            {title}
          </h3>

          <p className="mt-1 text-[12px] leading-[1.55] text-[#4a4438] sm:text-[14px] md:text-[15px]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BrandActivationPage() {

    const [activeStep, setActiveStep] = useState(0);

    const steps = [
  {
    title: "Step 1",
    content:
      "First we uncover your brand narrative, identify your audience, and define your goals with precision.",
  },
  {
    title: "Step 2",
    content:
      "Next we develop a clear strategy and define the creative direction that best fits your brand.",
  },
  {
    title: "Step 3",
    content:
      "Then we create the visual identity and design system that brings your brand story to life.",
  },
  {
    title: "Step 4",
    content:
      "After that we refine the experience, ensuring every touchpoint feels consistent and purposeful.",
  },
  {
    title: "Step 5",
    content:
      "Finally we deliver the complete brand experience and help you move forward with confidence.",
  },
];

  useEffect(() => {
    if (window.scrollY > 100) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f4ec] text-[#4a4438]">
      {/* Header */}
      <Navbar />
      {/* <SocialRail /> */}

      {/* Hero */}
      <BrandActivationHero
        title="Brand Activation Agency in India"
        desc="At Dolphin Facilities, we go beyond designing events, we craft experiential brand activations that bring your brand to life. As a leading brand activation agency in India and Dubai, we help businesses connect with audiences through experiences that inspire loyalty, spark conversations, and deliver measurable outcomes."
      />

      {/* ================= SERVICES ================= */}
      <section className="container-x mx-auto px-4 py-10 sm:px-6 sm:py-14 md:px-0 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 md:gap-5">
          {/* Left */}
          <div>
            <p className="mb-6 text-[12px] leading-[1.7] text-[#4a4438] sm:text-[14px] md:text-[16px]">
              We redefine engagement with a wide portfolio of brand activation
              marketing solutions, from experiential campaigns to digital
              activations all designed to amplify visibility and maximize ROI.
            </p>

            <div className="space-y-4">
              {services
                .filter((_, i) => i === 0 || i === 2)
                .map((item) => (
                  <ServiceCard item={item} key={item.title} />
                ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {services
              .filter((_, i) => i === 1 || i === 3 || i === 4)
              .map((item) => (
                <ServiceCard item={item} key={item.title} />
              ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="container-x mx-4 border border-[#13253b]/10 bg-white px-4 py-10 shadow-[0_18px_40px_-28px_rgba(19,37,59,0.2)] sm:mx-6 sm:px-8 sm:py-14 md:mx-auto md:px-14 md:py-16">
        <p
          data-aos="zoom-in-left"
          className="mb-4 text-3xl font-semibold uppercase text-[#13253b] sm:text-4xl md:text-5xl"
        >
          Why Choose Us?
        </p>

        <p className="max-w-[790px] text-[12px] leading-[1.7] text-[#4a4438] sm:text-[14px] md:text-[16px]">
          We have 30+ years of experience as a global brand activation agency,
          trusted by 600+ leading brands with path-breaking campaigns.
        </p>

        {/* First two */}
        <div className="mt-7 grid gap-6 sm:grid-cols-2 sm:gap-8">
          {advantages.slice(0, 2).map(([title, text, Icon]) => (
            <AdvantageCard
              key={title}
              title={title}
              text={text}
              Icon={Icon}
            />
          ))}
        </div>

        {/* Image */}
        <img
          data-aos="zoom-in"
          src="/home/clr4.jpg"
          alt="AZIZI brand activation"
          className="my-7 h-40 w-full border border-[#c9a768] object-cover sm:h-56 md:h-[250px]"
        />

        {/* Remaining */}
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          {advantages.slice(2, 5).map(([title, text, Icon]) => (
            <AdvantageCard
              key={title}
              title={title}
              text={text}
              Icon={Icon}
            />
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="mt-8 bg-[#13253b] px-4 py-10 text-white sm:mt-12 sm:px-6 sm:py-14 md:mt-16">
        <div className="container-x mx-auto">
          <p
            data-aos="fade-zoom-in"
            className="text-center text-3xl font-semibold uppercase sm:text-4xl md:text-5xl"
          >
            Industries We Work With
          </p>

          <p className="mx-auto mt-4 max-w-[780px] text-center text-[12px] leading-[1.7] sm:text-[14px] md:text-[16px]">
            Our experience extends across industries, demonstrating our
            adaptability as a full-service brand activation agency.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
            {industries.map((item) => (
              <IndustryCard item={item} key={item[0]} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOCATIONS ================= */}
      <section className="container-x mx-auto px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16">
        <p
          data-aos="fade-zoom-in"
          className="mb-4 text-3xl font-semibold uppercase text-[#13253b] sm:text-4xl md:text-5xl"
        >
          Our Presence
        </p>

        <p className="text-[12px] leading-[1.7] text-[#4a4438] sm:text-[14px] md:text-[16px]">
          We have operations in key markets, with truly integrated and scalable
          solutions.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {locations.map(([title, text]) => (
            <article
              key={title}
              data-aos="zoom-in"
              className="border border-[#13253b]/10 bg-white p-5 shadow-[0_14px_35px_-22px_rgba(19,37,59,0.25)] transition-colors duration-300 hover:border-[#c9a768] sm:p-7 md:p-8"
            >
              <h3 className="text-[18px] font-bold text-[#13253b] sm:text-[20px]">
                {title}
              </h3>

              <p className="mt-2 text-[13px] leading-[1.6] text-[#4a4438] sm:text-[15px] md:text-[16px]">
                {text}
              </p>
            </article>
          ))}
        </div>

        {/* ================= PROCESS ================= */}
        <div className="mx-auto mt-12 sm:mt-14">
          <p className="mb-4 text-center text-3xl font-semibold uppercase text-[#13253b] sm:text-4xl md:text-5xl">
            How We Work
          </p>

          <p className="text-center text-[12px] leading-[1.7] text-[#4a4438] sm:text-[14px] md:text-[16px]">
            We work on creating an unparalleled experience for your brand
            engagement with a structured flow.
          </p>

          <div className="relative mt-6">
      {/* Steps */}
      <div className="relative z-20 grid grid-cols-5 gap-1 sm:flex sm:flex-wrap sm:justify-center sm:gap-3 md:gap-5">
        {steps.map((step, i) => (
          <button
            type="button"
            key={step.title}
            onClick={() => setActiveStep(i)}
            className={`flex min-h-[45px] items-center justify-center cursor-pointer px-1 py-3 text-[9px] font-semibold transition-all duration-300 sm:min-h-0 sm:min-w-[80px] sm:px-5 sm:py-3 sm:text-[11px] md:min-w-[100px] md:px-8 md:py-4 md:text-[12px] ${
              activeStep === i
                ? "bg-[#13253b] text-white"
                : "border border-[#13253b]/15 bg-white text-[#13253b] hover:border-[#c9a768]"
            }`}
          >
            {step.title}
          </button>
        ))}
      </div>

      {/* Description */}
      <div className="relative z-10 -mt-2 border border-[#13253b]/10 bg-white px-4 pb-6 pt-10 text-[12px] leading-[1.7] text-[#4a4438] sm:-mt-4 sm:px-8 sm:pb-8 sm:pt-14 sm:text-[14px] md:-mt-6 md:px-15 md:pt-20 md:text-[16px]">
        {steps[activeStep].content}
      </div>
    </div>
        </div>

        {/* Bottom Content */}
        <div className="mx-auto mt-10 max-w-[900px] text-center text-[12px] font-medium leading-[1.8] text-[#4a4438] sm:mt-14 sm:text-[15px] md:text-[18px]">
          <p>
            Join forces with Dolphin Facilities, the preferred brand activation agency in
            Dubai and trusted brand activation company in Mumbai, Gurgaon,
            Hyderabad, Bangalore and Chennai.
          </p>

          <p className="mt-2">
            Let's build experiences that inspire people, spark conversations,
            and create enduring brand love.
          </p>

          <p className="mt-2">
            Get in touch with us today to discover our brand activation
            services in{" "}
            <span className="text-[#a5803a]">
              India, Dubai, and worldwide.
            </span>
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="border-t border-[#c9a768]/30 bg-[#13253b] px-4 py-12 text-center text-white sm:px-6 sm:py-16 md:py-20">
        <p
          data-aos="fade-up"
          className="text-[14px] sm:text-[18px] md:text-[20px]"
        >
          Are you ready to push your brand from visibility to memorability?
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}