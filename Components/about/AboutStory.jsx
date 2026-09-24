"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { display } from "./aboutFonts";

/* ============================================================
   STORY SECTIONS (text and images are unchanged — just moved
   into a list so every card shares the same markup)
============================================================ */

const sections = [
  {
    title: "From Creating Events to Delivering Complete Solutions",
    image: "/about/BVN.jpeg",
    imageAlt: "Dolphin Facilities Project",
    imageSide: "left",
    paragraphs: [
      "Every assignment taught us that an event rarely stands alone. A conference needs branding and delegate management. A product launch needs content, advertising and consumer engagement. A public campaign needs mobile units, local coordination and measurable reporting. A trade fair needs concept, fabrication, logistics and lead-focused execution.",
      "Dolphin responded by building connected capabilities around the complete requirement. This evolution allows us to support a project from concept and planning through production, deployment and closure. Our purpose remains simple: make execution easier for the client and more meaningful for the audience.",
    ],
  },
  {
    title: "Rooted in Madhya Pradesh, Ready Across India",
    image: "/images/DSC_1502.jpg",
    imageAlt: "Dolphin Facilities Office",
    imageSide: "right",
    paragraphs: [
      "Dolphin has a strong operational base in Madhya Pradesh and the ability to coordinate assignments across India through project teams, specialist partners and location-specific resources. Our approach combines central planning with local execution, helping maintain brand consistency while adapting to venue rules, audiences, languages and ground realities.",
      "Whether the requirement is a single event, a multi-location activation or a travelling campaign, every project is planned with defined responsibilities, timelines, approvals and reporting.",
    ],
  },
  {
    title: "Experiences Planned With Purpose",
    image: "/images/DSC_1703.jpg",
    imageAlt: "Event Management",
    imageSide: "left",
    paragraphs: [
      "Dolphin plans and coordinates corporate events, conferences, product launches, dealer meets, award functions, institutional programmes, college convocations, cultural programmes and government events. We begin by understanding the objective, audience, budget and desired outcome.",
      "The team can coordinate venue assessment, concept, stage and production, audio-visual requirements, branding, guest management, hospitality, artists, permissions, technical rehearsals and event-day operations. A detailed run of show and a clear control structure help every department work as one team.",
    ],
  },
  {
    title: "Spaces That Turn Attention Into Opportunity",
    image: "/about/event-front-img.png",
    imageAlt: "Exhibitions and Trade Fairs",
    imageSide: "right",
    paragraphs: [
      "For exhibitions and trade fairs, Dolphin approaches the stall or pavilion as a live brand environment. The process may include requirement analysis, concept and design coordination, fabrication supervision, product display, electrical and audio-visual planning, venue liaison, logistics, staffing, hospitality and dismantling.",
      "Visitor movement, message visibility, demonstration requirements and lead capture are considered at the planning stage so the space supports real conversations and business outcomes, not appearance alone.",
    ],
  },
  {
    title: "Brands Are Remembered Through Participation",
    image: "/about/cm-mp.png",
    imageAlt: "Brand Activation",
    imageSide: "left",
    paragraphs: [
      "Dolphin designs on-ground activations that help audiences experience a brand directly. Depending on the campaign, this can include Van Campaigns, Brand Endorsements, sampling, retail engagement, institutional outreach, promoter deployment and consumer response capture.",
      "The campaign is developed around the target audience, location, core message and desired action. Promoter training, permissions, stock control, field supervision and daily reporting help maintain quality across locations.",
    ],
  },
  {
    title: "Visibility Where Audiences Live, Work and Travel",
    image: "/images/DSC_1465.jpg",
    imageAlt: "Advertising and Outdoor Campaign",
    imageSide: "right",
    paragraphs: [
      "Our advertising and outdoor support can bring together campaign planning, creative coordination, production and deployment across relevant formats. These may include hoardings, wall wraps, mobile van campaigns, roadshows, local market visibility and other on-ground media. Television and video advertising assignments can be coordinated through the required creative, production and media specialists under an agreed scope.",
      "Dolphin pays attention to location relevance, artwork consistency, permissions, production quality, display condition, route planning and field evidence. This gives the client better control over both visibility and execution.",
    ],
  },
  {
    title: "Connecting Physical Experiences With Digital Reach",
    image: "/images/EICHER.jpeg",
    imageAlt: "Digital and Creative Solutions",
    imageSide: "left",
    paragraphs: [
      "Dolphin supports brands with digital campaigns, social media solutions, creative content and communication assets that complement physical events and promotions. Digital support can extend an event before it begins, engage audiences while it is live and carry the story forward after it ends.",
      "The scope may include campaign concepts, content planning, graphics, short videos, event communication, digital promotion and coordinated online engagement. Each deliverable is aligned with the brand guidelines, intended audience and campaign objective.",
    ],
  },
  {
    title: "Execution With Structure, Responsibility and Respect",
    image: "/images/UVN.jpeg",
    imageAlt: "Government and Institutional Assignments",
    imageSide: "right",
    paragraphs: [
      "Government and institutional programmes require careful documentation, protocol, public communication, safety and coordination among several authorities. Dolphin approaches such assignments with defined workflows, approval checkpoints and on-ground responsibility.",
      "The team can support public events, conferences, convocations, awareness campaigns, exhibitions, outreach programmes and related branding or material requirements. Dignitary movement, venue protocols, audience flow, accessibility, contingency planning and closure documentation are incorporated according to the assignment.",
    ],
  },
  {
    title: "The Details That Complete the Experience",
    image: "/about/BVN.jpeg",
    imageAlt: "Customized Products and Material Support",
    imageSide: "left",
    paragraphs: [
      "Many projects require more than event production. Dolphin can coordinate customized merchandise, branded materials, event collateral, display elements, participant kits and other project-specific supplies as part of an integrated assignment.",
      "Requirements are translated into clear specifications covering material, dimensions, branding, quantity, sample approval, packaging and delivery. This helps keep the physical output consistent with the event or campaign identity.",
    ],
  },
];

