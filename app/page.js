"use client";

import Footer from "@/Components/common/Footer";
import { IoMdMegaphone } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import IntroSplash from "@/Components/home/IntroSplash";
import Navbar from "@/Components/common/Navbar";
import SocialRail from "@/Components/home/SocialRail";

const businesses = [
  {
    title: "Brand Activation",
    text: "In a world where attention spans are shortening and brand loyalty is fleeting, building lasting and meaningful connections with consumers has never been more important.",
    icon: IoMdMegaphone,
  },
  {
    title: "Digital Solutions",
    text: "In a globally interconnected world of digital interactions recasting engagement, Wizcraft Events is out front with innovations in its revolutionary digital solutions.",
    icon: FaCode,
  },
  {
    title: "Special Events",
    text: "In the universe of out-of-the-ordinary experiences, there are few names that evoke the same fervour, imagination, and brilliance as Wizcraft.",
    icon: FaRegStar,
  },
];
const stats = [
  ["03+", "Decades of unmatched Legacy"],
  ["1500+", "Events Across the world"],
  ["500+", "Trusted by Fortune Companies"],
  ["350+", "Technology, Creativity & Strategy delivered by Industry Experts"],
  ["03+", "Business Focus Areas To provide an Integrated Solution"],
];

const gallery = [
  "/home/clr3.jpg",
  "/home/clr4.jpg",
  "/home/clr5.jpg",
  "/home/clr6.jpg",
  "/home/clr7.jpg",
  "/home/clr1.avif",
  "/home/clr2.avif",
  "/home/clr3.jpg",
  "/home/clr4.jpg",
];

const slides = [
  "Nation Building Events",
  "Live Streaming",
  "Special Event Management Services",
  "Corporate Event Launches",
  "On-Ground Activations",
  "Concerts & Festivals",
  "Sporting Events",
  "Nation Building Events",
  "Live Streaming",
  "Special Event Management Services",
  "Corporate Event Launches",
  "On-Ground Activations",
  "Concerts & Festivals",
  "Sporting Events",
  "Nation Building Events",
  "Live Streaming",
  "Special Event Management Services",
  "Corporate Event Launches",
  "On-Ground Activations",
  "Concerts & Festivals",
  "Sporting Events",
];

