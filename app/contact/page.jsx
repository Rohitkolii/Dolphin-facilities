"use client";

import Footer from "@/Components/common/Footer";
import Navbar from "@/Components/common/Navbar";
import ContactHero from "@/Components/contact/ContactHero";
import SocialRail from "@/Components/home/SocialRail";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { playfair } from "@/lib/fonts";

// Same display font as page.js / Navbar / About / Blog
const display = { fontFamily: playfair.style.fontFamily };

const cities = ["Bhopal"];

const offices = {
  Bhopal: {
    title: "Bhopal Office",
    address:
      "17-18 Block A, Second Floor, Gammon India, TT Nagar, Bhopal - 462003",
    phone: "(+91) 02247791300",
    lat: 23.2325,
    lng: 77.4055,
  },
};

/* ---------------- ICONS ---------------- */

const LocationIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#13253b"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#13253b"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#13253b"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.07 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
  </svg>
);

/* ---------------- CONTACT CARD ---------------- */

const ContactCard = ({ icon, title, children }) => {
  return (
    <div className="group border border-[#13253b]/10 bg-white px-6 py-10 text-center transition-all duration-300 hover:border-[#c9a768] hover:shadow-[0_18px_40px_-20px_rgba(19,37,59,0.25)] sm:px-8 sm:py-12">
      <div className="flex items-center justify-center">
        <div className="flex h-[64px] w-[64px] items-center justify-center border border-[#c9a768] bg-[#f8f4ec] transition-colors duration-300 group-hover:bg-[#c9a768]">
          {icon}
        </div>
      </div>

      <h3
        style={display}
        className="mt-5 text-[19px] font-semibold text-[#13253b] sm:text-[21px]"
      >
        {title}
      </h3>

      <div className="mx-auto mt-3 h-px w-10 bg-[#c9a768]" />

      <div className="mt-4 text-[14px] leading-[1.7] text-[#4a4438] sm:text-[15px]">
        {children}
      </div>
    </div>
  );
};

/* ---------------- PAGE ---------------- */

