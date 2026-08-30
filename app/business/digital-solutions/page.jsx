"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/Components/common/Footer";
import Hero from "@/Components/common/Hero";
import Navbar from "@/Components/common/Navbar";

import {
  FaBuilding,
  FaHandshake,
  FaCommentDots,
  FaChartLine,
  FaAward,
} from "react-icons/fa";
import SocialRail from "@/Components/home/SocialRail";

const services = [
  {
    icon: FaAward,
    title: "Live Streaming",
    text: "Wizcraft brings over 30 years of expertise to the digital stage through cutting-edge Live Streaming Services. As a leading live streaming company in India and Dubai, we deliver seamless, high-impact broadcasts that connect global audiences with unforgettable, interactive experiences. Virtual Events In Immersive",
    featured: true,
    animate: "fade-right",
  },
  {
    icon: FaBuilding,
    title: "Virtual Events With AR Based Content",
    text: "Wizcraft Entertainment Agency redefines engagement through cutting-edge Virtual Event Services and immersive Augmented & Virtual Reality experiences. Merging creativity, technology, and storytelling, we craft interactive, high-impact digital environments that connect brands and audiences globally, transforming every event into an unforgettable, technology-driven experience.",
    animate: "fade-left",
  },
  {
    icon: FaCommentDots,
    title: "Virtual Events In Immersive Environments",
    text: "We transform digital interactions into immersive brand journeys through our advanced Virtual Event Services and Virtual Event Platform. From 3D environments to gamified engagement, we craft seamless, interactive, and unforgettable virtual experiences that connect, inspire, and leave lasting impressions globally.",
    animate: "fade-right",
  },
  {
    icon: FaHandshake,
    title: "Virtual Events With Integrated VR",
    text: "At Wizcraft, we bring over 30 years of expertise to create immersive Virtual Reality Event Services that redefine engagement. As a leading VR Event Management Company, we merge creativity and technology to craft interactive, high-impact virtual experiences that inspire, connect, and captivate globally.",
    animate: "fade-left",
  },
  {
    icon: FaChartLine,
    title: "Content Design & Management",
    text: "At Wizcraft Entertainment Agency, we turn ideas into powerful stories through expert event content creation services. Combining creativity, strategy, and technology, we craft impactful narratives and immersive designs that elevate every brand experience, engaging audiences and leaving lasting impressions across live and digital platforms worldwide.",
    animate: "fade-right",
  },
  {
    icon: FaChartLine,
    title: "Hybrid Events",
    text: "We specialise in redefining engagement through innovative Hybrid Event Management Services that blend on-ground energy with digital reach. With over 30 years of expertise, we craft seamless hybrid experiences that inspire participation, enhance connection, and create unforgettable impact across audiences worldwide.",
    animate: "fade-left",
  },
  {
    icon: FaChartLine,
    title: "Digital Marketing",
    text: "Wizcraft Digital is an ideas-driven digital experience agency that offers digital marketing, digital content creation, digital performance marketing, digital influencer outreach, digital web and app development solutions, AI integration, and digital automation services. It is the place where creativity, technology, and data come together to deliver complete digital campaigns and outcomes for future-ready brands.",
    animate: "fade-left",
  },
];

function IconBox({ icon: Icon, item }) {
  return (
    <div className={`grid h-14 w-14 shrink-0 place-items-center border ${item.featured ? "text-white border-white" : "text-[#1599df] border-[#2b8bc7]/70"} sm:h-16 sm:w-16 md:h-20 md:w-20`}>
      <Icon
        size={18}
        className="sm:h-[20px] sm:w-[20px]"
      />
    </div>
  );
}

function ServiceCard({ item }) {
  const Icon = item.icon;

  return (
    <article
      data-aos={item.animate}
      data-aos-duration="1200"
      data-aos-once="true"
      className={`border border-[#267fba] p-4 sm:p-6 md:p-8 lg:p-10 ${
        item.featured
          ? "bg-gradient-to-r from-[#2286c8] to-[#69c2a9]"
          : "bg-[#303030]"
      }`}
    >
      <div className="flex flex-col items-start gap-4 min-[480px]:flex-row sm:gap-5">
        <IconBox icon={Icon} item={item} />

        <div className="min-w-0 flex-1">
          <h3
            className={`
              text-[16px]
              font-bold
              leading-tight
              ${item.featured ? "text-white" : "bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-transparent"}
              sm:text-[20px]
              md:text-[23px]
              lg:text-[25px]
            `}
          >
            {item.title}
          </h3>

          <p
            className={`
              mt-2
              text-[12px]
              leading-[1.6]
              sm:text-[14px]
              md:text-[15px]
              lg:text-[16px]
              ${
                item.featured
                  ? "text-white"
                  : "text-gray-200"
              }
            `}
          >
            {item.text}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function DigitalSolutionsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    // Refresh AOS after page content has rendered
    setTimeout(() => {
      AOS.refresh();
    }, 300);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#2d2d2d] text-white">
      {/* ================= HEADER ================= */}
      <Navbar />
      {/* <SocialRail /> */}
      {/* ================= HERO ================= */}
        <Hero
          title="Digital Event Solutions Company in India"
          desc="At Wizcraft, we redefine the future of experiences through Digital Event Solutions that blend creativity and technology."
        />

      {/* ================= SERVICES ================= */}
      <section className="container-x mx-auto px-4 py-10 sm:px-6 sm:py-14 md:px-0 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 md:gap-5">
          {/* LEFT COLUMN */}
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="
                mb-6
                text-[12px]
                leading-[1.7]
                text-white/90
                sm:text-[14px]
                md:text-[16px]
              "
            >
              From Virtual, Hybrid & Immersive Experiences to large-scale
              conferences and product launches, our virtual event planners
              craft human-centric, tech-driven journeys that connect, engage,
              and inspire globally.
            </p>

            <div className="space-y-4">
              {services
                .filter(
                  (_, i) => i === 0 || i === 2 || i === 4
                )
                .map((item) => (
                  <ServiceCard
                    item={item}
                    key={item.title}
                  />
                ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {services
              .filter(
                (_, i) =>
                  i === 1 ||
                  i === 3 ||
                  i === 5 ||
                  i === 6
              )
              .map((item) => (
                <ServiceCard
                  item={item}
                  key={item.title}
                />
              ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="
          bg-gradient-to-r
          from-[#197bc1]
          to-[#69c2aa]
          px-4
          py-12
          text-center
          sm:px-6
          sm:py-16
          md:py-20
        "
      >
        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          className="mx-auto max-w-[1200px]"
        >
          <p
            className="
              text-[24px]
              font-semibold
              sm:text-[28px]
              md:text-[30px]
            "
          >
            The Wizcraft Promise
          </p>

          <p
            className="
              mx-auto
              mt-3
              w-full
              max-w-[1200px]
              text-[12px]
              leading-[1.7]
              sm:text-[17px]
              sm:leading-[1.65]
              md:text-[22px]
            "
          >
            For us, digital isn’t just about technology, it’s about creating
            human-centric experiences in a connected world. With our innovative
            Digital Event Solutions, we bring together creativity, reliability,
            and impact, ensuring your brand is always a step ahead in the
            digital era.
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}