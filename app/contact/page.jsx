"use client";

import Footer from "@/Components/common/Footer";
import Navbar from "@/Components/common/Navbar";
import ContactHero from "@/Components/contact/ContactHero";
import SocialRail from "@/Components/home/SocialRail";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const cities = [
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Chennai",
  "Hyderabad",
  "Gujarat",
  "Dubai",
];

const offices = {
  Mumbai: {
    title: "Mumbai Office",
    address:
      "Second floor, B-6, Valecha Chambers, New Link Road, Andheri West, Mumbai, Mumbai Suburban, Maharashtra - 400053",
    phone: "(+91) 02247791300",
    lat: 19.136,
    lng: 72.827,
  },
  Delhi: {
    title: "Delhi Office",
    address: "New Delhi, Delhi, India",
    phone: "+91 2247791300",
    lat: 28.6139,
    lng: 77.209,
  },
  Bengaluru: {
    title: "Bengaluru Office",
    address: "Bengaluru, Karnataka, India",
    phone: "+91 2247791300",
    lat: 12.9716,
    lng: 77.5946,
  },
  Chennai: {
    title: "Chennai Office",
    address: "Chennai, Tamil Nadu, India",
    phone: "+91 2247791300",
    lat: 13.0827,
    lng: 80.2707,
  },
  Hyderabad: {
    title: "Hyderabad Office",
    address: "Hyderabad, Telangana, India",
    phone: "+91 2247791300",
    lat: 17.385,
    lng: 78.4867,
  },
  Gujarat: {
    title: "Gujarat Office",
    address: "Ahmedabad, Gujarat, India",
    phone: "+91 2247791300",
    lat: 23.0225,
    lng: 72.5714,
  },
  Dubai: {
    title: "Dubai Office",
    address: "Dubai, United Arab Emirates",
    phone: "+971 2247791300",
    lat: 25.2048,
    lng: 55.2708,
  },
};

/* ---------------- ICONS ---------------- */

const LocationIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
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
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.07 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
  </svg>
);

/* ---------------- CONTACT CARD ---------------- */

const ContactCard = ({ icon, title, children }) => {
  return (
    <div className="border border-[#167fc0] px-5 py-[50px]">
      <div className="flex justify-center items-center">
        <div className="flex h-[80px] w-[80px] items-center justify-center bg-gradient-to-r from-[#72d29c] to-[#0085cf]">
          {icon}
        </div>
      </div>

      <h3 className="mt-[12px] text-center text-[22px] font-semibold  bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-transparent">
        {title}
      </h3>

      <div className="mt-[3px] text-center text-[15px] leading-[25px] text-white">
        {children}
      </div>
    </div>
  );
};

/* ---------------- PAGE ---------------- */

