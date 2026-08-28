// import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";


export default function SocialRail() {
  const socials = [
    {
      icon: FaInstagram,
      label: "Let’s Turn Ideas Into Experiences",
      href: "#contact",
    },
    {
      icon: BiMessageRoundedDetail,
      label: "Plan Your Event With Us",
      href: "#contact",
    },
    {
      icon: AiOutlineLinkedin,
      label: "Build Impactful Experiences",
      href: "#contact",
    },
  ];

  return (
    <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 md:flex md:flex-col md:gap-4">
      {socials.map(({ icon: Icon, label, href }) => (
        <div
          key={label}
          className="group relative h-[50px] w-[180px]"
        >
          <a
            href={href}
            className="
              absolute right-0 top-0
              flex h-[50px] w-[50px]
              overflow-hidden
              border-[5px] border-[#70c7b5]
              bg-[#197fc3]
              transition-all duration-300 ease-in-out
              group-hover:w-[180px]
            "
          >
            {/* ICON */}
            <div className="grid h-10 w-10 shrink-0 place-items-center text-white">
              <Icon size={20} />
            </div>

            {/* TEXT */}
            <div
              className="
                flex h-10 min-w-0 flex-1
                items-center
                overflow-hidden
                bg-[#68c4b2]
                px-3
                text-sm font-medium text-black
                opacity-0
                transition-opacity duration-200
                group-hover:opacity-100
              "
            >
              <span className="whitespace-normal leading-tight">
                {label}
              </span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}