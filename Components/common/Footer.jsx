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

const iconGradient =
  "bg-gradient-to-r from-[#68c4b2] via-[#38a9d5] to-[#6c63ff] bg-clip-text text-transparent";

const iconBox =
  "flex h-9 w-9 items-center justify-center border border-white/15 bg-[#3d3d3d]";

export default function Footer() {
  return (
    <footer className="bg-[#353535] text-white">
      <div className="mx-auto container-x px-6">

        {/* Top Logo + Social Icons */}
        <div className="flex items-center justify-between border-b border-[#68c4b2] py-[40px]">
          {/* Logo */}
          <div>
            <div className="text-[32px] font-black leading-none tracking-[-0.08em]">
              ★WIZCRAFT
            </div>

            <div className="mt-1 text-[7px] font-bold tracking-[0.42em] text-white/80">
              ENTERTAINMENT AGENCY
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
            <h4 className="mb-7 text-[20px] font-bold">
              Contact Us
            </h4>

            <p className="mb-3 text-[13px] text-white/90">
              For Business Enquiries:
            </p>

            <div className="mb-4 flex items-center gap-3">
              <span className={iconBox}>
                <FaEnvelope className={`text-sm`} />
              </span>

              <span className="text-[13px] text-white/85">
                info@wizcraft.co
              </span>
            </div>

            <div className="mb-4 flex items-center gap-3">
              <span className={iconBox}>
                <FaPhoneAlt className={`text-sm`} />
              </span>

              <span className="text-[13px] text-white/85">
                +(91) 9819822333
              </span>
            </div>

            <div className="mb-8 flex items-center gap-3">
              <span className={iconBox}>
                <FaPhoneAlt className={`text-sm`} />
              </span>

              <span className="text-[13px] text-white/85">
                +(91) 02247791300
              </span>
            </div>

            <p className="mb-3 text-[13px] text-white/90">
              For Career Enquiries:
            </p>

            <div className="flex items-center gap-3">
              <span className={iconBox}>
                <FaEnvelope className={`text-sm`} />
              </span>

              <span className="text-[13px] text-white/85">
                careers@wizcraft.co
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-7 text-[20px] font-bold">
              Quick links
            </h4>

            <div className="space-y-5 text-[13px] text-white/85">
              <a
                href="#"
                className="block transition-colors hover:text-[#68c4b2]"
              >
                About Us
              </a>

              <a
                href="#"
                className="block transition-colors hover:text-[#68c4b2]"
              >
                Contact Us
              </a>

              <a
                href="#"
                className="block transition-colors hover:text-[#68c4b2]"
              >
                Portfolio
              </a>
            </div>
          </div>

          {/* Our Businesses */}
          <div>
            <h4 className="mb-7 text-[20px] font-bold">
              Our Businesses
            </h4>

            <div className="space-y-5 text-[13px] text-white/85">
              <a
                href="#"
                className="block transition-colors hover:text-[#68c4b2]"
              >
                Brand Activation
              </a>

              <a
                href="#"
                className="block transition-colors hover:text-[#68c4b2]"
              >
                Digital Solutions
              </a>

              <a
                href="#"
                className="block transition-colors hover:text-[#68c4b2]"
              >
                Special Events
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="mb-7 text-[20px] font-bold">
              Locations
            </h4>

            <div className="space-y-5 text-[13px] text-white/85">
              <p>Mumbai</p>
              <p>Delhi</p>
              <p>Bengaluru</p>
              <p>Chennai</p>
              <p>Hyderabad</p>
              <p>Gujarat</p>
              <p>Dubai</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#68c4b2] py-9 text-center">
          <p className="text-[13px] text-white">
            Copyright 2026 Wizcraft Entertainment Agency Pvt. Ltd. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
