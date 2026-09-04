"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ============================================================
   PROJECT DATA
   VIDEOS + IMAGES + POSTERS DONO INSIDE:

   public/
      portfolio/
         video-name.mp4
         video-name-poster.jpg   <-- naya, thumbnail image
============================================================ */

const projects = [
  {
    title: "Van Mela (Bhopal)",
    category: "Corporate Events",

    /* CARD VIDEO */
    video: "/portfolio/venmela1/vanmela(bhopal).mp4",

    /* CARD POSTER (thumbnail — video ka pehla frame ya koi bhi photo) */
    poster: "/portfolio/venmela1/poster.jpg",

    /* POPUP MEDIA — video ya image, jo bhi order mein chahiye */
    media: [
      { type: "video", src: "/portfolio/venmela1/vanmela(bhopal).mp4" },
      { type: "video", src: "/portfolio/venmela1/INT-VM-REEL-2.mp4" },
      { type: "image", src: "/portfolio/venmela1/photo-1.jpg" },
      { type: "image", src: "/portfolio/venmela1/photo-2.jpg" },
      { type: "video", src: "/portfolio/venmela1/review-reel-1.mp4" },
    ],

    date: "17th–23rd December 20",

    description:
      "A thoughtfully designed corporate event experience focused on collaboration, innovation and meaningful audience engagement.",
  },

  {
    title: "Van Mela (ujjain)",
    category: "Live Events",

    video: "/portfolio/venmela2/VH-UJJAIN_MIAN.mp4",
    poster: "/portfolio/venmela2/poster.jpg",

    media: [
      { type: "video", src: "/portfolio/venmela2/VH-UJJAIN_MIAN.mp4" },
      { type: "video", src: "/portfolio/venmela2/VH-Ujjain-2.mp4" },
      { type: "video", src: "/portfolio/venmela2/VH-Ujjain-3.mp4" },
    ],

    date: "Standard Chartered Bank | 21 June 2025",

    description:
      "As Sholay celebrated 50 iconic years, the milestone was marked with India's first-ever Cinematic Symphony. A specially edited cinematic experience came alive with a powerful live orchestra and unforgettable performances.\n\nCurated for a premium audience, the event brought together storytelling, music and immersive live entertainment to create a truly memorable cinematic experience.",
  },

  {
    title: "Eicher ",
    category: "Brand Activation",

    video: "/portfolio/eicher/Khandwa-Dolphin-facilities.mp4",
    poster: "/portfolio/eicher/poster.jpg",

    media: [
      { type: "video", src: "/portfolio/eicher/Khandwa-Dolphin-facilities.mp4" },
      { type: "video", src: "/portfolio/eicher/Ratlam-Dolphin- Facilities.mp4" },
    ],

    date: "Brand Experience",

    description:
      "A high-energy brand activation designed to create excitement, engagement and memorable audience interactions.",
  },

  {
    title: "VIT CONVENTION  EVENT",
    category: "Corporate Events",

    video: "/portfolio/VIT-CONVENTION/vit-convocation-iccer-van-campaign.mp4",
    poster: "/portfolio/VIT-CONVENTION/poster.jpg",

    media: [{ type: "video", src: "/portfolio/VIT-CONVENTION/vit-convocation-iccer-van-campaign.mp4" }],

    date: "Corporate Event",

    description:
      "A large-scale corporate gathering designed to encourage meaningful conversations, collaboration and stronger connections.",
  },

  {
    title: "Amazon Music",
    category: "Brand Experience",

    video: "/portfolio/amazon-music.mp4",
    poster: "/portfolio/amazon-music-poster.jpg",

    media: [{ type: "video", src: "/portfolio/amazon-music.mp4" }],

    date: "Brand Experience",

    description:
      "A vibrant entertainment and brand experience bringing together music, culture and audience engagement.",
  },

  {
    title: "Islands 2",
    category: "Experiential",

    video: "/portfolio/islands-2.mp4",
    poster: "/portfolio/islands-2-poster.jpg",

    media: [{ type: "video", src: "/portfolio/islands-2.mp4" }],

    date: "Experiential Event",

    description:
      "An immersive experiential project focused on creative storytelling and memorable audience participation.",
  },

  {
    title: "Brand Experience",
    category: "Brand Activation",

    video: "/portfolio/brand-experience.mp4",
    poster: "/portfolio/brand-experience-poster.jpg",

    media: [{ type: "video", src: "/portfolio/brand-experience.mp4" }],

    date: "Brand Activation",

    description:
      "A strategic brand activation developed to build stronger connections between the brand and its audience.",
  },

  {
    title: "Luxury Experience",
    category: "Experiential",

    video: "/portfolio/luxury-experience.mp4",
    poster: "/portfolio/luxury-experience-poster.jpg",

    media: [{ type: "video", src: "/portfolio/luxury-experience.mp4" }],

    date: "Experiential Event",

    description:
      "A premium experience designed with detailed execution, elegant visuals and meaningful audience engagement.",
  },

  {
    title: "Live Entertainment",
    category: "Live Events",

    video: "/portfolio/live-entertainment.mp4",
    poster: "/portfolio/live-entertainment-poster.jpg",

    media: [{ type: "video", src: "/portfolio/live-entertainment.mp4" }],

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

  /* POPUP */
  const [selectedProject, setSelectedProject] = useState(null);

  /* CURRENT MEDIA INDEX */
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const firstRow = projects.slice(0, 3);
  const secondRow = projects.slice(3, 6);
  const extraProjects = projects.slice(6);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setSelectedMediaIndex(0);
  };

  const getMediaList = (project) =>
    project?.media && project.media.length > 0
      ? project.media
      : [{ type: "video", src: project?.video }];

  const handleNextMedia = () => {
    const media = getMediaList(selectedProject);
    if (!media.length) return;

    setSelectedMediaIndex((prev) =>
      prev === media.length - 1 ? 0 : prev + 1
    );
  };

  const handlePreviousMedia = () => {
    const media = getMediaList(selectedProject);
    if (!media.length) return;

    setSelectedMediaIndex((prev) =>
      prev === 0 ? media.length - 1 : prev - 1
    );
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
    setSelectedMediaIndex(0);
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
        <div className="w-full mx-auto">
          <PortfolioRow
            projects={firstRow}
            rowIndex={0}
            onProjectClick={handleProjectClick}
          />

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
              onProjectClick={handleProjectClick}
            />
          </div>

          {showMore && extraProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                onProjectClick={handleProjectClick}
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
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

      <AnimatePresence>
        {selectedProject && (
          <MediaPopup
            project={selectedProject}
            mediaIndex={selectedMediaIndex}
            onClose={handleClosePopup}
            onNext={handleNextMedia}
            onPrevious={handlePreviousMedia}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ============================================================
   PORTFOLIO ROW
============================================================ */

function PortfolioRow({ projects, rowIndex, onProjectClick }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
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
      {projects.map((project, index) => (
        <PortfolioCard
          key={project.title}
          project={project}
          isHovered={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onClick={() => onProjectClick(project)}
        />
      ))}
    </motion.div>
  );
}

/* ============================================================
   PORTFOLIO CARD
   - Poster image hamesha visible (halka, fast load)
   - Video sirf tab mount hoti hai jab card viewport mein aaye
     (IntersectionObserver) — desktop pe hover se play/pause hoti hai
============================================================ */

function PortfolioCard({ project, isHovered, onMouseEnter, onClick }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  const [isInView, setIsInView] = useState(false);
  const [canPlay, setCanPlay] = useState(false);

  /* ============================================================
     LAZY LOAD — video tabhi mount hogi jab card scroll mein
     visible ho. Isse ek baar mein saari videos load nahi hoti.
  ============================================================ */

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { rootMargin: "200px", threshold: 0.1 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  /* ============================================================
     DESKTOP HOVER — sirf jis card pe hover hai wahi video
     actually play hoti hai, baaki pause rehte hain
  ============================================================ */

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (isHovered) {
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      vid.pause();
    }
  }, [isHovered, canPlay]);

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      animate={{ flexGrow: isHovered ? 3.3 : 1 }}
      transition={{
        flexGrow: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      }}
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
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
      style={{ flexBasis: 0 }}
    >
      {/* POSTER — hamesha dikhta hai, halka, laggy nahi */}

      <img
        src={project.poster}
        alt={project.title}
        loading="lazy"
        className="
          absolute
          inset-0

          w-full
          h-full

          object-cover

          pointer-events-none
        "
      />

      {/* VIDEO — sirf tab DOM mein aati hai jab card viewport ke paas ho */}

      {isInView && (
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="none"
          onCanPlay={() => setCanPlay(true)}
          className={`
            absolute
            inset-0

            w-full
            h-full

            object-cover

            pointer-events-none

            transition-opacity
            duration-500

            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${isHovered && canPlay ? "opacity-100" : "opacity-0"}

            group-hover:scale-[1.035]

            transition-transform
          `}
        />
      )}

      {/* DARK OVERLAY */}

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

      {/* BOTTOM GRADIENT — ALWAYS VISIBLE */}

      <div
        className="
          absolute

          left-0
          right-0
          bottom-0

          h-[110px]

          bg-gradient-to-t
          from-black/90
          via-black/50
          to-transparent

          pointer-events-none
        "
      />

      {/* TITLE CONTENT — ALWAYS VISIBLE */}

      <div
        className="
          absolute

          left-0
          bottom-0

          z-10

          w-full

          px-3
          py-3

          sm:px-4
          sm:py-4

          pointer-events-none

          transition-all
          duration-500

          group-hover:translate-y-[-2px]
        "
      >
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
}

/* ============================================================
   MEDIA POPUP (video + image dono)
============================================================ */

function MediaPopup({ project, mediaIndex, onClose, onNext, onPrevious }) {
  const mediaList =
    project.media && project.media.length > 0
      ? project.media
      : [{ type: "video", src: project.video }];

  const currentMedia = mediaList[mediaIndex] || mediaList[0];

  const hasMultipleMedia = mediaList.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="
        fixed
        inset-0

        z-[9999]

        flex
        items-center
        justify-center

        bg-black/80

        backdrop-blur-[3px]

        p-3
        sm:p-5
        md:p-8
      "
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
        <button
          type="button"
          onClick={onClose}
          className="
            absolute

            top-3
            right-3

            z-50

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

            hover:scale-105
          "
          aria-label="Close popup"
        >
          ×
        </button>

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
          {/* LEFT SIDE — VIDEO OR IMAGE */}

          <div
            className="
              relative

              overflow-hidden

              border-[3px]
              border-[#2999c7]

              bg-black

              w-full
            "
          >
            <AnimatePresence mode="wait">
              {currentMedia.type === "image" ? (
                <motion.img
                  key={`${project.title}-${mediaIndex}`}
                  src={currentMedia.src}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="
                    block

                    w-full

                    h-[250px]
                    sm:h-[350px]
                    md:h-[400px]

                    object-contain

                    bg-black
                  "
                  alt={project.title}
                />
              ) : (
                <motion.video
                  key={`${project.title}-${mediaIndex}`}
                  src={currentMedia.src}
                  autoPlay
                  muted={false}
                  controls
                  playsInline
                  preload="auto"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="
                    block

                    w-full

                    h-[250px]
                    sm:h-[350px]
                    md:h-[400px]

                    object-contain

                    bg-black
                  "
                />
              )}
            </AnimatePresence>

            {hasMultipleMedia && (
              <button
                type="button"
                onClick={onPrevious}
                className="
                  absolute

                  left-3
                  sm:left-4

                  top-1/2
                  -translate-y-1/2

                  z-30

                  w-10
                  h-10

                  rounded-full

                  bg-black/60

                  border
                  border-white/20

                  text-white

                  text-[34px]

                  leading-none

                  flex
                  items-center
                  justify-center

                  cursor-pointer

                  transition-all
                  duration-300

                  hover:bg-[#2999c7]

                  hover:border-[#2999c7]

                  hover:scale-110
                "
                aria-label="Previous media"
              >
                ‹
              </button>
            )}

            {hasMultipleMedia && (
              <button
                type="button"
                onClick={onNext}
                className="
                  absolute

                  right-3
                  sm:right-4

                  top-1/2
                  -translate-y-1/2

                  z-30

                  w-10
                  h-10

                  rounded-full

                  bg-black/60

                  border
                  border-white/20

                  text-white

                  text-[34px]

                  leading-none

                  flex
                  items-center
                  justify-center

                  cursor-pointer

                  transition-all
                  duration-300

                  hover:bg-[#2999c7]

                  hover:border-[#2999c7]

                  hover:scale-110
                "
                aria-label="Next media"
              >
                ›
              </button>
            )}

            {hasMultipleMedia && (
              <div
                className="
                  absolute

                  bottom-3

                  left-1/2

                  -translate-x-1/2

                  z-30

                  flex
                  gap-1.5
                "
              >
                {mediaList.map((m, i) => (
                  <span
                    key={i}
                    className={`
                      w-1.5
                      h-1.5

                      rounded-full

                      transition-all
                      duration-300

                      ${i === mediaIndex ? "bg-[#2999c7] w-4" : "bg-white/40"}
                    `}
                  />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE — PROJECT INFO */}

          <AnimatePresence mode="wait">
            <motion.div
              key={`${project.title}-${mediaIndex}-info`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.35 }}
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