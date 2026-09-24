import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

// Navbar ke same colors
const iconGradient = "text-[#a5803a]";

const iconBox =
  "flex h-9 w-9 items-center justify-center border border-[#c9a768]/40 bg-[#f8f4ec] text-[#13253b]";

export default function Footer() {
  return (
    <footer className="bg-[#f8f4ec] text-[#13253b]">
      <div className="mx-auto container-x px-6">

        {/* Top Logo + Social Icons */}
        <div className="flex items-center justify-between border-b border-[#c9a768]/60 py-[40px]">
          <img
            src="/home/Dolphin-Logo-transparent.png"
            alt="Dolphin Facilities Logo"
            style={{ height: "90px", width: "auto", objectFit: "contain" }}
          />

          <div>
            <div className="text-[32px] font-black leading-none tracking-[-0.08em] text-[#13253b]">
              Dolphin Facilities
            </div>

            <div className="mt-1 text-[7px] font-bold tracking-[0.42em] text-[#a5803a]">
              EVENT MANAGEMENT AGENCY
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-7">
            <a
              href="#"
              aria-label="Facebook"
              className={`${iconGradient} text-lg transition-transform hover:scale-110`}
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="X"
              className={`${iconGradient} text-lg transition-transform hover:scale-110`}
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className={`${iconGradient} text-lg transition-transform hover:scale-110`}
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">

          {/* Contact */}
          <div>
            <h4 className="mb-7 text-[20px] font-bold text-[#13253b]">
              Contact Us
            </h4>

            <p className="mb-3 text-[13px] text-[#13253b]/90">
              For Business Enquiries:
            </p>

            <div className="mb-4 flex items-center gap-3">
              <span className={iconBox}>
                <FaEnvelope className={`text-sm`} />
              </span>

              <span className="text-[13px] text-[#13253b]/85">
                write@dolphinfacilities.in
              </span>
            </div>

            <div className="mb-4 flex items-center gap-3">
              <span className={iconBox}>
                <FaPhoneAlt className={`text-sm`} />
              </span>

              <span className="text-[13px] text-[#13253b]/85">
                +(91) -9098486957
              </span>
            </div>

            <div className="mb-8 flex items-center gap-3">
              <span className={iconBox}>
                <FaPhoneAlt className={`text-sm`} />
              </span>

              <span className="text-[13px] text-[#13253b]/85">
                +(91) 02247791300
              </span>
            </div>

            <p className="mb-3 text-[13px] text-[#13253b]/90">
              For Career Enquiries:
            </p>

            <div className="flex items-center gap-3">
              <span className={iconBox}>
                <FaEnvelope className={`text-sm`} />
              </span>

              <span className="text-[13px] text-[#13253b]/85">
                write@dolphinfacilities.in
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-7 text-[20px] font-bold text-[#13253b]">
              Quick links
            </h4>

            <div className="space-y-5 text-[13px] text-[#13253b]/85">
              <a
                href="/about"
                className="block transition-colors hover:text-[#a5803a]"
              >
                About Us
              </a>

              <a
                href="/contact"
                className="block transition-colors hover:text-[#a5803a]"
              >
                Contact Us
              </a>

              <a
                href="/portfolio"
                className="block transition-colors hover:text-[#a5803a]"
              >
                Portfolio
              </a>
            </div>
          </div>

          {/* Our Businesses */}
          <div>
            <h4 className="mb-7 text-[20px] font-bold text-[#13253b]">
              Our Businesses
            </h4>

            <div className="space-y-5 text-[13px] text-[#13253b]/85">
              <a
                href="/business/brand-activation"
                className="block transition-colors hover:text-[#a5803a]"
              >
                Brand Activation
              </a>

              <a
                href="/business/digital-solutions"
                className="block transition-colors hover:text-[#a5803a]"
              >
                Digital Solutions
              </a>

              <a
                href="/business/special-events"
                className="block transition-colors hover:text-[#a5803a]"
              >
                Special Events
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="mb-7 text-[20px] font-bold text-[#13253b]">
              Locations
            </h4>

            <div className="space-y-5 text-[13px] text-[#13253b]/85">
              <p>
                17-18 Block A, Second Floor,
                <br />
                Gammon India, TT Nagar,Bhopal,462003
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#c9a768]/60 py-9 text-center">
          <p className="text-[13px] text-[#13253b]">
            Copyright 2026 Dolphin Facilities Pvt. Ltd. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}