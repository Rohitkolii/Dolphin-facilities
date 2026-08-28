import Footer from "@/Components/common/Footer";
import Hero from "@/Components/common/Hero";
import Navbar from "@/Components/common/Navbar";
import {
  FaBuilding,
  FaHandshake,
  FaCommentDots,
  FaChartLine,
  FaAward,
  FaMapMarkerAlt,
  FaGlobe,
  FaMobileAlt,
  FaShoppingBag,
  FaCrown,
  FaHeartbeat,
  FaIndustry,
  FaBriefcase,
} from "react-icons/fa";

const services = [
  {
    icon: FaAward,
    title: "Experiential Brand Activations",
    text: "We are experts at crafting and delivering powerful brand activations that transport audiences into your brand world. From interactive installations to live demonstrations and pop ups, we craft experiences that people recall and share.",
    featured: true,
  },
  {
    icon: FaBuilding,
    title: "Event Management Services in Dubai and India",
    text: "Our area of expertise is end-to-end event management services in Dubai and India with immersive concepts, perfect logistics, and smooth execution. For marquee exhibitions and conferences, we deliver professionalism and creativity at every step of your event.",
  },
  {
    icon: FaCommentDots,
    title: "Customer Engagement Campaigns",
    text: "Engagement is at the center of everything we do. Our customer engagement campaigns can be designed for social advertising, to create authentic connections, influencer-led events, or digital-physical event hybrids.",
  },
  {
    icon: FaHandshake,
    title: "Corporate & Retail Activations",
    text: "As a trusted brand activation agency, we empower corporates and retail giants through impactful launches, immersive in-store experiences, and meaningful consumer touchpoints.",
  },
  {
    icon: FaChartLine,
    title: "Digital & Hybrid Brand Experiences",
    text: "Hybrid brand activations are the future. We craft digital experiences that enhance live events, broaden audience reach, and keep your brand top of mind in a rapidly changing world.",
  },
];

const advantages = [
  [
    "Proven Expertise",
    "With years of experience as a veteran brand activation agency, we've worked with brands around the world and created award-winning activations.",
    FaAward,
  ],
  [
    "Local Advantage",
    "Searching for a Brand Activation Agency in Mumbai, Gurgaon, Hyderabad, Bangalore and Chennai? We have people on the ground to localize your campaigns and make them culturally relevant.",
    FaMapMarkerAlt,
  ],
  [
    "Middle East Exposure",
    "As a premier brand activation agency in Dubai, we enable brands to connect with the Middle East's vibrant and diverse consumer base.",
    FaGlobe,
  ],
  [
    "Creative Brilliance",
    "Not many experiential marketing agencies can match our out of the box thinking with data driven strategies.",
    FaChartLine,
  ],
  [
    "Pan-India Reach",
    "From the metros to the emerging markets, our India Brand Activation Services have a presence in every nook and corner of the nation.",
    FaGlobe,
  ],
];

const industries = [
  ["FMCG", "Launches, sampling, retail promotions, and roadshows.", FaIndustry],
  [
    "Technology",
    "Product demonstrations, AR/VR showcases, and interactive digital experiences.",
    FaMobileAlt,
  ],
  [
    "Luxury & Lifestyle",
    "High-level experiential brand activations that bring luxury products to life.",
    FaCrown,
  ],
  [
    "Healthcare & Pharma",
    "Interactive education and awareness drives.",
    FaHeartbeat,
  ],
  [
    "Retail & E-commerce",
    "Conversion driven in-store customer engagement.",
    FaShoppingBag,
  ],
  [
    "Corporate",
    "B2B activations, conferences, and internal engagement initiatives.",
    FaBriefcase,
  ],
];

const locations = [
  [
    "Dubai",
    "As a top brand activation agency in Dubai, we create experiences that resonate with one of the world's most cosmopolitan audiences.",
  ],
  [
    "India",
    "Providing unparalleled Brand Activation Services in India, we reach metro cities and more through our rich network of local teams and consumer sentiments.",
  ],
  [
    "Metro Hubs",
    "Being a full service Brand Activation Company in Mumbai, Gurgaon, Hyderabad, Bangalore and Chennai, our people understand the capabilities to conduct flawless activations across different geographies at the same time.",
  ],
];

function SectionTitle({ children, light = false }) {
  return (
    <h2
      className={`text-center text-xl sm:text-2xl md:text-[28px] font-extrabold uppercase tracking-tight ${light ? "text-white" : "text-white"}`}
    >
      {children}
    </h2>
  );
}

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

function IndustryCard({ item }) {
  const [title, text, Icon] = item;
  return (
    <div className="border border-white/20 px-4 py-8 sm:px-8">
      <div className="flex items-center gap-4">
        <Icon size={30} strokeWidth={1.7} className="shrink-0 text-white" />
        <div>
          <h3 className="text-[12px] sm:text-[20px] font-bold text-white">
            {title}
          </h3>
          <p className="mt-1 text-[14px] leading-[1.45] text-white/90">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function NationBuildingEventsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#2d2d2d] text-white">
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <Hero
        title="Nation Building Event Management Services"
        desc="At Wizcraft, we think that events have the ability to inspire, unite, and effect change. With 30+ years of experience in managing large-scale events, we have collaborated with governments, institutions, and communities to co-create transformative platforms that resonate well beyond the stage."
      />


      {/* CTA */}
      <section className="bg-gradient-to-r from-[#197bc1] to-[#69c2aa] px-6 py-20 text-center">
        <p className="text-[11px] sm:text-[24px] w-[1300px] m-auto">
          With Wizcraft, nation-building events transcend gatherings; they become powerful platforms that drive participation, foster unity, and accelerate development.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
