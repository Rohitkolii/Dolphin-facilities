"use client";

import Footer from "@/Components/common/Footer";
import { MdEvent } from "react-icons/md";
import { IoMdMegaphone } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import IntroSplash from "@/Components/home/IntroSplash";
import Navbar from "@/Components/common/Navbar";
import SocialRail from "@/Components/home/SocialRail";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import FilePreview from "@/Components/common/FilePreview";

const businesses = [
  {
    title: "Event Management",
    text: "We conceptualize, plan, manage, and execute events of different scales — from corporate meets and conferences to product launches, exhibitions, government events, dealer meets, award functions and celebrations.",
    icon: MdEvent,
    animate: "fade-right",
  },
  {
    title: "Advertising & Outdoor Marketing",
    text: "We help brands reach audiences where they live, travel, work and shop. Our outdoor solutions — Van Campaigns, Wall Wraps and Hoardings — are designed to create visibility and build strong brand recall.",
    icon: IoMdMegaphone,
    animate: "fade-up",
  },
  {
    title: "Digital Solutions",
    text: "We combine traditional marketing with digital experiences to help brands communicate with today's audiences through Digital Campaigns, Social Media Solutions and Creative Content.",
    icon: FaCode,
    animate: "fade-left",
  },
  {
    title: "Brand Activation",
    text: "We create on-ground experiences that allow audiences to interact directly with brands — Roadshows, Van Campaigns, Product Demonstrations and Consumer Engagement.",
    icon: FaRegStar,
    animate: "fade-up",
  },
];

const stats = [
  ["2019", "The Year Our Journey Began"],
  ["4", "Core Service Verticals Under One Roof"],
  ["MP & India", "Our Growing Footprint"],
  ["Govt. & Corporate", "Clients We Proudly Serve"],
  ["1", "Complete Solution Partner For Every Requirement"],
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
  "Event Management",
  "Advertising & Outdoor Marketing",
  "Digital Solutions",
  "Brand Activation",
  "Van Campaigns",
  "Wall Wraps",
  "Hoardings",
  "Roadshows",
  "Product Demonstrations",
  "Government Events",
  "Corporate Conferences",
  "Event Management",
  "Advertising & Outdoor Marketing",
  "Digital Solutions",
  "Brand Activation",
  "Van Campaigns",
  "Wall Wraps",
  "Hoardings",
  "Roadshows",
  "Product Demonstrations",
  "Government Events",
  "Corporate Conferences",
];

