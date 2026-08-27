"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    date: "July 17, 2026",
    title:
      "Corporate Event Budget Planning Guide for Maximum ROI in 2026",
    image: "/blog/image.png",
  },
  {
    id: 2,
    date: "July 10, 2026",
    title:
      "Common Event Planning Mistakes and How to Avoid Them",
    image: "/blog/image.png",
  },
  {
    id: 3,
    date: "July 03, 2026",
    title:
      "Event Marketing Trends 2026: What Brands Need to Know",
    image: "/blog/image.png",
  },
  {
    id: 4,
    date: "June 26, 2026",
    title:
      "The Ultimate Event Technology Checklist for Modern Event Planners",
    image: "/blog/image.png",
  },
  {
    id: 5,
    date: "June 19, 2026",
    title:
      "Why Brands Are Choosing Virtual AR Event Planners in 2026",
    image: "/blog/image.png",
  },
  {
    id: 6,
    date: "June 12, 2026",
    title:
      "Why Corporate Event Launches Are Critical for Brand Growth",
    image: "/blog/image.png",
  },
  {
    id: 7,
    date: "June 05, 2026",
    title:
      "How Experiential Marketing Creates Stronger Brand Connections",
    image: "/blog/image.png",
  },
  {
    id: 8,
    date: "May 29, 2026",
    title:
      "Creating Memorable Experiences Through Strategic Event Design",
    image: "/blog/image.png",
  },
  {
    id: 9,
    date: "May 22, 2026",
    title:
      "The Future of Corporate Events and Brand Experiences",
    image: "/blog/image.png",
  },
];

/* ============================================================
   BLOG GRID
============================================================ */

export default function BlogGrid() {
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const displayedBlogs = blogs.slice(0, visibleBlogs);

  const hasMore = visibleBlogs < blogs.length;

  return (
    <section
      className="
        w-full
        bg-[#303030]
        px-4
        py-10
        md:py-12
        overflow-hidden
      "
    >
      <div className="max-w-[710px] mx-auto">

        {/* =====================================================
            BLOG GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-[14px]
          "
        >
          {displayedBlogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
            />
          ))}
        </div>


        {/* =====================================================
            LOAD MORE / LOAD LESS
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex justify-center mt-8"
        >

          {hasMore ? (
            <motion.button
              type="button"
              onClick={() =>
                setVisibleBlogs((prev) => prev + 3)
              }
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                px-4
                py-2
                min-w-[78px]
                bg-gradient-to-r
                from-[#79cba8]
                to-[#329bd0]
                border
                border-[#73c9b9]
                text-white
                text-[9px]
                font-bold
                cursor-pointer
                transition-all
                duration-300
                hover:brightness-110
              "
            >
              Load More
            </motion.button>
          ) : (
            visibleBlogs > 6 && (
              <motion.button
                type="button"
                onClick={() => setVisibleBlogs(6)}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  px-4
                  py-2
                  min-w-[78px]
                  bg-gradient-to-r
                  from-[#79cba8]
                  to-[#329bd0]
                  border
                  border-[#73c9b9]
                  text-white
                  text-[9px]
                  font-bold
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:brightness-110
                "
              >
                Load Less
              </motion.button>
            )
          )}

        </motion.div>

      </div>
    </section>
  );
}


/* ============================================================
   BLOG CARD
============================================================ */

function BlogCard({ blog, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
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
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        aspect-square
        overflow-hidden
        border
        border-[#2999c7]
        bg-[#222]
        cursor-pointer
      "
    >

      {/* =====================================================
          FULL CARD IMAGE
      ===================================================== */}

      <img
        src={blog.image}
        alt={blog.title}
        draggable="false"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-[1.07]
        "
      />


      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/10
          group-hover:bg-black/35
          transition-all
          duration-500
        "
      />


      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          bottom-0
          h-[65%]
          bg-gradient-to-t
          from-black/95
          via-black/55
          to-transparent
        "
      />


      {/* =====================================================
          HOVER TOP SHINE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-white/10
          via-transparent
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          bottom-0
          z-10
          p-3
          md:p-4
        "
      >

        {/* DATE */}

        <p
          className="
            text-white/90
            text-[8px]
            md:text-[9px]
            font-medium
            mb-2
          "
        >
          {blog.date}
        </p>


        {/* TITLE */}

        <h2
          className="
            text-white
            text-[12px]
            md:text-[13px]
            font-semibold
            leading-[1.35]
            line-clamp-3
            transition-colors
            duration-300
            group-hover:text-[#69c7d9]
          "
        >
          {blog.title}
        </h2>


        {/* READ MORE */}

        <a
          href={`/blog/${blog.id}`}
          className="
            inline-flex
            items-center
            gap-2
            mt-3
            text-white
            text-[8px]
            md:text-[9px]
            font-semibold
            transition-all
            duration-300
            hover:text-[#65c5d8]
            hover:gap-3
          "
        >
          Read More

          <span
            className="
              text-[12px]
              transition-transform
              duration-300
            "
          >
            →
          </span>
        </a>

      </div>

    </motion.article>
  );
}