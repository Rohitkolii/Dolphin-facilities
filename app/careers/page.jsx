"use client";

import Footer from "@/Components/common/Footer";
import Navbar from "@/Components/common/Navbar";
import CareersHero from "@/Components/careers/CareersHero";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { playfair } from "@/lib/fonts";
const display = { fontFamily: playfair.style.fontFamily };

// Email jahan career applications aayengi
const CAREER_EMAIL = "write@dolphinfacilities.in";

// Positions dropdown — yahan se add/remove kar sakte ho
const positions = [
  "Event Manager",
  "Creative / Graphic Designer",
  "Digital Marketing Executive",
  "Operations & Logistics",
  "Business Development",
  "Other / General Application",
];

const emptyForm = {
  full_name: "",
  email: "",
  phone: "",
  position: "",
  experience: "",
  resume_link: "",
  message: "",
};

const inputCls =
  "h-[46px] w-full border-b border-[#13253b]/20 bg-transparent px-1 text-sm text-[#13253b] outline-none transition-all placeholder:text-[#8a8a8a] focus:border-[#c9a768]";

export default function CareersPage() {
  const [formData, setFormData] = useState(emptyForm);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        // Career ka alag template, na ho to contact wala template use hoga
        process.env.NEXT_PUBLIC_EMAILJS_CAREER_TEMPLATE_ID ||
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          ...formData,
          to_email: CAREER_EMAIL,
          subject: `Career Application - ${formData.position} - ${formData.full_name}`,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      );

      setStatus("Thank you! Your application has been sent successfully.");
      setFormData(emptyForm);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Navbar />
      <CareersHero />

      <main className="min-h-screen bg-[#f8f4ec] py-14 pb-[100px] text-[#13253b] md:px-10">
        <div className="container-x mx-auto">
          <section className="border border-[#13253b]/10 bg-white px-6 py-14 shadow-[0_18px_40px_-28px_rgba(19,37,59,0.3)] sm:px-10 md:px-[60px]">
            <p className="text-center text-xs font-medium tracking-[0.2em] text-[#a5803a]">
              APPLY NOW
            </p>

            <h2
              style={display}
              className="mt-3 text-center text-[28px] font-semibold text-[#13253b] sm:text-[36px]"
            >
              Tell Us About Yourself
            </h2>

            <div className="mx-auto mt-4 h-px w-14 bg-[#c9a768]" />

            <p className="mt-5 text-center text-[15px] text-[#6b6255] sm:text-[17px]">
              Fill out the form and our HR team will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-[1010px]">
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-3">
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className={inputCls}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className={inputCls}
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  title="Enter 10 digit phone number"
                  required
                  className={inputCls}
                />

                {/* Position */}
                <div className="relative">
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className={`${inputCls} appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      Position Applying For
                    </option>
                    {positions.map((p) => (
                      <option key={p} value={p}>
                        {p}
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

                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Experience (e.g. Fresher / 2 years)"
                  required
                  className={inputCls}
                />

                <input
                  type="url"
                  name="resume_link"
                  value={formData.resume_link}
                  onChange={handleChange}
                  placeholder="Resume Link (Google Drive etc.)"
                  required
                  className={inputCls}
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Why do you want to join us?"
                  rows={5}
                  required
                  className="resize-none border border-[#13253b]/20 bg-transparent px-3 py-3 text-sm text-[#13253b] outline-none transition-all placeholder:text-[#8a8a8a] focus:border-[#c9a768] md:col-span-3"
                />

                <div className="flex justify-center md:col-span-3">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="mt-1 border border-[#13253b] bg-[#13253b] px-9 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:border-[#c9a768] hover:bg-[#c9a768] hover:text-[#13253b] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSending ? "Sending..." : "Submit Application"}
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
