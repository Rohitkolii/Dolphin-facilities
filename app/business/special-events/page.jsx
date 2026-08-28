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
    title: "Opening and Closing Ceremonies",
    text: "Wizcraft creates opening and closing ceremonies that define and celebrate history through emotion, spectacle, and meaning. From concept to live broadcast, our expert planners craft powerful, poetic experiences that capture the spirit of the occasion and leave audiences spellbound.",
    featured: true,
  },
  {
    icon: FaBuilding,
    title: "Trade Shows",
    text: "At Wizcraft, we craft trade shows that ignite conversation, connection, and commerce. With expert planning, custom design, and immersive brand experiences, we transform empty halls into vibrant marketplaces where every handshake, interaction, and impression drives meaningful business impact.",
  },
  {
    icon: FaCommentDots,
    title: "Concerts & Festivals",
    text: "At Wizcraft, concerts and festivals are movements of music, energy, and magic. Through iconic performances, world artists, and passionate fans, we craft seamless events where stage, sound, and emotion unite-transforming every performance into a connection, a memory, a legend.",
  },
  {
    icon: FaHandshake,
    title: "Sporting Events",
    text: "At Wizcraft, we turn sport into celebration. As leading sports event organisers, we blend emotion, unity, and precision to create electrifying experiences, from league launches to award ceremonies, where every cheer, heartbeat, and victory becomes part of something truly unforgettable.",
  },
  {
    icon: FaChartLine,
    title: "Cultural & Tourism Events",
    text: "Wizcraft’s cultural and tourism events blend heritage with creativity, transforming traditions into immersive experiences. From folk performances to global showcases, we celebrate diversity and belonging, connecting people, places, and cultures through storytelling that unites emotion, pride, and modern artistic expression.",
  },
  {
    icon: FaChartLine,
    title: "Launch of New Initiatives",
    text: "Every idea deserves a grand reveal. At Wizcraft, we transform corporate, government, and social launches into cinematic moments, crafted with creativity, precision, and emotion, ensuring every initiative inspires audiences, sparks conversation, and leaves an unforgettable mark long after the spotlight fades.",
  },
  {
    icon: FaChartLine,
    title: "Social Celebrations & Weddings",
    text: "From milestone birthdays to destination weddings, Wizcraft brings heart, style, and soul to every celebration. Our expert wedding and event planners craft elegant, effortless experiences where every detail reflects love, luxury, and personality, transforming special occasions into timeless stories of joy and legacy.",
  },
  {
    icon: FaChartLine,
    title: "Son et Lumière Spectaculars",
    text: "Wizcraft’s Son et Lumière shows transform ancient forts into living storytellers, blending technology, history, and art through projection mapping, lighting, and sound. Each spectacle bridges past and present, turning heritage into an immersive experience that educates, entertains, and enchants audiences.",
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

export default function SpecialEventsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#2d2d2d] text-white">
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <Hero
        title="Special Event Management Company"
        desc="At Wizcraft Entertainment Agency, we transform ideas into extraordinary experiences that inspire and unite."
      />

      {/* Services */}
      <section className="mx-auto container-x px-6 py-12 sm:px-0 md:py-16">
        <div className="grid gap-7 md:grid-cols-2 md:gap-5">
          <div>
            <p className="mb-7 text-[9px] sm:text-[16px] leading-[1.65] text-white/90">
              With over 30 years of expertise in special event management, we
              craft world-class celebrations, from grand openings to concerts
              and royal weddings, where every story finds its magical
              stage.{" "}
            </p>
            <div className="space-y-4">
              {services
                .filter((_, i) => i === 0 || i === 2 || i === 4 || i === 6)
                .map((item) => (
                  <ServiceCard item={item} key={item.title} />
                ))}
            </div>
          </div>

          <div className="space-y-4">
            {services
              .filter((_, i) => i === 1 || i === 3 || i === 5 || i === 7)
              .map((item) => (
                <ServiceCard item={item} key={item.title} />
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#197bc1] to-[#69c2aa] px-6 py-20 text-center">
        <p className="text-[11px] w-[1200px] m-auto sm:text-[22px]">
          Are you ready to push your brand from visibility to memorability?{" "}
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
