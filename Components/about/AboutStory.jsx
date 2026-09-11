"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="w-full bg-[#303030] py-12 md:py-16 px-5 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">

        {/* =====================================================
            SECTION 1 — INTRO
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="grid md:grid-cols-[500px_1fr] gap-7 md:gap-10 items-center mb-10"
        >
          {/* IMAGES */}

          <div className="flex gap-4 items-end">

            <div
              className="
                relative
                w-1/2
                h-[260px]
                sm:h-[310px]
                md:h-[380px]
                border
                border-[#2b9bc7]
              "
            >
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

            <div
              className="
                relative
                w-1/2
                h-[215px]
                sm:h-[260px]
                md:h-[310px]
                border
                border-[#2b9bc7]
              "
            >
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

          <div
            className="
              text-white
              text-[12px]
              sm:text-[13px]
              md:text-[15px]
              leading-[1.75]
              font-medium
              text-justify
            "
          >
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
            SECTION 2 — OUR JOURNEY
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <StoryCard
            title="From Creating Events to Delivering Complete Solutions"
            image="/about/BVN.jpeg"
            imageAlt="Dolphin Facilities Project"
            imageSide="left"
          >
            <p>
              Every assignment taught us that an event rarely stands alone. A
              conference needs branding and delegate management. A product
              launch needs content, advertising and consumer engagement. A
              public campaign needs mobile units, local coordination and
              measurable reporting. A trade fair needs concept, fabrication,
              logistics and lead-focused execution.
            </p>

            <p>
              Dolphin responded by building connected capabilities around the
              complete requirement. This evolution allows us to support a
              project from concept and planning through production,
              deployment and closure. Our purpose remains simple: make
              execution easier for the client and more meaningful for the
              audience.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 3 — PRESENCE & REACH
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <StoryCard
            title="Rooted in Madhya Pradesh, Ready Across India"
            image="/images/DSC_1502.jpg"
            imageAlt="Dolphin Facilities Office"
            imageSide="right"
          >
            <p>
              Dolphin has a strong operational base in Madhya Pradesh and the
              ability to coordinate assignments across India through project
              teams, specialist partners and location-specific resources. Our
              approach combines central planning with local execution,
              helping maintain brand consistency while adapting to venue
              rules, audiences, languages and ground realities.
            </p>

            <p>
              Whether the requirement is a single event, a multi-location
              activation or a travelling campaign, every project is planned
              with defined responsibilities, timelines, approvals and
              reporting.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 4 — EVENT MANAGEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <StoryCard
            title="Experiences Planned With Purpose"
            image="/images/DSC_1703.jpg"
            imageAlt="Event Management"
            imageSide="left"
                 >
            <p>
              Dolphin plans and coordinates corporate events, conferences,
              product launches, dealer meets, award functions, institutional
              programmes, college convocations, cultural programmes and
              government events. We begin by understanding the objective,
              audience, budget and desired outcome.
            </p>

            <p>
              The team can coordinate venue assessment, concept, stage and
              production, audio-visual requirements, branding, guest
              management, hospitality, artists, permissions, technical
              rehearsals and event-day operations. A detailed run of show and
              a clear control structure help every department work as one
              team.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 5 — ADVERTISING & OUTDOOR CAMPAIGNS
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <StoryCard
            title="Visibility Where Audiences Live, Work and Travel"
            image="/images/DSC_1465.jpg"
            imageAlt="Advertising and Outdoor Campaign"
            imageSide="right"
          >
            <p>
              Our advertising and outdoor support can bring together campaign
              planning, creative coordination, production and deployment
              across relevant formats. These may include hoardings, wall
              wraps, mobile van campaigns, roadshows, local market visibility
              and other on-ground media. Television and video advertising
              assignments can be coordinated through the required creative,
              production and media specialists under an agreed scope.
            </p>

            <p>
              Dolphin pays attention to location relevance, artwork
              consistency, permissions, production quality, display
              condition, route planning and field evidence. This gives the
              client better control over both visibility and execution.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 6 — BRAND ACTIVATION & CONSUMER ENGAGEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <StoryCard
            title="Brands Are Remembered Through Participation"
            image="/about/cm-mp.png"
            imageAlt="Brand Activation"
            imageSide="left"
          >
            <p>
              Dolphin designs on-ground activations that help audiences
              experience a brand directly. Depending on the campaign, this
              can include Van Campaigns, Brand Endorsements, sampling, retail
              engagement, institutional outreach, promoter deployment and
              consumer response capture.
            </p>

            <p>
              The campaign is developed around the target audience, location,
              core message and desired action. Promoter training,
              permissions, stock control, field supervision and daily
              reporting help maintain quality across locations.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 7 — DIGITAL & CREATIVE SOLUTIONS
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <StoryCard
            title="Connecting Physical Experiences With Digital Reach"
            image="/images/EICHER.jpeg"
            imageAlt="Digital and Creative Solutions"
            imageSide="right"
          >
            <p>
              Dolphin supports brands with digital campaigns, social media
              solutions, creative content and communication assets that
              complement physical events and promotions. Digital support can
              extend an event before it begins, engage audiences while it is
              live and carry the story forward after it ends.
            </p>

            <p>
              The scope may include campaign concepts, content planning,
              graphics, short videos, event communication, digital promotion
              and coordinated online engagement. Each deliverable is aligned
              with the brand guidelines, intended audience and campaign
              objective.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 8 — GOVERNMENT & INSTITUTIONAL ASSIGNMENTS
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <StoryCard
            title="Execution With Structure, Responsibility and Respect"
            image="/images/UVN.jpeg"
            imageAlt="Government and Institutional Assignments"
            imageSide="left"
          >
            <p>
              Government and institutional programmes require careful
              documentation, protocol, public communication, safety and
              coordination among several authorities. Dolphin approaches such
              assignments with defined workflows, approval checkpoints and
              on-ground responsibility.
            </p>

            <p>
              The team can support public events, conferences, convocations,
              awareness campaigns, exhibitions, outreach programmes and
              related branding or material requirements. Dignitary movement,
              venue protocols, audience flow, accessibility, contingency
              planning and closure documentation are incorporated according
              to the assignment.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 9 — CUSTOMIZED PRODUCTS & MATERIAL SUPPORT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <StoryCard
            title="The Details That Complete the Experience"
            image="/about/BVN.jpeg"
            imageAlt="Customized Products and Material Support"
            imageSide="right"
          >
            <p>
              Many projects require more than event production. Dolphin can
              coordinate customized merchandise, branded materials, event
              collateral, display elements, participant kits and other
              project-specific supplies as part of an integrated assignment.
            </p>

            <p>
              Requirements are translated into clear specifications covering
              material, dimensions, branding, quantity, sample approval,
              packaging and delivery. This helps keep the physical output
              consistent with the event or campaign identity.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 10 — EXHIBITIONS & TRADE FAIRS
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <StoryCard
            title="Spaces That Turn Attention Into Opportunity"
            image="/about/event-front-img.png"
            imageAlt="Exhibitions and Trade Fairs"
            imageSide="left"
          >
            <p>
              For exhibitions and trade fairs, Dolphin approaches the stall or
              pavilion as a live brand environment. The process may include
              requirement analysis, concept and design coordination,
              fabrication supervision, product display, electrical and
              audio-visual planning, venue liaison, logistics, staffing,
              hospitality and dismantling.
            </p>

            <p>
              Visitor movement, message visibility, demonstration
              requirements and lead capture are considered at the planning
              stage so the space supports real conversations and business
              outcomes, not appearance alone.
            </p>
          </StoryCard>
        </motion.div>


  


      </div>
    </section>
  );
}


/* ============================================================
   STORY CARD
============================================================ */

function StoryCard({
  title,
  image,
  imageAlt,
  imageSide = "right",
  children,
}) {
  const isRight = imageSide === "right";

  return (
    <div
      className={`
        relative
        w-full
        max-w-[1000px]

        min-h-[280px]
        md:min-h-[330px]

        border
        border-[#2999c7]

        bg-[#303030]

        ${isRight ? "mr-auto" : "ml-auto"}

        flex
        flex-col
        md:block
      `}
    >

      {/* CONTENT */}

      <div
        className={`
          min-h-[280px]
          md:min-h-[330px]

          flex
          items-center

          px-5
          sm:px-7
          py-7
          md:py-10

          ${
            isRight
              ? "md:pr-[300px] md:pl-10"
              : "md:pl-[300px] md:pr-10"
          }
        `}
      >
        <div className="w-full">

          <h3
            className="
              text-[#299bc9]

              font-bold
              uppercase
              tracking-wide

              text-[17px]
              sm:text-[19px]
              md:text-[22px]

              leading-tight
              mb-5
            "
          >
            {title}
          </h3>

          <div
            className="
              text-white

              text-[12px]
              sm:text-[13px]
              md:text-[15px]

              leading-[1.75]

              font-medium

              text-justify

              space-y-4
            "
          >
            {children}
          </div>

        </div>
      </div>


      {/* OVERLAPPING IMAGE */}

      <div
        className={`
          hidden
          md:block

          absolute
          top-1/2
          -translate-y-1/2

          w-[270px]
          lg:w-[320px]

          h-[275px]
          lg:h-[315px]

          border
          border-[#299bc9]

          z-10

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
    <div className="flex justify-center h-[40px]">
      <div className="w-px h-full bg-[#299bc9]" />
    </div>
  );
}