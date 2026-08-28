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

export default function BrandActivationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#2d2d2d] text-white">
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <Hero
        title="Brand Activation Agency in India"
        desc="At Wizcraft, we go beyond designing events, we craft experiential brand activations that bring your brand to life.
            As a leading brand activation agency in India and Dubai, we help businesses connect with audiences through experiences
            that inspire loyalty, spark conversations, and deliver measurable outcomes."
      />

      {/* Services */}
      <section className="mx-auto container-x px-6 py-12 sm:px-0 md:py-16">
        <div className="grid gap-7 md:grid-cols-2 md:gap-5">
          <div>
            <p className="mb-7 text-[9px] sm:text-[16px] leading-[1.65] text-white/90">
              We redefine engagement with a wide portfolio of brand activation
              marketing solutions, from experiential campaigns to digital
              activations all designed to amplify visibility and maximize ROI.
            </p>
            <div className="space-y-4">
              {services
                .filter((_, i) => i === 0 || i === 2)
                .map((item) => (
                  <ServiceCard item={item} key={item.title} />
                ))}
            </div>
          </div>

          <div className="space-y-4">
            {services
              .filter((_, i) => i === 1 || i === 3 || i === 4)
              .map((item) => (
                <ServiceCard item={item} key={item.title} />
              ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="mx-6 border-4 border-[#2188c3] px-6 py-10 sm:mx-auto container-x sm:px-12 md:py-15">
        <p className="mb-5 bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-5xl font-semibold uppercase text-transparent">
          Why Choose Us?
        </p>

        <p className="max-w-[790px] text-[9px] sm:text-[16px] leading-[1.6] text-white/90">
          We have 30+ years of experience as a global brand activation agency,
          trusted by 600+ leading brands with path-breaking campaigns.
        </p>

        <div className="mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {advantages?.slice(0, 2)?.map(([title, text, Icon], i) => (
            <div key={title} className={i === 4 ? "sm:max-w-[340px]" : ""}>
              <div className="flex items-center gap-3">
                <div className="grid h-20 w-20 shrink-0 place-items-center bg-gradient-to-br from-[#1886c9] to-[#66c0ad]">
                  <Icon size={19} />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#159fe8]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-[1.5] text-white/90">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <img
            src="/home/clr4.jpg"
            alt="AZIZI brand activation"
            className="my-7 h-[200px] w-full object-cover col-span-2"
          />

          {advantages?.slice(2, 5)?.map(([title, text, Icon], i) => (
            <div key={title} className={i === 4 ? "sm:max-w-[340px]" : ""}>
              <div className="flex items-center gap-3">
                <div className="grid h-20 w-20 shrink-0 place-items-center bg-gradient-to-br from-[#1886c9] to-[#66c0ad]">
                  <Icon size={19} />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#159fe8]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-[1.5] text-white/90">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="mt-10 bg-gradient-to-r from-[#197cc1] via-[#258dc6] to-[#6bc3ab] px-6 py-12 sm:mt-16 md:py-14">
        <div className="mx-auto container-x">
          <p className="text-white uppercase text-center font-semibold text-5xl">
            Industries We Work With
          </p>
          <p className="mx-auto max-w-[780px] text-center text-[9px] sm:text-[16px] leading-[1.6] mt-5">
            Our experience extends across industries, demonstrating our
            adaptability as a full-service brand activation agency.
          </p>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {industries.map((item) => (
              <IndustryCard item={item} key={item[0]} />
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="mx-auto container-x px-6 py-14 sm:px-10 md:py-16">
        <p className="mb-5 bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-5xl font-semibold uppercase text-transparent">
          Our Presence
        </p>
        <p className="text-[9px] sm:text-[16px] text-white/90">
          We have operations in key markets, with truly integrated and scalable
          solutions.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {locations.map(([title, text]) => (
            <article
              key={title}
              className="bg-gradient-to-r from-[#2184c5] to-[#67bda9] p-8"
            >
              <h3 className="text-[20px] font-bold">{title}</h3>
              <p className="mt-2 text-[16px] leading-[1.55]">{text}</p>
            </article>
          ))}
        </div>

        {/* Process */}
        <div className="mx-auto mt-14 ">
          <p className="mb-5 bg-gradient-to-r from-[#1d7fc5] to-[#68c4b2] bg-clip-text text-center text-5xl font-semibold uppercase text-transparent">
            How We Work
          </p>
          <p className="text-center text-[9px] sm:text-[16px]">
            We work on creating an unparalleled experience for your brand
            engagement with a structured flow
          </p>

          <div className="relative">
            <div className="mt-5 relative z-20 flex flex-wrap items-center justify-center gap-5">
              {["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"].map(
                (step, i) => (
                  <div
                    key={step}
                    className={`min-w-[55px] px-10 py-4 text-center text-[12px] font-semibold ${
                      i === 0
                        ? "bg-gradient-to-r from-[#2184c5] to-[#68bda9]"
                        : "bg-[#8a8a8a]"
                    }`}
                  >
                    {step}
                  </div>
                ),
              )}
            </div>

            <div className="relative z-10 -mt-6 border border-[#2184c5] px-15 pt-20 py-10 text-[16px] leading-[1.5]">
              First we uncover your brand narrative, identify your audience, and
              define your goals with precision.
            </div>
          </div>
        </div>

        <div className="mx-auto mt-15 max-w-[900px] text-center text-[10px] leading-[1.8] sm:text-[18px] font-medium">
          <p>
            Join forces with Wizcraft, the preferred brand activation agency in
            Dubai and trusted brand activation company in Mumbai, Gurgaon,
            Hyderabad, Bangalore and Chennai.
          </p>
          <p>
            Let&apos;s build experiences that inspire people, spark
            conversations, and create enduring brand love.
          </p>
          <p>
            Get in touch with us today to discover our brand activation services
            in{" "}
            <span className="text-[#68c4b2]">India, Dubai, and worldwide.</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#197bc1] to-[#69c2aa] px-6 py-20 text-center">
        <p className="text-[11px] sm:text-[20px]">
          Are you ready to push your brand from visibility to memorability?
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
