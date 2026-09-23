"use client";

import Footer from "@/Components/common/Footer";
import Link from "next/link";
import Image from "next/image";
import { MdEvent } from "react-icons/md";
import { IoMdMegaphone } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import IntroSplash from "@/Components/home/IntroSplash";
import Navbar from "@/Components/common/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Playfair_Display } from "next/font/google";

// Serif display font for headings — this single choice does most of the
// "premium/boutique" lift. Keep body copy on your existing sans font so the
// two stay clearly distinct rather than mixing three typefaces.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const businesses = [
  {
    title: "Event Management",
    text: "We conceptualize, plan, manage, and execute events of different scales — from corporate meets and conferences to product launches, exhibitions, government events, dealer meets, award functions and celebrations.",
    icon: MdEvent,
    animate: "fade-right",
    href: "/business/special-events",
  },
  {
    title: "Advertising & Outdoor Marketing",
    text: "We help brands reach audiences where they live, travel, work and shop. Our outdoor solutions — Van Campaigns, Wall Wraps and Hoardings — are designed to create visibility and build strong brand recall.",
    icon: IoMdMegaphone,
    animate: "fade-up",
    href: "/business/advertising-outdoor-marketing",
  },
  {
    title: "Digital Solutions",
    text: "We combine traditional marketing with digital experiences to help brands communicate with today's audiences through Digital Campaigns, Social Media Solutions and Creative Content.",
    icon: FaCode,
    animate: "fade-left",
    href: "/business/digital-solutions",
  },
  {
    title: "Brand Activation",
    text: "We create on-ground experiences that allow audiences to interact directly with brands — Roadshows, Van Campaigns, Product Demonstrations and Consumer Engagement.",
    icon: FaRegStar,
    animate: "fade-up",
    href: "/business/brand-activation",
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
  "/images/DSC_1465.jpg",
  "/images/DSC_1735.jpg",
  "/images/DSC_1595.jpg",
  "/images/DSC_1601.jpg",
  "/images/DSC_1653.jpg",
  "/images/DSC_1663.jpg",
  "/images/faclitate.jpg",
  "/images/DSC_1465.jpg",
  "/images/DSC_1699.jpg",
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

  const heroVideo =
    files.find((f) => f.id === "18LLbUWRDnDh1XC6w8p11F5WLyoUoez2n") || null;

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

  const [formData, setFormData] = useState({
    full_name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
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
        formData,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("Thank you! Your message has been sent successfully.");

      setFormData({
        full_name: "",
        company: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className={`${playfair.variable} overflow-x-hidden min-h-screen overflow-x-hidden bg-[#f8f4ec]`}
    >
      <IntroSplash />
      <Navbar />
      <main id="home">
        <section className="container-x pt-12 sm:pt-20">
          <div className="hero-image border border-[#c9a768]/70 relative overflow-hidden shadow-[0_25px_60px_-20px_rgba(20,40,60,0.25)]">
            {heroVideo ? (
              <video
                key={heroVideo.id}
                className="w-full h-[220px] sm:h-[320px] md:h-[450px] lg:h-[700px] xl:h-[720px] object-cover"
                src={heroVideo.url}
                poster={'/images/thumbnail.png' || heroVideo.thumbnail}
                controls
                // autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <div className="">
                <img
                  src="/images/thumbnail.png"
                  alt="Hero Video Thumbnail"
                  className="w-full h-[220px] sm:h-[320px] md:h-[450px] lg:h-[500px] xl:h-[720px] object-cover"
                />
              </div>
            )}
          </div>
        </section>

        <section id="business" className="container-x pb-20 pt-12 sm:pt-20">
          <div className="mb-14 text-center">
            <h2
              data-aos="fade-up"
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl font-semibold text-[#13253b] sm:text-[42px]"
            >
              What We Do
            </h2>
            <div className="mx-auto mt-4 h-px w-14 bg-[#c9a768]" />
            <p className="mt-4 text-md text-[#6b6255]">
              Everything your brand needs, under one roof.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {businesses.map((b) => {
              const Icon = b.icon;

              return (
                <article
                  key={b.title}
                  data-aos={b.animate}
                  className="group min-h-56 border border-[#13253b]/10 bg-white p-8 transition-all duration-300 hover:border-[#c9a768] hover:shadow-[0_18px_40px_-20px_rgba(19,37,59,0.25)]"
                >
                  <Icon
                    size={28}
                    strokeWidth={1.75}
                    className="mb-6 text-[#c9a768] transition-colors duration-300 group-hover:text-[#13253b]"
                  />

                  <h3
                    style={{ fontFamily: "var(--font-display)" }}
                    className="mb-4 text-xl font-semibold text-[#13253b]"
                  >
                    {b.title}
                  </h3>

                  <p className="text-[15px] leading-7 text-[#6b6255]">{b.text}</p>

                  <Link
                    href={b.href}
                    className="mt-7 inline-block border-b border-[#c9a768] pb-0.5 text-sm font-medium tracking-wide text-[#13253b] transition-colors hover:border-[#13253b]"
                  >
                    Read more
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <div className="overflow-hidden border-y border-[#13253b]/10 bg-white py-5">
          <div
            style={{ fontFamily: "var(--font-display)" }}
            className="flex w-max animate-marquee whitespace-nowrap text-3xl font-medium tracking-tight sm:text-4xl"
          >
            <span className="">
              {slides?.map((sd, i) => {
                return (
                  <span key={i} className="text-[54px] max-lg:text-[34px] text-[#13253b]">
                    <span className="mx-6 text-[#c9a768]">·</span>
                    <span>{sd}</span>
                  </span>
                );
              })}
            </span>
          </div>
        </div>

        <section data-aos="fade-up" className="container-x py-20">
          <div className="relative border border-[#13253b]/10 bg-white px-5 py-10 sm:px-14 sm:py-16">
            <div className="flex flex-wrap items-start justify-between gap-8">
              <div>
                <p className="text-xs font-medium tracking-[0.2em] text-[#c9a768]">
                  ABOUT DOLPHIN
                </p>
                <h2
                  data-aos="fade-up"
                  style={{ fontFamily: "var(--font-display)" }}
                  className="mt-3 max-w-lg text-3xl font-semibold leading-tight text-[#13253b] sm:text-[38px]"
                >
                  More than an agency. Your complete solution partner.
                </h2>
              </div>

              <button
                type="button"
                className="max-md:hidden mt-2 shrink-0 border border-[#13253b] px-6 py-3 text-[12px] font-medium tracking-wide text-[#13253b] transition-colors hover:border-[#c9a768] hover:text-[#c9a768]"
              >
                Read More
              </button>
            </div>

            <div className="mt-10 h-px w-full bg-[#13253b]/10" />

            <p className="mt-8 max-w-[720px] text-[16px] leading-[1.75] text-[#4a4438]">
              Established in 2019, Dolphin has grown into a multi-service
              marketing and execution company with a strong presence in Madhya
              Pradesh and across India.
            </p>

            <p className="mt-4 max-w-[720px] text-[16px] leading-[1.75] text-[#4a4438]">
              Our strength lies in bringing different capabilities together.
              Instead of working with multiple vendors for events, advertising,
              branding, outdoor promotions, digital requirements, and customized
              products, our clients can rely on one integrated partner —
              Dolphin. We work with both government and corporate clients,
              delivering solutions that combine creativity, quality, execution,
              and reliability.
            </p>

            <h3
              data-aos="fade-left"
              style={{ fontFamily: "var(--font-display)" }}
              className="mt-10 max-w-xl text-xl font-medium leading-snug text-[#13253b]"
            >
              One client. One requirement. One complete solution.
            </h3>

            <div
              data-aos="fade-left"
              className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-[#13253b]/10 bg-[#13253b]/10 sm:grid-cols-5"
            >
              {stats.map(([n, l], index) => (
                <div
                  key={`${n}-${index}`}
                  className="min-h-[130px] bg-white px-4 py-8 text-center"
                >
                  <div
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-[30px] font-semibold leading-none text-[#13253b]"
                  >
                    {n}
                  </div>

                  <div className="mx-auto mt-3 max-w-[160px] text-[11px] leading-[1.4] text-[#6b6255]">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="container-x py-12">
          <div className="mb-14 text-center">
            <h2
              data-aos="fade-up"
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl font-semibold text-[#13253b] sm:text-[42px]"
            >
              Our Journey
            </h2>
            <div className="mx-auto mt-4 h-px w-14 bg-[#c9a768]" />
            <p className="mt-4 text-lg text-[#6b6255]">
              From creating experiences to creating complete solutions
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="relative h-[380px] w-full">
              <Image
                src="/images/EICHER.jpeg"
                alt="Dolphin"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-xl object-cover shadow-[0_15px_40px_-15px_rgba(29,127,197,0.3)]"
              />
            </div>

            <div>
              <p className="text-md leading-7 text-[#333]">
                Every journey begins with an idea. Ours began with a simple one
                — to create experiences that bring people, brands, and ideas
                together.
              </p>

              <p className="mt-4 text-md leading-7 text-[#333]">
                On 1 February 2019, Dolphin began its journey with a focus on
                events and experience management. We started by helping
                organisations plan, manage, and execute events that people could
                experience, remember, and talk about.
              </p>

              <p className="mt-4 text-md leading-7 text-[#333]">
                But as we worked alongside our clients, we realised that their
                needs went far beyond the event itself. An event often needed
                branding. A campaign needed outdoor visibility. A launch needed
                advertising. A promotion needed digital support. A project
                needed customised products. And behind every successful
                execution was the need for the right materials, resources, and
                people to make it happen.
              </p>
            </div>
          </div>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="text-md leading-7 text-[#333]">
                So, instead of asking our clients to find different partners for
                every requirement, we chose to become that partner. Over the
                years, Dolphin evolved from an event-focused company into a
                complete solution partner for brands, organisations, corporates,
                and government institutions.
              </p>

              <p className="mt-6 text-md font-medium text-[#13253b]">
                Today, our capabilities extend across:
              </p>

              <ul className="mt-3 space-y-2 text-md leading-7 text-[#4a4438]">
                {[
                  "Experiences & Event Management",
                  "Advertising & Outdoor Campaigns",
                  "Digital Solutions",
                  "Brand Activations",
                  "Customized Products",
                  "Branding & Material Supply",
                  "On-Ground Execution",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#c9a768]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                style={{ fontFamily: "var(--font-display)" }}
                className="mb-5 text-center text-3xl font-medium text-[#13253b]"
              >
                One partner. The entire journey.
              </h3>

              <div className="relative h-[380px] w-full">
                <Image
                  src="/images/IMG_3440.jpg"
                  alt="Dolphin event"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="rounded-xl object-cover shadow-[0_15px_40px_-15px_rgba(29,127,197,0.3)]"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-4xl border-l-2 border-[#c9a768] pl-6 text-md leading-7 text-[#4a4438]">
            <p>
              What started with managing events has grown into something much
              bigger: one partner for the entire journey. From the first idea to
              the final execution, we bring together creativity, strategy,
              production, marketing, resources, and execution to help our
              clients bring their vision to life.
            </p>

            <p className="mt-3">
              Our journey is still evolving, but our purpose remains the same —
              to make things simpler for our clients and better for their
              brands.
            </p>

            <p className="mt-3">
              Because at Dolphin, we believe a great solution isn't about doing
              just one thing well. It's about bringing everything together.
            </p>

            <p
              style={{ fontFamily: "var(--font-display)" }}
              className="mt-4 text-xl font-medium text-[#13253b]"
            >
              Dolphin. The Complete Solution.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="bg-[#13253b]">
            <div className="container-x grid items-center gap-10 py-16 lg:grid-cols-2">
              <div data-aos="fade-right">
                <p className="text-xs font-medium tracking-[0.2em] text-[#c9a768]">
                  THE DOLPHIN DIFFERENCE
                </p>
                <h2
                  data-aos="fade-up"
                  style={{ fontFamily: "var(--font-display)" }}
                  className="mt-3 max-w-md text-3xl font-medium leading-tight text-white sm:text-[34px]"
                >
                  Why manage six vendors when one can do it all?
                </h2>
                <p className="mt-4 text-md text-white/60">
                  Event · Branding · Outdoor Campaign · Digital Promotion ·
                  Customized Products · Material Supply · On-Ground Execution
                </p>
                <p className="mt-5 max-w-xl text-[16px] leading-7 text-white/80">
                  Dolphin brings it all together. One brief. One team. One
                  point of coordination. One complete solution.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-block border border-[#c9a768] px-7 py-3 text-sm font-medium tracking-wide text-[#c9a768] transition-colors hover:bg-[#c9a768] hover:text-[#13253b]"
                >
                  Get In Touch
                </a>
              </div>
              <div data-aos="fade-left" className="relative h-[380px] w-full">
                <Image
                  src="/images/IMG_3420.jpg"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  alt="Dolphin event reference"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="container-x py-20">
          <div className="mb-14 text-center">
            <h2
              data-aos="fade-up"
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl font-semibold text-[#13253b] sm:text-[42px]"
            >
              Highlights
            </h2>
            <div className="mx-auto mt-4 h-px w-14 bg-[#c9a768]" />
            <p className="mt-4 text-lg text-[#6b6255]">
              Our work across events, branding & activations
            </p>
          </div>

          <div className="grid grid-cols-1 auto-rows-[300px] gap-2 md:auto-rows-[400px] md:grid-cols-4">
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
                  className={`relative min-h-[300px] overflow-hidden ${
                    classes[i] || ""
                  }`}
                >
                  <Image
                    src={src}
                    alt="Dolphin work"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <section className="container-x py-20 text-center">
          <h2
            data-aos="fade-up"
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl font-semibold text-[#13253b] sm:text-[42px]"
          >
            Who We Work With
          </h2>

          <p className="mt-4 text-lg text-[#6b6255]">
            Corporates, institutions & government organisations
          </p>

          <div className="mx-auto mt-6 h-px w-14 bg-[#c9a768]" />
        </section>

        <section id="contact" className="container-x py-20">
          <div className="border border-[#13253b]/10 bg-white px-3 py-14 sm:px-12 sm:py-16">
            <div className="text-center">
              <p className="text-xs font-medium tracking-[0.2em] text-[#c9a768]">
                GET IN TOUCH
              </p>
              <h2
                data-aos="fade-up"
                style={{ fontFamily: "var(--font-display)" }}
                className="mt-3 text-3xl font-medium text-[#13253b] sm:text-4xl"
              >
                Let's bring your idea to life
              </h2>

              <p className="mt-5 text-sm text-[#6b6255] sm:text-base">
                Fill out the form below and our team will get back to you
                shortly.
              </p>
            </div>

            <form
              className="mx-auto mt-12 grid max-w-[1010px] grid-cols-1 gap-6 md:grid-cols-3"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="h-[46px] border-b border-[#13253b]/20 bg-transparent px-1 text-sm text-[#13253b] outline-none transition-all placeholder:text-[#8a8a8a] focus:border-[#c9a768]"
              />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                required
                className="h-[46px] border-b border-[#13253b]/20 bg-transparent px-1 text-sm text-[#13253b] outline-none transition-all placeholder:text-[#8a8a8a] focus:border-[#c9a768]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="h-[46px] border-b border-[#13253b]/20 bg-transparent px-1 text-sm text-[#13253b] outline-none transition-all placeholder:text-[#8a8a8a] focus:border-[#c9a768]"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                maxLength={10}
                required
                className="h-[46px] border-b border-[#13253b]/20 bg-transparent px-1 text-sm text-[#13253b] outline-none transition-all placeholder:text-[#8a8a8a] focus:border-[#c9a768]"
              />

              <div className="relative">
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="h-[46px] w-full appearance-none border-b border-[#13253b]/20 bg-transparent px-1 pr-10 text-sm text-[#13253b] outline-none transition-all focus:border-[#c9a768]"
                >
                  <option value="" disabled>
                    Select Location
                  </option>

                  <option value="Bhopal">Bhopal</option>
                  <option value="Indore">Indore</option>
                  <option value="Jabalpur">Jabalpur</option>
                  <option value="Gwalior">Gwalior</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Other">Other</option>
                </select>

                <svg
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b6255]"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m5 7 5 5 5-5" />
                </svg>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="resize-y border border-[#13253b]/20 bg-transparent px-3 py-3 text-sm text-[#13253b] outline-none transition-all placeholder:text-[#8a8a8a] focus:border-[#c9a768] md:col-span-3"
              />

              <button
                type="submit"
                disabled={isSending}
                className="mx-auto mt-4 border border-[#13253b] bg-[#13253b] px-9 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:border-[#c9a768] hover:bg-[#c9a768] hover:text-[#13253b] disabled:cursor-not-allowed disabled:opacity-60 md:col-span-3"
              >
                {isSending ? "Sending..." : "Submit"}
              </button>

              {status && (
                <p className="text-center text-sm text-[#13253b] md:col-span-3">
                  {status}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}