"use client";

import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section
      className="
        w-full
        bg-[#303030]
        py-10
        sm:py-12
        md:py-14
        px-4
        sm:px-6
        md:px-10
        lg:px-16
        overflow-hidden
      "
    >
      <div className="max-w-[1140px] mx-auto">

        {/* =====================================================
            SECTION 1 — INTRO
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            grid-cols-1
            md:grid-cols-[minmax(300px,430px)_1fr]
            gap-7
            md:gap-8
            items-center
            mb-8
          "
        >

          {/* =================================================
              IMAGES
          ================================================= */}

          <div
            className="
              flex
              gap-3
              sm:gap-4
              items-end
              justify-center
              w-full
            "
          >

            <motion.img
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              src="/about/image.png"
              alt="Wizcraft Event"
              className="
                w-1/2
                h-[230px]
                sm:h-[270px]
                md:h-[315px]

                object-cover

                border
                border-[#2b9bc7]

                shrink-0
              "
            />

            <motion.img
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              src="/about/image.png"
              alt="National Film Awards"
              className="
                w-1/2
                h-[190px]
                sm:h-[220px]
                md:h-[255px]

                object-cover

                border
                border-[#2b9bc7]

                shrink-0
              "
            />

          </div>


          {/* =================================================
              TEXT
          ================================================= */}

          <div
            className="
              text-white
              text-[10px]
              sm:text-[11px]
              leading-[1.6]
              font-medium
              text-justify
            "
          >

            <p className="mb-4">
              For over three decades, Wizcraft has been at the forefront of
              creativity, innovation, and excellence in live events and brand
              storytelling. Recognized as a leading event management company
              in India, Wizcraft Event Management Company has consistently
              set benchmarks by converting bold ideas into unforgettable
              experiences. From its very beginning, the goal was to transform
              communication into emotions and memories. Today, Wizcraft
              Entertainment Agency Pvt. Ltd. is celebrated as one of the most
              admired names in the industry.
            </p>

            <p>
              As a true experiential marketing agency, Wizcraft seamlessly
              integrates strategy, creativity, and cutting-edge technology to
              deliver impactful solutions. By capturing the essence of brand
              stories, it translates them into experiences that engage
              audiences both emotionally and memorably.
            </p>

          </div>

        </motion.div>


        {/* =====================================================
            CONNECTOR
        ===================================================== */}

        <Connector />


        {/* =====================================================
            SECTION 2 — PRESENCE & REACH
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <StoryCard
            title="Presence & Reach"
            image="/about/image.png"
            imageAlt="Wizcraft Office"
            imageSide="right"
          >
            <p>
              Headquartered in Mumbai, Wizcraft operates across India and the
              UAE, with offices in Delhi, Bangalore, Hyderabad, and Chennai.
              Our global partner network ensures seamless delivery anywhere in
              the world.
            </p>

            <p>
              As a leading{" "}
              <span className="text-[#39a6d0]">
                Event Management Company in Mumbai
              </span>
              , it extends its operations through offices in Delhi, Bangalore,
              Hyderabad, and Chennai, while also leveraging international
              liaison offices and a strong global partner network. Whether
              brands are looking for an Event Agency in Gurgaon, Hyderabad,
              Bangalore, and Chennai, or a trusted{" "}
              <span className="text-[#39a6d0]">
                Event Management Company in India & UAE
              </span>
              , Wizcraft consistently offers unmatched scale, creativity, and
              precision. With the trust of 600+ global brands, the name
              Wizcraft has become synonymous with innovation and dependability.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 3 — PIONEER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <StoryCard
            title="Pioneer in Experiential Marketing"
            image="/about/image.png"
            imageAlt="Experiential Marketing Event"
            imageSide="left"
          >
            <p>
              As one of the most respected experiential marketing companies,
              Wizcraft has redefined how brands engage with audiences. From
              grand live events and exhibitions to digital-first launches,
              Wizcraft fuses creativity with flawless delivery.
            </p>

            <p>
              Iconic milestones include the Michael Jackson India tour in
              1996, the BMW Experience Tour, and large automotive expos for
              Tata Motors and Toyota. Our leading events include
              influencer-driven campaigns for Hyundai, the Amazon Great Indian
              Festival and the Renault Kiger Global Reveal.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 4 — CORPORATE EVENTS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <StoryCard
            title="Corporate Events & Business Solutions"
            image="/about/image.png"
            imageAlt="Corporate Event"
            imageSide="right"
          >
            <p>
              At its foundation, Wizcraft has always been a trusted{" "}
              <span className="text-[#39a6d0]">
                corporate event management company
              </span>
              , working with Microsoft, Google, Cipla, Lenovo, Swiggy, and
              other global brands to create meaningful experiences.
            </p>

            <p>
              With deep expertise in corporate event management, Wizcraft
              knows that events go beyond just logistics. They are about
              marketing brands, shaping cultures, and celebrating growth. As
              an experienced corporate event organizer, the company curates
              everything from leadership summits to business gatherings with
              clarity and precision.
            </p>

            <p>
              For many clients, Wizcraft is not only an event organizing
              company but also a long-term strategic growth partner.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 5 — BRAND ACTIVATIONS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <StoryCard
            title="Brand Activations & Live Experiences"
            image="/about/image.png"
            imageAlt="Brand Activation"
            imageSide="left"
          >
            <p>
              Wizcraft creates immersive brand activations that connect
              businesses with their audiences through powerful live
              experiences. Every activation is designed to create engagement,
              visibility and lasting brand recall.
            </p>

            <p>
              From large-scale public experiences to intimate premium
              activations, the team combines strategy, creativity and
              technology to deliver memorable campaigns.
            </p>
          </StoryCard>
        </motion.div>


        <Connector />


        {/* =====================================================
            SECTION 6 — EXHIBITIONS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <StoryCard
            title="Exhibitions & Experiential Spaces"
            image="/about/image.png"
            imageAlt="Exhibition"
            imageSide="right"
          >
            <p>
              Wizcraft delivers complete exhibition and experiential
              solutions, from concept and design to production and execution.
              Its approach combines creative storytelling with functional
              spaces that help brands communicate effectively.
            </p>

            <p>
              Every exhibition is crafted to attract audiences, communicate
              the brand story and create meaningful interactions.
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
        max-w-[810px]

        min-h-0
        md:min-h-[270px]

        border
        border-[#2999c7]

        bg-[#303030]

        ${isRight ? "mr-auto" : "ml-auto"}

        flex
        flex-col
        md:block
      `}
    >

      {/* =====================================================
          MOBILE IMAGE
      ===================================================== */}

      <div
        className="
          block
          md:hidden

          w-full
          px-4
          pt-4
        "
      >
        <motion.img
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          src={image}
          alt={imageAlt}
          className="
            w-full
            h-[190px]
            sm:h-[230px]

            object-cover

            border
            border-[#299bc9]
          "
        />
      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className={`
          min-h-0
          md:min-h-[270px]

          flex
          items-center

          px-4
          sm:px-6
          py-6
          md:py-8

          ${
            isRight
              ? "md:pr-[215px] md:pl-7"
              : "md:pl-[215px] md:pr-7"
          }
        `}
      >

        <div className="w-full">

          {/* TITLE */}

          <h3
            className="
              text-[#299bc9]

              font-bold
              uppercase
              tracking-wide

              text-[14px]
              sm:text-[15px]
              md:text-[16px]

              leading-tight

              mb-3
            "
          >
            {title}
          </h3>


          {/* TEXT */}

          <div
            className="
              text-white

              text-[10px]
              sm:text-[11px]

              leading-[1.6]

              font-medium

              text-justify

              space-y-3
            "
          >
            {children}
          </div>

        </div>

      </div>


      {/* =====================================================
          DESKTOP OVERLAPPING IMAGE
      ===================================================== */}

      <motion.img
        initial={{
          opacity: 0,
          x: isRight ? 70 : -70,
          scale: 0.94,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        src={image}
        alt={imageAlt}
        className={`
          hidden
          md:block

          absolute
          top-1/2
          -translate-y-1/2

          w-[205px]
          lg:w-[235px]

          h-[210px]
          lg:h-[238px]

          object-cover

          border
          border-[#299bc9]

          z-10

          ${
            isRight
              ? "right-[-95px] lg:right-[-130px]"
              : "left-[-95px] lg:left-[-130px]"
          }
        `}
      />

    </div>
  );
}


/* ============================================================
   CONNECTOR
============================================================ */

function Connector() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scaleY: 0,
      }}
      whileInView={{
        opacity: 1,
        scaleY: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="
        flex
        justify-center

        h-[25px]
        sm:h-[30px]

        origin-top
      "
    >
      <div className="w-px h-full bg-[#299bc9]" />
    </motion.div>
  );
}