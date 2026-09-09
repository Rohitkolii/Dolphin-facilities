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
              Established in 2019, Dolphin Facilities has evolved into a
              dynamic, multi-service organization delivering innovative
              marketing, branding, promotional, event, digital and execution
              solutions across Madhya Pradesh and throughout India.
            </p>

            <p>
              What sets us apart is our ability to bring diverse capabilities
              together under one roof. From events, advertising and outdoor
              promotions to digital solutions, customized products and
              end-to-end project execution, we eliminate the need for clients
              to coordinate with multiple vendors.
            </p>
          </div>

        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 2 — PRESENCE & REACH
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
            title="Trusted by Government & Corporate Clients"
            image="/images/DSC_1465.JPG"
            imageAlt="Dolphin Facilities Client Assignment"
            imageSide="right"
          >
            <p>
              Trusted by{" "}
              <span className="text-[#39a6d0]">
                government organizations and corporate clients
              </span>{" "}
              alike, Dolphin Facilities combines strategic thinking,
              creativity and quality with dependable on-ground execution.
            </p>

            <p>
              We understand every requirement carefully, develop the right
              solution and manage each assignment with professionalism,
              transparency and attention to detail.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 3 — PIONEER
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
            title="Complete Ownership, Complete Solutions"
            image="/about/BVN.jpeg"
            imageAlt="Dolphin Facilities Execution"
            imageSide="left"
          >
            <p>
              At Dolphin Facilities, we do more than provide services—we take
              complete ownership of our clients&apos; requirements and
              transform ideas into impactful results.
            </p>

            <p className="text-[#39a6d0] font-semibold">
              One Client. One Requirement. One Trusted Partner. One Complete
              Solution.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 4 — CORPORATE EVENTS
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
            title="Events & Experiences"
            image="/images/DSC_1465.JPG"
            imageAlt="Dolphin Facilities Corporate Event"
            imageSide="right"
          >
            <p>
              Creating experiences. Delivering impact. From product launches
              and corporate celebrations to government events and VIP
              functions, we manage every detail—from concept and production
              to flawless{" "}
              <span className="text-[#39a6d0]">on-ground execution</span>.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 5 — BRAND ACTIVATIONS
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
            title="Exhibitions & Brand Pavilions"
            image="/about/image.png"
            imageAlt="Exhibition Stall"
            imageSide="left"
          >
            <p>
              Spaces that bring brands to life. Creative exhibition stalls,
              product display zones and branded environments—designed,
              fabricated and executed to attract attention and create
              meaningful engagement.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 6 — EXHIBITIONS
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
            title="Government & Institutional Events"
            image="/about/image.png"
            imageAlt="Government Event Execution"
            imageSide="right"
          >
            <p>
              Professional execution for high-responsibility events.
              End-to-end event infrastructure, venue branding, stage
              production, logistics, protocol support and on-ground
              coordination for{" "}
              <span className="text-[#39a6d0]">
                government and institutional assignments
              </span>
              .
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