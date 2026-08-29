"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "IBM India Software Labs",
    category: "Corporate Events",
    image: "/portfolio/image1.png",
    date: "Corporate Event",
    description:
      "A thoughtfully designed corporate event experience focused on collaboration, innovation and meaningful audience engagement.",
  },
  {
    title: "Sholay 50",
    category: "Live Events",
    image: "/portfolio/image2.png",
    date: "Standard Chartered Bank | 21 June 2025",
    description:
      "As Sholay celebrated 50 iconic years, the milestone was marked with India's first-ever Cinematic Symphony. A specially edited cinematic experience came alive with a powerful live orchestra and unforgettable performances.\n\nCurated for a premium audience, the event brought together storytelling, music and immersive live entertainment to create a truly memorable cinematic experience.",
  },
  {
    title: "Fast and Fabulous",
    category: "Brand Activation",
    image: "/portfolio/image3.png",
    date: "Brand Experience",
    description:
      "A high-energy brand activation designed to create excitement, engagement and memorable audience interactions.",
  },
  {
    title: "India Town Hall",
    category: "Corporate Events",
    image: "/portfolio/image4.png",
    date: "Corporate Event",
    description:
      "A large-scale corporate gathering designed to encourage meaningful conversations, collaboration and stronger connections.",
  },
  {
    title: "Amazon Music",
    category: "Brand Experience",
    image: "/portfolio/image5.png",
    date: "Brand Experience",
    description:
      "A vibrant entertainment and brand experience bringing together music, culture and audience engagement.",
  },
  {
    title: "Islands 2",
    category: "Experiential",
    image: "/portfolio/image6.png",
    date: "Experiential Event",
    description:
      "An immersive experiential project focused on creative storytelling and memorable audience participation.",
  },
  {
    title: "Brand Experience",
    category: "Brand Activation",
    image: "/portfolio/image7.png",
    date: "Brand Activation",
    description:
      "A strategic brand activation developed to build stronger connections between the brand and its audience.",
  },
  {
    title: "Luxury Experience",
    category: "Experiential",
    image: "/portfolio/image8.png",
    date: "Experiential Event",
    description:
      "A premium experience designed with detailed execution, elegant visuals and meaningful audience engagement.",
  },
  {
    title: "Live Entertainment",
    category: "Live Events",
    image: "/portfolio/image9.png",
    date: "Live Event",
    description:
      "A high-energy live entertainment experience combining production, creativity and seamless execution.",
  },
];

/* ============================================================
   PORTFOLIO GRID
============================================================ */

export default function PortfolioGrid() {
  const [showMore, setShowMore] = useState(false);

  // POPUP STATE
  const [selectedProject, setSelectedProject] = useState(null);

  const firstRow = projects.slice(0, 3);
  const secondRow = projects.slice(3, 6);
  const extraProjects = projects.slice(6);

  const selectedIndex = selectedProject
    ? projects.findIndex(
        (project) => project.title === selectedProject.title
      )
    : -1;

  const handleNext = () => {
    const nextIndex =
      selectedIndex === projects.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedProject(projects[nextIndex]);
  };

  const handlePrevious = () => {
    const previousIndex =
      selectedIndex === 0
        ? projects.length - 1
        : selectedIndex - 1;

    setSelectedProject(projects[previousIndex]);
  };

  return (
    <>
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
            onProjectClick={setSelectedProject}
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
              onProjectClick={setSelectedProject}
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
                onProjectClick={setSelectedProject}
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
                text-[15px]
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


      {/* =====================================================
          POPUP MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedProject && (
          <PortfolioPopup
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
      </AnimatePresence>
    </>
  );
}


/* ============================================================
   PORTFOLIO ROW
============================================================ */

function PortfolioRow({
  projects,
  rowIndex,
  onProjectClick,
}) {
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

        h-[180px]

        sm:h-[220px]

        md:h-[300px]

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

            /* CLICK → POPUP */
            onClick={() => onProjectClick(project)}

            /* =================================================
               HOVER WIDTH - SAME
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
               SCROLL ANIMATION - SAME
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


/* ============================================================
   PORTFOLIO POPUP
============================================================ */

function PortfolioPopup({
  project,
  onClose,
  onNext,
  onPrevious,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        bg-black/75
        backdrop-blur-[2px]

        p-3
        sm:p-5
        md:p-8
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.94,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.96,
          y: 20,
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={(e) => e.stopPropagation()}
        className="
          relative

          w-full
          max-w-[1250px]

          max-h-[90vh]
          overflow-y-auto

          bg-[#353535]

          p-4
          sm:p-6
          md:p-8
        "
      >

        {/* CLOSE */}

        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            top-3
            right-3
            z-30

            w-9
            h-9

            rounded-full

            bg-[#243746]
            border
            border-[#4d9ac2]

            text-[#75bfe5]
            text-[25px]

            flex
            items-center
            justify-center

            cursor-pointer

            transition-all
            duration-300

            hover:bg-[#2999c7]
            hover:text-white
          "
          aria-label="Close popup"
        >
          ×
        </button>


        {/* =================================================
            POPUP CONTENT
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2

            gap-6
            md:gap-8

            items-center
          "
        >

          {/* IMAGE */}

          <div
            className="
              relative
              overflow-hidden

              border-[3px]
              border-[#2999c7]
            "
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={project.title}
                src={project.image}
                alt={project.title}
                initial={{
                  opacity: 0,
                  scale: 1.03,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  w-full

                  h-[250px]
                  sm:h-[350px]
                  md:h-[400px]

                  object-cover
                "
              />
            </AnimatePresence>


            {/* PREVIOUS */}

            <button
              type="button"
              onClick={onPrevious}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2

                z-20

                text-white/80
                text-[50px]

                cursor-pointer

                transition-all
                duration-300

                hover:text-white
                hover:scale-110
              "
              aria-label="Previous project"
            >
              ‹
            </button>


            {/* NEXT */}

            <button
              type="button"
              onClick={onNext}
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2

                z-20

                text-white/80
                text-[50px]

                cursor-pointer

                transition-all
                duration-300

                hover:text-white
                hover:scale-110
              "
              aria-label="Next project"
            >
              ›
            </button>

          </div>


          {/* TEXT */}

          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -10,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                text-white
                md:pr-4
              "
            >

              <h2
                className="
                  text-[20px]
                  sm:text-[24px]
                  md:text-[28px]

                  font-bold
                  leading-tight
                "
              >
                {project.title}
              </h2>


              <p
                className="
                  mt-2

                  text-white/80

                  text-[13px]
                  md:text-[15px]
                "
              >
                {project.date}
              </p>


              <p
                className="
                  mt-4

                  text-[#4db4d5]

                  text-[12px]
                  md:text-[14px]

                  font-semibold
                "
              >
                {project.category}
              </p>


              <div
                className="
                  mt-5

                  text-white/90

                  text-[14px]
                  md:text-[16px]

                  leading-[1.7]

                  whitespace-pre-line
                "
              >
                {project.description}
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </motion.div>
    </motion.div>
  );
}