export default function ContactPage() {
  const [activeCity, setActiveCity] = useState("Mumbai");
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
      <main className="min-h-screen bg-[#292929] py-9 pb-[100px] text-white md:px-10">
        <div className="mx-auto container-x">
          {/* ================= TOP CONTACT BOXES ================= */}

          <section className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-[17px]">
            <ContactCard icon={<LocationIcon />} title="Location">
              Mumbai, Delhi, Bengaluru, Chennai,
              <br />
              Hyderabad, Gujarat, Dubai.
            </ContactCard>

            <ContactCard icon={<MailIcon />} title="Email">
              info@wizcraft.co
            </ContactCard>

            <ContactCard icon={<PhoneIcon />} title="Contact">
              +91 9819822333
              <br />
              +91 02247791300
            </ContactCard>
          </section>

          {/* ================= OFFICE SECTION ================= */}

          <section className="mt-[80px]">
            <p data-aos="zoom-in-left" className="text-center uppercase text-4xl font-semibold mb-5 bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-transparent">
              Our Locations
            </p>
            <p data-aos="fade-up" className="text-center text-xl text-white">
              Explore Our Offices Across Different Cities
            </p>

            {/* CITY TABS */}
            <div data-aos="fade-up" className="relative mt-[39px]">
              <div className="absolute left-0 right-0 top-[18px] h-px bg-[#126ba4]" />

              <div className="relative flex flex-col md:flex-row md:flex-wrap justify-center  md:gap-[30px] w-full">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setActiveCity(city)}
                    className={`
        h-[40px]
        w-full
        md:w-auto
        md:min-w-[84px]
        px-[18px]
        text-[16px]
        md:text-[18px]
        ${activeCity === city
                        ? "bg-[#158fd0] text-white"
                        : "bg-[#999c9d] text-white"
                      }
      `}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* MAP + OFFICE DETAILS */}
            <div data-aos="fade-up" className="mt-[50px] h-[500px] p-[35px] overflow-hidden border-2 border-[#167fc0]">
              <div className="grid h-full grid-cols-1 md:grid-cols-2">
                {/* LEFT — GOOGLE MAP */}
                <div className="h-full w-full">
                  <iframe
                    title={`${office.title} Google Map`}
                    src={`https://www.google.com/maps?q=${office.lat},${office.lng}&z=14&output=embed`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* RIGHT — OFFICE DETAILS */}
                <div className="flex h-full items-center px-[45px]">
                  <div className="max-w-[330px]">
                    <h2 className="text-[25px] font-medium text-white">
                      {office.title}
                    </h2>

                    <p className="mt-[2px] text-[15px] leading-[28px] text-[#eeeeee]">
                      {office.address}
                    </p>

                    <p className="mt-[10px] text-[18px] text-[#eeeeee]">
                      {office.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= CONTACT FORM ================= */}

          <section className="mt-[45px] bg-gradient-to-br from-[#1877bd] via-[#2688bd] to-[#76c8a4] px-8 py-[72px] md:px-[32px]">
            <p data-aos="zoom-in-left" className="uppercase font-bold text-center text-4xl mb-5">Let's connect to create something big</p>
            <p data-aos="fade-up" className="text-center text-[18px] text-white">
              Fill out the form below and our team will get back to you shortly.
            </p>

            <form
              data-aos="fade-up"
              onSubmit={handleSubmit}
              className="mx-auto mt-[27px]"
            >

              <div className="grid grid-cols-1 gap-x-[16px] gap-y-[15px] md:grid-cols-3">
                {/* Full Name */}
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="h-[45px] border border-[#66b6ca]/70 bg-transparent px-[12px] text-[14px] text-white outline-none placeholder:text-white focus:border-white"
                />


                {/* Company */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  required
                  className="h-[45px] border border-[#66b6ca]/70 bg-transparent px-[12px] text-[14px] text-white outline-none placeholder:text-white focus:border-white"
                />


                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="h-[45px] border border-[#66b6ca]/70 bg-transparent px-[12px] text-[14px] text-white outline-none placeholder:text-white focus:border-white"
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
                  className="h-[45px] border border-[#66b6ca]/70 bg-transparent px-[12px] text-[14px] text-white outline-none placeholder:text-white focus:border-white"
                />


                {/* Location */}
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="h-[45px] border border-[#66b6ca]/70 bg-transparent px-[12px] text-[14px] text-white outline-none focus:border-white"
                >
                  <option value="" disabled className="bg-[#292929]">
                    Select Location
                  </option>

                  {cities.map((city) => (
                    <option key={city} value={city} className="bg-[#292929]">
                      {city}
                    </option>
                  ))}
                </select>


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
                  className="resize-none border border-[#66b6ca]/70 bg-transparent px-[8px] py-[12px] text-[14px] text-white outline-none placeholder:text-white focus:border-white md:col-span-3"
                />


                {/* Button */}
                <div className="flex justify-center md:col-span-3">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="mt-[1px] h-[40px] bg-gradient-to-r from-[#74ce9c] to-[#147fc2] px-[25px] text-[17px] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSending ? "Sending..." : "Submit Now"}
                  </button>

                </div>

                {status && (
                  <p className="mt-4 text-center text-[15px] text-white md:col-span-3">
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
