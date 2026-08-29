"use client";

import Footer from "@/Components/common/Footer";
import Hero from "@/Components/common/Hero";
import Navbar from "@/Components/common/Navbar";

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
import { useEffect } from "react";

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

function IconBox({ icon: Icon }) {
  return (
    <div className="grid h-14 w-14 shrink-0 place-items-center border border-[#2b8bc7]/70 text-[#1599df] sm:h-16 sm:w-16 md:h-20 md:w-20">
      <Icon size={18} />
    </div>
  );
}

function ServiceCard({ item }) {
  const Icon = item.icon;

  return (
    <article
      data-aos={item.animate}
      className={`border border-[#267fba] p-4 sm:p-6 md:p-8 lg:p-10 ${
        item.featured
          ? "bg-gradient-to-r from-[#2286c8] to-[#69c2a9]"
          : "bg-[#303030]"
      }`}
    >
      <div className="flex flex-col gap-4 min-[480px]:flex-row sm:gap-5">
        <IconBox icon={Icon} />

        <div className="min-w-0 flex-1">
          <h3 className={`text-[16px] font-bold leading-tight ${item.featured ? "text-white" : "bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-transparent"} sm:text-[20px] md:text-[23px]`}>
            {item.title}
          </h3>

          <p
            className={`mt-2 text-[12px] leading-[1.6] sm:text-[14px] md:text-[15px] lg:text-[16px] ${
              item.featured ? "text-white" : "text-gray-200"
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
      className="border border-white/20 px-4 py-5 sm:px-6 sm:py-7 md:px-8"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <Icon
          size={24}
          className="mt-1 shrink-0 text-white sm:h-[30px] sm:w-[30px]"
        />

        <div className="min-w-0">
          <h3 className="text-[15px] font-bold text-white sm:text-[18px] md:text-[20px]">
            {title}
          </h3>

          <p className="mt-1 text-[12px] leading-[1.55] text-white/90 sm:text-[14px] md:text-[15px]">
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
        <div className="grid h-14 w-14 shrink-0 place-items-center bg-gradient-to-br from-[#1886c9] to-[#66c0ad] sm:h-16 sm:w-16 md:h-20 md:w-20">
          <Icon size={17} className="sm:h-[19px] sm:w-[19px]" />
        </div>

        <div className="min-w-0">
          <h3 className="text-[15px] font-bold text-[#159fe8] sm:text-[17px] md:text-[18px]">
            {title}
          </h3>

          <p className="mt-1 text-[12px] leading-[1.55] text-white/90 sm:text-[14px] md:text-[15px]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BrandActivationPage() {
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
    <main className="min-h-screen overflow-hidden bg-[#2d2d2d] text-white">
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <Hero
        title="Brand Activation Agency in India"
        desc="At Wizcraft, we go beyond designing events, we craft experiential brand activations that bring your brand to life. As a leading brand activation agency in India and Dubai, we help businesses connect with audiences through experiences that inspire loyalty, spark conversations, and deliver measurable outcomes."
      />

      {/* ================= SERVICES ================= */}
      <section className="container-x mx-auto px-4 py-10 sm:px-6 sm:py-14 md:px-0 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 md:gap-5">
          {/* Left */}
          <div>
            <p className="mb-6 text-[12px] leading-[1.7] text-white/90 sm:text-[14px] md:text-[16px]">
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
      <section className="container-x mx-4 border-2 border-[#2188c3] px-4 py-7 sm:mx-6 sm:border-4 sm:px-7 sm:py-10 md:mx-auto md:px-12 md:py-14">
        <p
          data-aos="zoom-in-left"
          className="mb-4 bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-3xl font-semibold uppercase text-transparent sm:text-4xl md:text-5xl"
        >
          Why Choose Us?
        </p>

        <p className="max-w-[790px] text-[12px] leading-[1.7] text-white/90 sm:text-[14px] md:text-[16px]">
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
          className="my-7 h-40 w-full object-cover sm:h-56 md:h-[250px]"
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
      <section className="mt-8 bg-gradient-to-r from-[#197cc1] via-[#258dc6] to-[#6bc3ab] px-4 py-10 sm:mt-12 sm:px-6 sm:py-14 md:mt-16">
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
          className="mb-4 bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-3xl font-semibold uppercase text-transparent sm:text-4xl md:text-5xl"
        >
          Our Presence
        </p>

        <p className="text-[12px] leading-[1.7] text-white/90 sm:text-[14px] md:text-[16px]">
          We have operations in key markets, with truly integrated and scalable
          solutions.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {locations.map(([title, text]) => (
            <article
              key={title}
              data-aos="zoom-in"
              className="bg-gradient-to-r from-[#2184c5] to-[#67bda9] p-5 sm:p-7 md:p-8"
            >
              <h3 className="text-[18px] font-bold sm:text-[20px]">
                {title}
              </h3>

              <p className="mt-2 text-[13px] leading-[1.6] sm:text-[15px] md:text-[16px]">
                {text}
              </p>
            </article>
          ))}
        </div>

        {/* ================= PROCESS ================= */}
        <div className="mx-auto mt-12 sm:mt-14">
          <p className="mb-4 bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-center text-3xl font-semibold uppercase text-transparent sm:text-4xl md:text-5xl">
            How We Work
          </p>

          <p className="text-center text-[12px] leading-[1.7] sm:text-[14px] md:text-[16px]">
            We work on creating an unparalleled experience for your brand
            engagement with a structured flow.
          </p>

          <div className="relative mt-6">
            {/* Steps */}
            <div className="relative z-20 grid grid-cols-5 gap-1 sm:flex sm:flex-wrap sm:justify-center sm:gap-3 md:gap-5">
              {["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"].map(
                (step, i) => (
                  <div
                    key={step}
                    className={`flex min-h-[45px] items-center justify-center px-1 py-3 text-[9px] font-semibold sm:min-h-0 sm:min-w-[80px] sm:px-5 sm:py-3 sm:text-[11px] md:min-w-[100px] md:px-8 md:py-4 md:text-[12px] ${
                      i === 0
                        ? "bg-gradient-to-r from-[#2184c5] to-[#68bda9]"
                        : "bg-[#8a8a8a]"
                    }`}
                  >
                    {step}
                  </div>
                ),
              )}
            </div>

            {/* Description */}
            <div className="relative z-10 -mt-2 border border-[#2184c5] px-4 pb-6 pt-10 text-[12px] leading-[1.7] sm:-mt-4 sm:px-8 sm:pb-8 sm:pt-14 sm:text-[14px] md:-mt-6 md:px-15 md:pt-20 md:text-[16px]">
              First we uncover your brand narrative, identify your audience,
              and define your goals with precision.
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="mx-auto mt-10 max-w-[900px] text-center text-[12px] font-medium leading-[1.8] sm:mt-14 sm:text-[15px] md:text-[18px]">
          <p>
            Join forces with Wizcraft, the preferred brand activation agency in
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
            <span className="text-[#68c4b2]">
              India, Dubai, and worldwide.
            </span>
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-[#197bc1] to-[#69c2aa] px-4 py-12 text-center sm:px-6 sm:py-16 md:py-20">
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