export default function AboutStory() {
  return (
    <section className="w-full overflow-hidden bg-[#f8f4ec] px-5 py-12 md:px-8 md:py-16 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        {/* =====================================================
            SECTION 1 — INTRO
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 grid items-center gap-7 md:grid-cols-[500px_1fr] md:gap-10"
        >
          {/* IMAGES */}
          <div className="flex items-end gap-4">
            <div className="relative h-[260px] w-1/2 border border-[#c9a768] shadow-[0_18px_40px_-20px_rgba(19,37,59,0.35)] sm:h-[310px] md:h-[380px]">
              <Image
                src="/images/EICHER.jpeg"
                alt="Dolphin Facilities Event"
                fill
                sizes="(max-width: 768px) 45vw, 250px"
                className="object-cover"
                quality={70}
                priority
              />
            </div>

            <div className="relative h-[215px] w-1/2 border border-[#c9a768] shadow-[0_18px_40px_-20px_rgba(19,37,59,0.35)] sm:h-[260px] md:h-[310px]">
              <Image
                src="/images/UVN.jpeg"
                alt="National Film Awards"
                fill
                sizes="(max-width: 768px) 45vw, 250px"
                className="object-cover"
                quality={70}
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="text-justify text-[13px] leading-[1.8] text-[#4a4438] sm:text-[14px] md:text-[16px]">
            <p className="mb-5">
              Established in 2019, Dolphin began with a focused purpose: to
              create events that bring people, organisations and ideas
              together. As client requirements expanded, so did our
              capabilities. What began with event planning evolved into a
              broader execution platform covering brand activations,
              advertising, outdoor campaigns, exhibitions, digital
              communication, customized products, material supply and field
              operations.
            </p>

            <p>
              Today, Dolphin Facilities works as a complete solution partner
              for corporate, institutional and government requirements.
              Instead of coordinating several disconnected vendors, clients
              can work with one team that understands the brief, aligns the
              resources and takes responsibility for execution.
            </p>
          </div>
        </motion.div>

        <Connector />

        {/* =====================================================
            SECTIONS 2–10 — STORY CARDS
        ===================================================== */}

        {sections.map((s) => (
          <div key={s.title}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <StoryCard
                title={s.title}
                image={s.image}
                imageAlt={s.imageAlt}
                imageSide={s.imageSide}
              >
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </StoryCard>
            </motion.div>

            <Connector />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   STORY CARD
============================================================ */

function StoryCard({ title, image, imageAlt, imageSide = "right", children }) {
  const isRight = imageSide === "right";

  return (
    <div
      className={`
        relative
        flex
        min-h-[280px]
        w-full
        max-w-[1000px]
        flex-col
        border
        border-[#13253b]/10
        bg-white
        shadow-[0_18px_40px_-28px_rgba(19,37,59,0.3)]
        transition-all
        duration-300
        hover:border-[#c9a768]
        md:block
        md:min-h-[330px]
        ${isRight ? "mr-auto" : "ml-auto"}
      `}
    >
      {/* CONTENT */}
      <div
        className={`
          flex
          min-h-[280px]
          items-center
          px-5
          py-7
          sm:px-7
          md:min-h-[330px]
          md:py-10
          ${isRight ? "md:pl-10 md:pr-[300px]" : "md:pl-[300px] md:pr-10"}
        `}
      >
        <div className="w-full">
          <h3
            style={display}
            className="mb-3 text-[19px] font-semibold leading-tight text-[#13253b] sm:text-[21px] md:text-[25px]"
          >
            {title}
          </h3>

          <div className="mb-5 h-px w-12 bg-[#c9a768]" />

          <div className="space-y-4 text-justify text-[13px] leading-[1.8] text-[#4a4438] sm:text-[14px] md:text-[15px]">
            {children}
          </div>
        </div>
      </div>

      {/* OVERLAPPING IMAGE */}
      <div
        className={`
          absolute
          top-1/2
          z-10
          hidden
          h-[275px]
          w-[270px]
          -translate-y-1/2
          border
          border-[#c9a768]
          shadow-[0_22px_45px_-20px_rgba(19,37,59,0.4)]
          md:block
          lg:h-[315px]
          lg:w-[320px]
          ${
            isRight
              ? "right-[-125px] lg:right-[-175px]"
              : "left-[-125px] lg:left-[-175px]"
          }
        `}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="320px"
          loading="lazy"
          quality={70}
          className="object-cover"
        />
      </div>
    </div>
  );
}

/* ============================================================
   CONNECTOR
============================================================ */

function Connector() {
  return (
    <div className="flex h-[40px] justify-center">
      <div className="h-full w-px bg-[#c9a768]/70" />
    </div>
  );
}
