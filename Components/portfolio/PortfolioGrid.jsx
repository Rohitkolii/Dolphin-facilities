"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "IBM India Software Labs",
    category: "Corporate Events",
    image: "/portfolio/image1.png",
  },
  {
    title: "Sholay 50",
    category: "Live Events",
    image: "/portfolio/image2.png",
  },
  {
    title: "Fast and Fabulous",
    category: "Brand Activation",
    image: "/portfolio/image3.png",
  },
  {
    title: "India Town Hall",
    category: "Corporate Events",
    image: "/portfolio/image4.png",
  },
  {
    title: "Amazon Music",
    category: "Brand Experience",
    image: "/portfolio/image5.png",
  },
  {
    title: "Islands 2",
    category: "Experiential",
    image: "/portfolio/image6.png",
  },
  {
    title: "Brand Experience",
    category: "Brand Activation",
    image: "/portfolio/image7.png",
  },
  {
    title: "Luxury Experience",
    category: "Experiential",
    image: "/portfolio/image8.png",
  },
  {
    title: "Live Entertainment",
    category: "Live Events",
    image: "/portfolio/image9.png",
  },
];

export default function PortfolioGrid() {
  const [showMore, setShowMore] = useState(false);

  const firstRow = projects.slice(0, 3);
  const secondRow = projects.slice(3, 6);
  const extraProjects = projects.slice(6);

  return (
    <section
      className="
        w-full
        bg-[#303030]
        py-10
        md:py-12
        px-4
        sm:px-6
        md:px-8
        lg:px-[7%]
        overflow-hidden
      "
    >
      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="w-full mx-auto">

        {/* =====================================================
            FIRST ROW
        ===================================================== */}

        <PortfolioRow
          projects={firstRow}
          rowIndex={0}
        />

        {/* =====================================================
            SECOND ROW
        ===================================================== */}

        <div
          className="
            mt-[4px]
            sm:mt-[10px]
            md:mt-[18px]
            lg:mt-[30px]
          "
        >
          <PortfolioRow
            projects={secondRow}
            rowIndex={1}
          />
        </div>

        {/* =====================================================
            EXTRA PROJECTS
        ===================================================== */}

        {showMore && extraProjects.length > 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-[4px]
              sm:mt-[10px]
              md:mt-[18px]
              lg:mt-[30px]
            "
          >
            <PortfolioRow
              projects={extraProjects}
              rowIndex={2}
            />
          </motion.div>
        )}

        {/* =====================================================
            SHOW MORE / SHOW LESS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            justify-center
            mt-5
            md:mt-6
            lg:mt-7
          "
        >
          <motion.button
            type="button"
            onClick={() => setShowMore(!showMore)}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              px-5
              py-2.5
              min-w-[90px]

              bg-gradient-to-r
              from-[#79cba8]
              to-[#329bd0]

              border
              border-[#73c9b9]

              text-white
              text-[10px]
              font-bold

              cursor-pointer

              transition-all
              duration-300

              hover:brightness-110
            "
          >
            {showMore ? "Show Less" : "Show More"}
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}


/* ============================================================
   PORTFOLIO ROW
============================================================ */

function PortfolioRow({ projects, rowIndex }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: rowIndex * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex
        w-full

        /* MOBILE */
        h-[180px]

        /* SMALL */
        sm:h-[220px]

        /* TABLET */
        md:h-[300px]

        /* DESKTOP */
        lg:h-[400px]

        gap-[4px]
        sm:gap-[8px]
        md:gap-[16px]
        lg:gap-[30px]
      "
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {projects.map((project, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            key={project.title}
            onMouseEnter={() => setHoveredIndex(index)}

            /* =================================================
               HOVER WIDTH
            ================================================= */

            animate={{
              flexGrow: isHovered ? 3.3 : 1,
            }}

            transition={{
              flexGrow: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
            }}

            /* =================================================
               SCROLL ANIMATION
            ================================================= */

            initial={{
              opacity: 0,
              y: 50,
              scale: 0.97,
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

            className="
              group
              relative
              min-w-0
              overflow-hidden

              border
              border-[#2999c7]

              bg-[#222]

              cursor-pointer
              select-none
            "

            style={{
              flexBasis: 0,
            }}
          >

            {/* =================================================
                IMAGE
            ================================================= */}

            <img
              src={project.image}
              alt={project.title}
              draggable="false"
              className="
                absolute
                inset-0

                w-full
                h-full

                object-cover

                pointer-events-none

                transition-transform
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]

                group-hover:scale-[1.035]
              "
            />

            {/* =================================================
                DARK OVERLAY
            ================================================= */}

            <div
              className="
                absolute
                inset-0

                bg-black/0
                group-hover:bg-black/15

                transition-all
                duration-500

                pointer-events-none
              "
            />

            {/* =================================================
                BOTTOM GRADIENT
            ================================================= */}

            <div
              className="
                absolute
                left-0
                right-0
                bottom-0

                h-[100px]

                bg-gradient-to-t
                from-black/90
                via-black/50
                to-transparent

                opacity-0
                group-hover:opacity-100

                transition-opacity
                duration-500

                pointer-events-none
              "
            />

            {/* =================================================
                HOVER CONTENT
            ================================================= */}

            <div
              className="
                absolute
                left-0
                bottom-0
                z-10

                w-full

                px-4
                py-4

                opacity-0
                translate-y-4

                group-hover:opacity-100
                group-hover:translate-y-0

                transition-all
                duration-500

                pointer-events-none
              "
            >

              {/* CATEGORY */}

              <p
                className="
                  text-[#4db4d5]

                  text-[8px]
                  sm:text-[9px]
                  md:text-[10px]
                  lg:text-[11px]

                  uppercase
                  tracking-wide

                  font-bold

                  mb-1
                "
              >
                {project.category}
              </p>

              {/* TITLE */}

              <h3
                className="
                  text-white

                  text-[11px]
                  sm:text-[13px]
                  md:text-[17px]
                  lg:text-[20px]

                  font-bold
                  leading-tight
                "
              >
                {project.title}
              </h3>

            </div>

          </motion.div>
        );
      })}
    </motion.div>
  );
}