export default function Home() {
  return (
    <div className="border-4 border-[#70c7b5]">
      <IntroSplash />
      <Navbar />
      <SocialRail />
      <main id="home">
        <section className="container-x pt-12 sm:pt-20">
          <div className="hero-image border-[6px] border-[#1d7fc5] relative overflow-hidden shadow-soft">
            <iframe
              width="100%"
              height="720px"
              src="https://www.youtube.com/embed/CCtEkjdmN8Y?si=FKqkWD0zN4V2i-q5"
              title="YouTube video player"
              frameBorder={"0"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section id="business" className="container-x py-20">
          <p className="mb-5 bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-center text-4xl font-semibold uppercase text-transparent">
            Our Businesses
          </p>

          <p className="mb-8 text-center text-md font-semibold text-white/70">
            Fuelling Your Business Success
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {businesses.map((b) => {
              const Icon = b.icon;

              return (
                <article
                  key={b.title}
                  className="gradient-panel border-grd min-h-52 p-7 shadow-soft"
                >
                  {/* Icon */}
                  <div className="mb-7 flex h-16 w-16 items-center justify-center bg-gradient-to-br from-[#1d7fc5] to-[#68c4b2]">
                    <Icon size={32} strokeWidth={2.5} className="text-white" />
                  </div>

                  <h3 className="mb-4 text-xl font-bold">{b.title}</h3>

                  <p className="text-md leading-8 text-white/90">{b.text}</p>

                  <a
                    href="#contact"
                    className="mt-7 flex items-end text-lg font-bold underline decoration-white/40 underline-offset-4"
                  >
                    Read More →
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <div className="overflow-hidden py-4">
          <div className="flex w-max animate-marquee whitespace-nowrap text-2xl font-bold tracking-tight sm:text-4xl">
            <span className="">
              {slides?.map((sd, i) => {
                return (
                  <span key={i} className="text-[80px] max-lg:text-[50px]">
                    <span className="text-[#70c7b5]"> ★ </span>
                    <span>{sd}</span>
                  </span>
                );
              })}
            </span>
          </div>
        </div>

        <section className="container-x py-20">
          <div
            className="relative border-[4px] border-[#1d7fc5]/70 px-10 py-11 sm:px-12 sm:py-14"
            style={{
              background:
                "linear-gradient(105deg, #2079bd 0%, #287fbd 38%, #72c4aa 100%)",
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-[35px]">
                  ABOUT US
                </h2>

                <p className="mt-4 text-[15px] text-white">
                  Think Experiences. Think Wizcraft.
                </p>
              </div>

              <button
                type="button"
                style={{
                  background:
                    "linear-gradient(105deg, #2079bd 0%, #287fbd 38%, #72c4aa 100%)",
                }}
                className="mt-1 flex shrink-0 items-center gap-3 border border-[#8bc9bc] bg-[#70c7a9] px-4 py-2.5 text-[12px] font-semibold text-white transition hover:bg-[#65baa0]"
              >
                Read More
                <span className="text-lg leading-none">→</span>
              </button>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-[850px] text-[12px] leading-[1.65] text-white/95">
              In a world where attention spans are short and competition is
              fierce, standing out requires more than just being seen, it
              demands being remembered. That’s where Wizcraft, an event
              management agency steps in.
            </p>

            <p className="mt-4 max-w-[850px] text-[14px] leading-[1.65] text-white/95">
              With over 30 years of unmatched expertise, Wizcraft isn't just an
              event management company, it's a creator of unforgettable brand
              experiences that spark connection, engagement, and impact across
              India and beyond.
            </p>

            {/* Services heading */}
            <h3 className="mt-7 text-[18px] font-medium text-white">
              Event Management Services that turn Ideas into Reality
            </h3>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {stats.map(([n, l], index) => (
                <div
                  key={`${n}-${index}`}
                  className="min-h-[94px] border border-[#68c4b2] px-4 py-8 text-center"
                >
                  <div className="text-[36px] font-normal leading-none text-white">
                    {n}
                  </div>

                  <div className="mx-auto mt-2 max-w-[220px] text-[11px] font-medium leading-[1.35] text-white">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="container-x py-12">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h2 className="mb-5 bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-center text-4xl font-semibold uppercase text-transparent">
              OUR JOURNEY
            </h2>
            <p className="text-xl text-white">Driving Your Vision Forward</p>
          </div>

          {/* ROW 1 */}
          <div className="grid items-start gap-10 lg:grid-cols-2">
            {/* Left image */}
            <div>
              <img
                src="/home/clr1.avif"
                alt="Wizcraft"
                className="h-[380px] w-full object-cover border-wiz"
              />
            </div>

            {/* Right content */}
            <div>
              <p className="text-md leading-7 text-white">
                It all began in 1990—three visionaries, one bold mission, and a
                belief that creativity could shape extraordinary experiences.
              </p>

              <p className="mt-4 text-md leading-7 text-white">
                From a small office with big ambition, Wizcraft Entertainment
                Agency was born. Built on imagination, collaboration, and a
                passion for storytelling, Wizcraft grew from a homegrown idea
                into one of India's foremost event management companies.
              </p>

              <p className="mt-4 text-md leading-7 text-white">
                Over the decades, our expertise has expanded across industries
                and continents. We have partnered with leading global brands,
                government bodies, Fortune 500 companies, international
                associations and cultural institutions to bring their most
                ambitious visions to life.
              </p>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            {/* Left content */}
            <div>
              <p className="text-md leading-7 text-white">
                From large-format ceremonies and high-stakes corporate summits
                to premium brand launches, musical experiences, destination
                events, entertainment productions, immersive and large-scale
                experiences, Wizcraft has delivered it all.
              </p>

              <p className="mt-3 text-md font-semibold text-white">
                Our work spans a diverse portfolio of:
              </p>

              <ul className="mt-1 list-disc pl-4 text-md leading-7 text-white">
                <li>Corporate conferences & leadership forums</li>
                <li>Product launches & brand activations</li>
                <li>Cultural & lifestyle showcases</li>
                <li>Experiential marketing campaigns</li>
                <li>Global roadshows & multi-city tours</li>
                <li>Sports ceremonies & entertainment productions</li>
                <li>Employee events & internal communication initiatives</li>
                <li>Destination, hybrid, and virtual events</li>
              </ul>
            </div>

            {/* Right image */}
            <div>
              <h3 className="mb-5 bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-center text-4xl font-semibold text-transparent">
                Think Experiences. Think Wizcraft.
              </h3>

              <img
                src="/home/clr2.avif"
                alt="Wizcraft event"
                className="h-[380px] w-full object-cover border-wiz"
              />
            </div>
          </div>

          {/* Bottom copy */}
          <div className="mt-10 max-w-4xl text-md leading-5 text-white/80">
            <p>
              Our journey is a celebration of creativity, talent, and limitless
              possibilities. As a trusted event management company in India,
              Wizcraft blends creative vision with operational precision,
              delivering immersive experiences that engage audiences and drive
              meaningful impact for brands.
            </p>

            <p className="mt-3">
              Today, we stand as a global experiential events and event
              production company supported by teams across Mumbai, Gurgaon,
              Hyderabad, Bengaluru, Chennai and Dubai.
            </p>

            <p className="mt-3">
              From three decades to a digital force of passionate professionals,
              our mission remains unchanged: to turn imagination into
              unforgettable experiences.
            </p>

            <p className="mt-1 text-[#70c7b5]">
              Because at Wizcraft, we don't just create events. We craft moments
              that stay with you.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <div className="gradient-panel">
            <div className="container-x grid items-center gap-10 py-14 lg:grid-cols-2">
              <div>
                <h2 className="mt-3 text-3xl font-bold">Latest Event</h2>
                <p className="mt-3 text-2xl">IBM ISL Gala Dinner - Bangalore</p>
                <p className="text-md">IBM | JUNE 2025</p>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/90">
                  The IBM ISL Gala Dinner at Bier Library, Sarjapur Road, was a
                  grand celebration for 2500 India Software Lab employees,
                  featuring great food, vibrant entertainment, and a memorable
                  evening of connection, appreciation, and festive cheer in a
                  lively atmosphere.
                </p>
                <a
                  href="#portfolio"
                  style={{
                    background:
                      "linear-gradient(105deg, #2079bd 0%, #287fbd 38%, #72c4aa 100%)",
                  }}
                  className="mt-6 inline-block border border-white/60 px-5 py-3 text-xs font-bold"
                >
                  View More →
                </a>
              </div>
              <img
                src="/home/clr3.jpg"
                className="h-[380px] w-full object-cover border-wiz"
                alt="Wizcraft event reference"
              />
            </div>
          </div>
        </section>

<section id="portfolio" className="container-x py-20">
  <p className="text-center uppercase text-4xl font-semibold mb-5 bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-transparent">
    Highlights
  </p>

  <p className="text-xl text-white text-center mb-10">
    Branding Brilliance In Visuals
  </p>

<div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[400px] gap-1">
  {gallery.map((src, i) => {
    const classes = [
      "",
      "md:row-span-2",
      "",
      "",
      "",
      "",
      "md:col-span-2",
      "",
      "md:col-start-4 md:row-start-2 md:row-span-2",
    ];

    return (
      <div
        key={i}
        className={`min-h-0 overflow-hidden ${classes[i] || ""}`}
      >
        <img
          src={src}
          alt="Wizcraft event"
          className="h-full w-full object-cover"
        />
      </div>
    );
  })}
</div>
</section>


        <section className="container-x py-10">
          <p className="text-center uppercase text-4xl font-semibold mb-5 bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-transparent">
            Brands we work with
          </p>{" "}
          <p className="text-center text-xl text-white">
            Global Corporate Clients
          </p>

          {/* <LogoSlider /> */}
          {/* <div className="mt-10 grid grid-cols-3 gap-8 text-center text-lg font-black text-white/80 grayscale sm:grid-cols-6">
            <span>AXA</span>
            <span>ASUS</span>
            <span>HDFC</span>
            <span>Samsung</span>
            <span>PepsiCo</span>
            <span>prime video</span>
          </div> */}
        </section>

        <section id="contact" className="container-x py-20">
          <div className="gradient-panel px-7 py-14 sm:px-12 sm:py-16">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
                Let’s Connect to Create Something Big
              </h2>

              <p className="mt-5 text-sm font-semibold sm:text-base">
                Fill out the form below and our team will get back to you
                shortly.
              </p>
            </div>

            <form
              className="mx-auto mt-12 grid max-w-[1010px] grid-cols-1 gap-6 md:grid-cols-3"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Full Name */}
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="h-[46px] border border-white/40 bg-transparent px-3 text-sm text-white outline-none transition-all placeholder:text-white focus:border-white focus:ring-1 focus:ring-white/30"
              />

              {/* Company Name */}
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="h-[46px] border border-white/40 bg-transparent px-3 text-sm text-white outline-none transition-all placeholder:text-white focus:border-white focus:ring-1 focus:ring-white/30"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="h-[46px] border border-white/40 bg-transparent px-3 text-sm text-white outline-none transition-all placeholder:text-white focus:border-white focus:ring-1 focus:ring-white/30"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="h-[46px] border border-white/40 bg-transparent px-3 text-sm text-white outline-none transition-all placeholder:text-white focus:border-white focus:ring-1 focus:ring-white/30"
              />

              {/* Location */}
              <div className="relative">
                <select
                  name="location"
                  defaultValue=""
                  className="h-[46px] w-full appearance-none border border-white/40 bg-transparent px-3 pr-10 text-sm text-white outline-none transition-all focus:border-white focus:ring-1 focus:ring-white/30"
                >
                  <option value="" disabled className="bg-[#2781bc]">
                    Select Location
                  </option>
                  <option value="mumbai" className="bg-[#2781bc]">
                    Mumbai
                  </option>
                  <option value="delhi" className="bg-[#2781bc]">
                    Delhi
                  </option>
                  <option value="bengaluru" className="bg-[#2781bc]">
                    Bengaluru
                  </option>
                  <option value="chennai" className="bg-[#2781bc]">
                    Chennai
                  </option>
                  <option value="hyderabad" className="bg-[#2781bc]">
                    Hyderabad
                  </option>
                  <option value="gujarat" className="bg-[#2781bc]">
                    Gujarat
                  </option>
                  <option value="dubai" className="bg-[#2781bc]">
                    Dubai
                  </option>
                </select>

                {/* Dropdown arrow */}
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m5 7 5 5 5-5" />
                </svg>
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="resize-y border border-white/40 bg-transparent px-3 py-3 text-sm text-white outline-none transition-all placeholder:text-white focus:border-white focus:ring-1 focus:ring-white/30 md:col-span-3"
              />

              {/* Submit */}
              <button
                type="submit"
                className="mx-auto mt-1 bg-gradient-to-r from-[#6ac8b1] to-[#148ad0] px-7 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 md:col-span-3"
              >
                Submit Now
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
