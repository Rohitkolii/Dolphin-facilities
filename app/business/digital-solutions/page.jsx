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
    title: "Live Streaming",
    text: "Wizcraft brings over 30 years of expertise to the digital stage through cutting-edge Live Streaming Services. As a leading live streaming company in India and Dubai, we deliver seamless, high-impact broadcasts that connect global audiences with unforgettable, interactive experiences. Virtual Events In Immersive",
    featured: true,
  },
  {
    icon: FaBuilding,
    title: "Virtual Events With AR Based Content",
    text: "Wizcraft Entertainment Agency redefines engagement through cutting-edge Virtual Event Services and immersive Augmented & Virtual Reality experiences. Merging creativity, technology, and storytelling, we craft interactive, high-impact digital environments that connect brands and audiences globally, transforming every event into an unforgettable, technology-driven experience.",
  },
  {
    icon: FaCommentDots,
    title: "Virtual Events In Immersive Environments",
    text: "We transform digital interactions into immersive brand journeys through our advanced Virtual Event Services and Virtual Event Platform. From 3D environments to gamified engagement, we craft seamless, interactive, and unforgettable virtual experiences that connect, inspire, and leave lasting impressions globally.",
  },
  {
    icon: FaHandshake,
    title: "Virtual Events With Integrated VR",
    text: "At Wizcraft, we bring over 30 years of expertise to create immersive Virtual Reality Event Services that redefine engagement. As a leading VR Event Management Company, we merge creativity and technology to craft interactive, high-impact virtual experiences that inspire, connect, and captivate globally.",
  },
  {
    icon: FaChartLine,
    title: "Content Design & Management",
    text: "At Wizcraft Entertainment Agency, we turn ideas into powerful stories through expert event content creation services. Combining creativity, strategy, and technology, we craft impactful narratives and immersive designs that elevate every brand experience, engaging audiences and leaving lasting impressions across live and digital platforms worldwide.",
  },
  {
    icon: FaChartLine,
    title: "Hybrid Events",
    text: "We specialise in redefining engagement through innovative Hybrid Event Management Services that blend on-ground energy with digital reach. With over 30 years of expertise, we craft seamless hybrid experiences that inspire participation, enhance connection, and create unforgettable impact across audiences worldwide.",
  },
  {
    icon: FaChartLine,
    title: "Digital Marketing",
    text: "Wizcraft Digital is an ideas-driven digital experience agency that offers digital marketing, digital content creation, digital performance marketing, digital influencer outreach, digital web and app development solutions, AI integration, and digital automation services. It is the place where creativity, technology, and data come together to deliver complete digital campaigns and outcomes for future-ready brands.",
  },
];

function IconBox({ icon: Icon }) {
  return (
    <div className="grid h-20 w-20 shrink-0 place-items-center border border-[#2b8bc7]/70 text-[#1599df]">
      <Icon size={21} strokeWidth={1.7} />
    </div>
  );
}

function ServiceCard({ item }) {
  const Icon = item.icon;
  return (
    <article
      className={`border border-[#267fba] p-5 sm:p-10 ${
        item.featured
          ? "bg-gradient-to-r from-[#2286c8] to-[#69c2a9]"
          : "bg-[#303030]"
      }`}
    >
      <div className="flex items-center gap-4">
        <IconBox icon={Icon} />
        <div>
          <h3 className="text-[14px] sm:text-[25px] font-bold leading-tight bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-transparent">
            {item.title}
          </h3>
          <p
            className={`mt-2 text-[9px] sm:text-[16px] leading-[1.55] ${item.featured ? "text-white" : "text-gray-200"}`}
          >
            {item.text}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function DigitalSolutionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#2d2d2d] text-white">
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <Hero
        title="Digital Event Solutions Company in India"
        desc="At Wizcraft, we redefine the future of experiences through Digital Event Solutions that blend creativity and technology."
      />

      {/* Services */}
      <section className="mx-auto container-x px-6 py-12 sm:px-0 md:py-16">
        <div className="grid gap-7 md:grid-cols-2 md:gap-5">
          <div>
            <p className="mb-7 text-[9px] sm:text-[16px] leading-[1.65] text-white/90">
              From Virtual, Hybrid & Immersive Experiences to large-scale conferences and product launches, our virtual event planners craft human-centric, tech-driven journeys that connect, engage, and inspire globally.
            </p>
            <div className="space-y-4">
              {services
                .filter((_, i) => i === 0 || i === 2 || i === 4)
                .map((item) => (
                  <ServiceCard item={item} key={item.title} />
                ))}
            </div>
          </div>

          <div className="space-y-4">
            {services
              .filter((_, i) => i === 1 || i === 3 || i === 5 || i === 6)
              .map((item) => (
                <ServiceCard item={item} key={item.title} />
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#197bc1] to-[#69c2aa] px-6 py-20 text-center">
        <p className="text-[30px] font-semibold">The Wizcraft Promise</p>
        <p className="text-[11px] w-[1200px] m-auto sm:text-[22px]">
          For us, digital isn’t just about technology, it’s about creating human-centric experiences in a connected world. With our innovative Digital Event Solutions, we bring together creativity, reliability, and impact, ensuring your brand is always a step ahead in the digital era.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