export default function Home() {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    if (window.scrollY > 100) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const getFiles = async () => {
      try {
        const response = await fetch("/api/media");
        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Failed to fetch media files");
        }

        console.log("Media files:", data.files);
        setFiles(data.files);
      } catch (error) {
        console.error("Unable to load media files:", error);
      }
    };

    getFiles();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, mirror: false, offset: 60 });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <IntroSplash />
      <Navbar />
      {/* <SocialRail /> */}
      <main id="home">
        <section className="container-x relative pt-12 sm:pt-20">
          {/* Decorative background — full width, breaks out of container-x */}
          <div className="pointer-events-none absolute left-1/2 right-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 overflow-hidden" style={{ willChange: "transform" }}>
            <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#1d7fc5]/30 blur-[110px] sm:h-[560px] sm:w-[560px]" />
            <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-[#68c4b2]/20 blur-[90px] sm:h-96 sm:w-96" />
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#1d7fc5]/20 blur-[90px] sm:h-96 sm:w-96" />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage:
                  "radial-gradient(ellipse 60% 60% at 50% 20%, black 40%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 60% 60% at 50% 20%, black 40%, transparent 100%)",
              }}
            />
          </div>

          <div className="mb-10 text-center">
            <span
              data-aos="fade-down"
              className="mb-4 inline-flex items-center gap-2 border border-[#d9b273]/50 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e3c07f] backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#e3c07f]" />
              Since 2019 · Madhya Pradesh &amp; India
            </span>

            <h1
              data-aos="zoom-in-left"
              className="bg-gradient-to-r from-[#2b8fd6] via-[#5ab3c9] to-[#8fd0b0] bg-clip-text text-5xl font-black uppercase leading-none tracking-tight text-transparent drop-shadow-[0_0_35px_rgba(29,127,197,0.25)] sm:text-7xl md:text-8xl"
            >
              Dolphin
            </h1>

            <p className="mt-3 text-xl font-bold uppercase tracking-wide text-white sm:text-3xl">
              The Complete Solution
            </p>

            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#e3c07f] sm:w-16" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e3c07f] sm:text-base">
                We Create · We Promote · We Execute
              </p>
              <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#e3c07f] sm:w-16" />
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Events. Advertising. Experiences. Digital. Execution. Since
              2019, Dolphin has been creating, promoting and executing ideas
              for brands, corporates, institutions and government
              organisations across Madhya Pradesh and India.
            </p>
          </div>

          <div
            className="
      hero-image
      border-[3px]
      sm:border-[4px]
      md:border-[5px]
      border-[#2b8fd6]/70
      relative
      overflow-hidden
      shadow-[0_20px_60px_-15px_rgba(29,127,197,0.45)]
      ring-1
      ring-[#e3c07f]/20
    "
          >
            <iframe
              className="
        w-full
        h-[220px]
        sm:h-[320px]
        md:h-[450px]
        lg:h-[600px]
        xl:h-[720px]
      "
              src="https://www.youtube.com/embed/CCtEkjdmN8Y?si=FKqkWD0zN4V2i-q5"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        {/* {files?.map((file) => (
          <FilePreview key={file.id} file={file} />
        ))} */}

        <section id="business" className="container-x py-20">
          <p
            data-aos="zoom-in-left"
            className="mb-5 bg-gradient-to-r from-[#2b8fd6] via-[#68c4b2] to-[#e3c07f] bg-clip-text text-center text-4xl font-semibold uppercase text-transparent"
          >
            What We Do
          </p>

          <p className="mb-8 text-center text-md font-semibold text-white/70">
            Everything Your Brand Needs. Under One Roof.
          </p>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {businesses.map((b) => {
              const Icon = b.icon;

              return (
                <article
                  key={b.title}
                  data-aos={b.animate}
                  className="gradient-panel border-grd group min-h-52 border border-white/10 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#e3c07f]/40 hover:shadow-[0_20px_45px_-15px_rgba(29,127,197,0.4)]"
                >
                  {/* Icon */}
                  <div className="mb-7 flex h-16 w-16 items-center justify-center bg-gradient-to-br from-[#1d7fc5] to-[#68c4b2] shadow-[0_10px_25px_-8px_rgba(29,127,197,0.6)] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={32} strokeWidth={2.5} className="text-white" />
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-white">
                    {b.title}
                  </h3>

                  <p className="text-md leading-8 text-white/80">{b.text}</p>

                  <a
                    href="#contact"
                    className="mt-7 flex items-end text-lg font-bold text-[#e3c07f] underline decoration-[#e3c07f]/40 underline-offset-4 transition-colors hover:text-white"
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
                    <span className="text-[#e3c07f]"> ★ </span>
                    <span>{sd}</span>
                  </span>
                );
              })}
            </span>
          </div>
        </div>

        <section data-aos="fade-up" className="container-x py-20">
          <div
            className="relative border-[1px] border-white/10 px-5 py-6 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.5)] sm:px-12 sm:py-14"
            style={{
              background:
                "linear-gradient(120deg, #123f66 0%, #1d6a9c 45%, #3f8f9e 78%, #5eae9a 100%)",
            }}
          >
            <span className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#e3c07f] via-[#68c4b2] to-[#e3c07f]" />
            {/* Header */}
            <div className="flex items-start justify-between gap-8">
              <div>
                <h2
                  data-aos="zoom-in-left"
                  className="text-3xl font-bold tracking-tight text-white sm:text-[35px]"
                >
                  ABOUT DOLPHIN
                </h2>

                <p className="mt-4 text-[16px] text-white">
                  More Than an Agency. Your Complete Solution Partner.
                </p>
              </div>

              <button
                type="button"
                className="max-md:hidden mt-1 flex shrink-0 items-center gap-3 border border-[#e3c07f]/50 bg-white/10 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-[#e3c07f] hover:text-[#123f66]"
              >
                Read More
                <span className="text-lg leading-none">→</span>
              </button>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-[850px] text-[16px] leading-[1.65] text-white/95">
              Established in 2019, Dolphin has grown into a multi-service
              marketing and execution company with a strong presence in
              Madhya Pradesh and across India.
            </p>

            <p className="mt-4 max-w-[850px] text-[16px] leading-[1.65] text-white/95">
              Our strength lies in bringing different capabilities together.
              Instead of working with multiple vendors for events,
              advertising, branding, outdoor promotions, digital requirements,
              and customized products, our clients can rely on one integrated
              partner — Dolphin. We work with both government and corporate
              clients, delivering solutions that combine creativity, quality,
              execution, and reliability.
            </p>

            {/* Services heading */}
            <h3
              data-aos="fade-left"
              className="mt-7 text-[18px] font-medium text-white"
            >
              Our Philosophy: One Client. One Requirement. One Complete
              Solution.
            </h3>

            {/* Stats */}
            <div
              data-aos="fade-left"
              className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
            >
              {stats.map(([n, l], index) => (
                <div
                  key={`${n}-${index}`}
                  className="min-h-[94px] border border-white/15 bg-white/5 px-4 py-8 text-center backdrop-blur-sm transition-colors hover:border-[#e3c07f]/50"
                >
                  <div className="text-[32px] font-bold leading-none text-[#f3d9a3] sm:text-[36px]">
                    {n}
                  </div>

                  <div className="mx-auto mt-2 max-w-[220px] text-[11px] font-medium leading-[1.35] text-white/90">
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
            <h2
              data-aos="zoom-in-left"
              className="mb-5 bg-gradient-to-r from-[#2b8fd6] via-[#68c4b2] to-[#e3c07f] bg-clip-text text-center text-4xl font-semibold uppercase text-transparent"
            >
              OUR JOURNEY
            </h2>
            <p className="text-xl text-white">
              From Creating Experiences to Creating Complete Solutions
            </p>
          </div>

          {/* ROW 1 */}
          <div className="grid items-start gap-10 lg:grid-cols-2">
            {/* Left image */}
            <div>
              <img
                src="/home/clr1.avif"
                alt="Dolphin"
                className="h-[380px] w-full object-cover border-wiz"
              />
            </div>

            {/* Right content */}
            <div>
              <p className="text-md leading-7 text-white">
                Every journey begins with an idea. Ours began with a simple
                one — to create experiences that bring people, brands, and
                ideas together.
              </p>

              <p className="mt-4 text-md leading-7 text-white">
                On 1 February 2019, Dolphin began its journey with a focus on
                events and experience management. We started by helping
                organisations plan, manage, and execute events that people
                could experience, remember, and talk about.
              </p>

              <p className="mt-4 text-md leading-7 text-white">
                But as we worked alongside our clients, we realised that their
                needs went far beyond the event itself. An event often needed
                branding. A campaign needed outdoor visibility. A launch
                needed advertising. A promotion needed digital support. A
                project needed customised products. And behind every
                successful execution was the need for the right materials,
                resources, and people to make it happen.
              </p>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            {/* Left content */}
            <div>
              <p className="text-md leading-7 text-white">
                So, instead of asking our clients to find different partners
                for every requirement, we chose to become that partner. Over
                the years, Dolphin evolved from an event-focused company into
                a complete solution partner for brands, organisations,
                corporates, and government institutions.
              </p>

              <p className="mt-3 text-md font-semibold text-white">
                Today, our capabilities extend across:
              </p>

              <ul className="mt-1 list-disc pl-4 text-md leading-7 text-white">
                <li>Experiences & Event Management</li>
                <li>Advertising & Outdoor Campaigns</li>
                <li>Digital Solutions</li>
                <li>Brand Activations</li>
                <li>Customized Products</li>
                <li>Branding & Material Supply</li>
                <li>On-Ground Execution</li>
              </ul>
            </div>

            {/* Right image */}
            <div>
              <h3 className="mb-5 bg-gradient-to-r from-[#2b8fd6] via-[#68c4b2] to-[#e3c07f] bg-clip-text text-center text-4xl font-semibold text-transparent">
                One Partner. The Entire Journey.
              </h3>

              <img
                src="/home/clr2.avif"
                alt="Dolphin event"
                className="h-[380px] w-full object-cover border-wiz"
              />
            </div>
          </div>

          {/* Bottom copy */}
          <div className="mt-10 max-w-4xl text-md leading-5 text-white/80">
            <p>
              What started with managing events has grown into something much
              bigger: one partner for the entire journey. From the first idea
              to the final execution, we bring together creativity, strategy,
              production, marketing, resources, and execution to help our
              clients bring their vision to life.
            </p>

            <p className="mt-3">
              Our journey is still evolving, but our purpose remains the same
              — to make things simpler for our clients and better for their
              brands.
            </p>

            <p className="mt-3">
              Because at Dolphin, we believe a great solution isn't about
              doing just one thing well. It's about bringing everything
              together.
            </p>

            <p className="mt-1 text-[#70c7b5]">
              Dolphin. The Complete Solution.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <div className="gradient-panel">
            <div className="container-x grid items-center gap-10 py-14 lg:grid-cols-2">
              <div data-aos="fade-right">
                <h2 data-aos="zoom-in-left" className="mt-3 text-3xl font-bold">
                  The Dolphin Difference
                </h2>
                <div>
                  <p className="mt-3 text-2xl">
                    Why Manage Six Vendors When One Can Do It All?
                  </p>
                  <p className="text-md">
                    Event • Branding • Outdoor Campaign • Digital Promotion •
                    Customized Products • Material Supply • On-Ground
                    Execution
                  </p>
                  <p className="mt-5 text-[16px] max-w-xl leading-7 text-white/90">
                    Dolphin brings it all together. One brief. One team. One
                    point of coordination. One complete solution.
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-block border border-[#e3c07f]/60 bg-[#e3c07f] px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#123f66] transition-colors hover:bg-white"
                  >
                    Get In Touch →
                  </a>
                </div>
              </div>
              <img
                data-aos="fade-left"
                src="/home/clr3.jpg"
                className="h-[380px] w-full object-cover border-wiz"
                alt="Dolphin event reference"
              />
            </div>
          </div>
        </section>

        <section id="portfolio" className="container-x py-20">
          <p
            data-aos="zoom-in-left"
            className="text-center uppercase text-4xl font-semibold mb-5 bg-gradient-to-r from-[#2b8fd6] via-[#68c4b2] to-[#e3c07f] bg-clip-text text-transparent"
          >
            Highlights
          </p>

          <p className="text-xl text-white text-center mb-10">
            Our Work Across Events, Branding & Activations
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
                    alt="Dolphin work"
                    className="h-full w-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </section>

        <section className="container-x py-10">
          <p
            data-aos="zoom-in-left"
            className="text-center uppercase text-4xl font-semibold mb-5 bg-gradient-to-r from-[#2b8fd6] via-[#68c4b2] to-[#e3c07f] bg-clip-text text-transparent"
          >
            Who We Work With
          </p>{" "}
          <p className="text-center text-xl text-white">
            Corporates, Institutions & Government Organisations
          </p>
          {/* <LogoSlider /> */}
        </section>

        <section id="contact" className="container-x py-20">
          <div className="gradient-panel px-3 py-14 sm:px-12 sm:py-16">
            {/* Heading */}
            <div className="text-center">
              <h2
                data-aos="zoom-in-left"
                className="text-3xl font-black uppercase tracking-tight sm:text-4xl"
              >
                Let's Bring Your Idea To Life
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
                className="h-[46px] border border-white/40 bg-transparent px-3 text-sm text-white outline-none transition-all placeholder:text-white focus:border-[#e3c07f] focus:ring-1 focus:ring-[#e3c07f]/40"
              />

              {/* Company Name */}
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="h-[46px] border border-white/40 bg-transparent px-3 text-sm text-white outline-none transition-all placeholder:text-white focus:border-[#e3c07f] focus:ring-1 focus:ring-[#e3c07f]/40"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="h-[46px] border border-white/40 bg-transparent px-3 text-sm text-white outline-none transition-all placeholder:text-white focus:border-[#e3c07f] focus:ring-1 focus:ring-[#e3c07f]/40"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="h-[46px] border border-white/40 bg-transparent px-3 text-sm text-white outline-none transition-all placeholder:text-white focus:border-[#e3c07f] focus:ring-1 focus:ring-[#e3c07f]/40"
              />

              {/* Location */}
              <div className="relative">
                <select
                  name="location"
                  defaultValue=""
                  className="h-[46px] w-full appearance-none border border-white/40 bg-transparent px-3 pr-10 text-sm text-white outline-none transition-all focus:border-[#e3c07f] focus:ring-1 focus:ring-[#e3c07f]/40"
                >
                  <option value="" disabled className="bg-[#2781bc]">
                    Select Location
                  </option>
                  <option value="bhopal" className="bg-[#2781bc]">
                    Bhopal
                  </option>
                  <option value="indore" className="bg-[#2781bc]">
                    Indore
                  </option>
                  <option value="jabalpur" className="bg-[#2781bc]">
                    Jabalpur
                  </option>
                  <option value="gwalior" className="bg-[#2781bc]">
                    Gwalior
                  </option>
                  <option value="delhi" className="bg-[#2781bc]">
                    Delhi
                  </option>
                  <option value="other" className="bg-[#2781bc]">
                    Other
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
                className="resize-y border border-white/40 bg-transparent px-3 py-3 text-sm text-white outline-none transition-all placeholder:text-white focus:border-[#e3c07f] focus:ring-1 focus:ring-[#e3c07f]/40 md:col-span-3"
              />

              {/* Submit */}
              <button
                type="submit"
                className="mx-auto mt-1 bg-gradient-to-r from-[#e3c07f] via-[#68c4b2] to-[#1d7fc5] px-7 py-3 text-sm font-bold uppercase tracking-wide text-[#0b2436] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#e3c07f]/30 md:col-span-3"
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