export default function ContactPage() {
  const [activeCity, setActiveCity] = useState("Bhopal");
  const office = offices[activeCity];

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
        }
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
    <>
      <Navbar />
      <ContactHero />
      {/* <SocialRail /> */}
      <main className="min-h-screen bg-[#f8f4ec] py-14 pb-[100px] text-[#13253b] md:px-10">
        <div className="container-x mx-auto">
          {/* ================= TOP CONTACT BOXES ================= */}

          <section className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-[17px]">
            <ContactCard icon={<LocationIcon />} title="Location">
              17-18 Block A, Second Floor, Gammon India, TT Nagar, Bhopal –
              462003
            </ContactCard>

            <ContactCard icon={<MailIcon />} title="Email">
              write@dolphinfacilities.in
            </ContactCard>

            <ContactCard icon={<PhoneIcon />} title="Contact">
              +91 9098486957
              <br />
              +91 02247791300
            </ContactCard>
          </section>

          {/* ================= OFFICE SECTION ================= */}

          <section className="mt-20">
            <p
              data-aos="zoom-in-left"
              className="text-center text-xs font-medium tracking-[0.2em] text-[#a5803a]"
            >
              WHERE TO FIND US
            </p>

            <h2
              data-aos="fade-up"
              style={display}
              className="mt-3 text-center text-[32px] font-semibold text-[#13253b] sm:text-[42px]"
            >
              Our Location
            </h2>

            <div className="mx-auto mt-4 h-px w-14 bg-[#c9a768]" />

            <p
              data-aos="fade-up"
              className="mt-5 text-center text-[15px] text-[#6b6255] sm:text-[17px]"
            >
              Visit Us At Our Bhopal Office
            </p>

            {/* CITY TABS */}
            <div data-aos="fade-up" className="relative mt-10">
              <div className="relative flex w-full flex-col justify-center md:flex-row md:flex-wrap md:gap-4">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setActiveCity(city)}
                    className={`
                      h-[42px]
                      w-full
                      border
                      px-6
                      text-[15px]
                      font-medium
                      tracking-wide
                      transition-colors
                      duration-300
                      md:w-auto
                      md:min-w-[110px]
                      ${
                        activeCity === city
                          ? "border-[#13253b] bg-[#13253b] text-white"
                          : "border-[#13253b]/20 bg-white text-[#13253b] hover:border-[#c9a768] hover:text-[#a5803a]"
                      }
                    `}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* MAP + OFFICE DETAILS */}
            <div
              data-aos="fade-up"
              className="mt-12 h-auto overflow-hidden border border-[#13253b]/10 bg-white p-5 shadow-[0_18px_40px_-28px_rgba(19,37,59,0.3)] sm:p-8 md:h-[480px]"
            >
              <div className="grid h-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
                {/* LEFT — GOOGLE MAP */}
                <div className="h-[280px] w-full border border-[#c9a768]/40 md:h-full">
                  <iframe
                    title={`${office.title} Google Map`}
                    src={`https://www.google.com/maps?q=${office.lat},${office.lng}&z=14&output=embed`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* RIGHT — OFFICE DETAILS */}
                <div className="flex h-full items-center md:px-10">
                  <div className="max-w-[330px]">
                    <p className="text-xs font-medium tracking-[0.2em] text-[#a5803a]">
                      OFFICE
                    </p>

                    <h3
                      style={display}
                      className="mt-2 text-[24px] font-semibold text-[#13253b] sm:text-[27px]"
                    >
                      {office.title}
                    </h3>

                    <div className="mt-4 h-px w-10 bg-[#c9a768]" />

                    <p className="mt-4 text-[15px] leading-[1.75] text-[#4a4438]">
                      {office.address}
                    </p>

                    <p className="mt-4 text-[17px] font-medium text-[#13253b]">
                      {office.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= CONTACT FORM ================= */}

          <section className="mt-16 border border-[#13253b]/10 bg-white px-6 py-14 shadow-[0_18px_40px_-28px_rgba(19,37,59,0.3)] sm:px-10 md:px-[60px]">
            <p
              data-aos="zoom-in-left"
              className="text-center text-xs font-medium tracking-[0.2em] text-[#a5803a]"
            >
              GET IN TOUCH
            </p>

            <h2
              data-aos="fade-up"
              style={display}
              className="mt-3 text-center text-[28px] font-semibold text-[#13253b] sm:text-[36px]"
            >
              Let&apos;s Connect to Create Something Big
            </h2>

            <div className="mx-auto mt-4 h-px w-14 bg-[#c9a768]" />

            <p
              data-aos="fade-up"
              className="mt-5 text-center text-[15px] text-[#6b6255] sm:text-[17px]"
            >
              Fill out the form below and our team will get back to you
              shortly.
            </p>

            <form
              data-aos="fade-up"
              onSubmit={handleSubmit}
              className="mx-auto mt-10 max-w-[1010px]"
            >
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-3">
                {/* Full Name */}
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="h-[46px] border-b border-[#13253b]/20 bg-transparent px-1 text-sm text-[#13253b] outline-none transition-all placeholder:text-[#8a8a8a] focus:border-[#c9a768]"
                />

                {/* Company */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  required
                  className="h-[46px] border-b border-[#13253b]/20 bg-transparent px-1 text-sm text-[#13253b] outline-none transition-all placeholder:text-[#8a8a8a] focus:border-[#c9a768]"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="h-[46px] border-b border-[#13253b]/20 bg-transparent px-1 text-sm text-[#13253b] outline-none transition-all placeholder:text-[#8a8a8a] focus:border-[#c9a768]"
                />

                {/* Phone */}
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

                {/* Location */}
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

                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
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

                {/* Empty column */}
                <div className="hidden md:block" />

                {/* Message */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="resize-none border border-[#13253b]/20 bg-transparent px-3 py-3 text-sm text-[#13253b] outline-none transition-all placeholder:text-[#8a8a8a] focus:border-[#c9a768] md:col-span-3"
                />

                {/* Button */}
                <div className="flex justify-center md:col-span-3">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="mt-1 border border-[#13253b] bg-[#13253b] px-9 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:border-[#c9a768] hover:bg-[#c9a768] hover:text-[#13253b] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSending ? "Sending..." : "Submit Now"}
                  </button>
                </div>

                {status && (
                  <p className="mt-4 text-center text-sm text-[#13253b] md:col-span-3">
                    {status}
                  </p>
                )}
              </div>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}