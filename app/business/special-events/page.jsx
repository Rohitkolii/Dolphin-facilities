
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

const services = [
  {
    icon: FaAward,
    title: "Opening and Closing Ceremonies",
    text: "Wizcraft creates opening and closing ceremonies that define and celebrate history through emotion, spectacle, and meaning. From concept to live broadcast, our expert planners craft powerful, poetic experiences that capture the spirit of the occasion and leave audiences spellbound.",
    featured: true,
    animate: "fade-right",
  },
  {
    icon: FaBuilding,
    title: "Trade Shows",
    text: "At Wizcraft, we craft trade shows that ignite conversation, connection, and commerce. With expert planning, custom design, and immersive brand experiences, we transform empty halls into vibrant marketplaces where every handshake, interaction, and impression drives meaningful business impact.",
    animate: "fade-left",
  },
  {
    icon: FaCommentDots,
    title: "Concerts & Festivals",
    text: "At Wizcraft, concerts and festivals are movements of music, energy, and magic. Through iconic performances, world artists, and passionate fans, we craft seamless events where stage, sound, and emotion unite-transforming every performance into a connection, a memory, a legend.",
    animate: "fade-right",
  },
  {
    icon: FaHandshake,
    title: "Sporting Events",
    text: "At Wizcraft, we turn sport into celebration. As leading sports event organisers, we blend emotion, unity, and precision to create electrifying experiences, from league launches to award ceremonies, where every cheer, heartbeat, and victory becomes part of something truly unforgettable.",
    animate: "fade-left",
  },
  {
    icon: FaChartLine,
    title: "Cultural & Tourism Events",
    text: "Wizcraft’s cultural and tourism events blend heritage with creativity, transforming traditions into immersive experiences. From folk performances to global showcases, we celebrate diversity and belonging, connecting people, places, and cultures through storytelling that unites emotion, pride, and modern artistic expression.",
    animate: "fade-right",
  },
  {
    icon: FaChartLine,
    title: "Launch of New Initiatives",
    text: "Every idea deserves a grand reveal. At Wizcraft, we transform corporate, government, and social launches into cinematic moments, crafted with creativity, precision, and emotion, ensuring every initiative inspires audiences, sparks conversation, and leaves an unforgettable mark long after the spotlight fades.",
    animate: "fade-left",
  },
  {
    icon: FaChartLine,
    title: "Social Celebrations & Weddings",
    text: "From milestone birthdays to destination weddings, Wizcraft brings heart, style, and soul to every celebration. Our expert wedding and event planners craft elegant, effortless experiences where every detail reflects love, luxury, and personality, transforming special occasions into timeless stories of joy and legacy.",
    animate: "fade-right",
  },
  {
    icon: FaChartLine,
    title: "Son et Lumière Spectaculars",
    text: "Wizcraft’s Son et Lumière shows transform ancient forts into living storytellers, blending technology, history, and art through projection mapping, lighting, and sound. Each spectacle bridges past and present, turning heritage into an immersive experience that educates, entertains, and enchants audiences.",
    animate: "fade-left",
  },
];

function IconBox({ icon: Icon }) {
  return (
    <div
      className="
        grid
        h-14
        w-14
        shrink-0
        place-items-center
        border
        border-[#2b8bc7]/70
        text-[#1599df]
        sm:h-16
        sm:w-16
        md:h-20
        md:w-20
      "
    >
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
      className={`
        border
        border-[#267fba]
        p-4
        sm:p-6
        md:p-8
        lg:p-10
        ${
          item.featured
            ? "bg-gradient-to-r from-[#2286c8] to-[#69c2a9]"
            : "bg-[#303030]"
        }
      `}
    >
      <div
        className="
          flex
          flex-col
          items-start
          gap-4
          min-[480px]:flex-row
          sm:gap-5
        "
      >
        <IconBox icon={Icon} />

        <div className="min-w-0 flex-1">
          <h3
            className="
              text-[16px]
              font-bold
              leading-tight
              bg-gradient-to-r
              from-[#1d7fc5]
              to-[#68c4b2]
              bg-clip-text
              text-transparent
              sm:text-[20px]
              md:text-[23px]
              lg:text-[25px]
            "
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

export default function SpecialEventsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    setTimeout(() => {
      AOS.refresh();
    }, 300);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#2d2d2d] text-white">
      {/* ================= HEADER ================= */}
      <Navbar />

      {/* ================= HERO ================= */}

        <Hero
          title="Special Event Management Company"
          desc="At Wizcraft Entertainment Agency, we transform ideas into extraordinary experiences that inspire and unite."
        />

      {/* ================= SERVICES ================= */}
      <section
        className="
          container-x
          mx-auto
          px-4
          py-10
          sm:px-6
          sm:py-14
          md:px-0
          md:py-16
        "
      >
        <div className="grid gap-6 md:grid-cols-2 md:gap-5">
          {/* LEFT COLUMN */}
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              className="
                mb-6
                text-[12px]
                leading-[1.7]
                text-white/90
                sm:text-[14px]
                md:text-[16px]
              "
            >
              With over 30 years of expertise in special event management, we
              craft world-class celebrations, from grand openings to concerts
              and royal weddings, where every story finds its magical stage.
            </p>

            <div className="space-y-4">
              {services
                .filter(
                  (_, i) =>
                    i === 0 ||
                    i === 2 ||
                    i === 4 ||
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

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {services
              .filter(
                (_, i) =>
                  i === 1 ||
                  i === 3 ||
                  i === 5 ||
                  i === 7
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
        <p
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-once="true"
          className="
            mx-auto
            w-full
            max-w-[1200px]
            text-[16px]
            font-semibold
            leading-[1.6]
            sm:text-[20px]
            md:text-[22px]
          "
        >
          Are you ready to push your brand from visibility to memorability?
        </p>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}