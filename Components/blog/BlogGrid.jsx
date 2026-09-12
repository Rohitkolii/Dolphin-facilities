"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";
import { blogs, blogFilters } from "./blogData";

/* ============================================================
   BLOG GRID
============================================================ */

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState("All Insights");
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef(null);

  const filteredBlogs = useMemo(() => {
    if (activeFilter === "All Insights") return blogs;
    return blogs.filter((blog) => blog.category === activeFilter);
  }, [activeFilter]);

  const displayedBlogs = filteredBlogs.slice(0, visibleBlogs);
  const hasMore = visibleBlogs < filteredBlogs.length;

  const handleFilterSelect = (value) => {
    setActiveFilter(value);
    setVisibleBlogs(3);
    setFilterOpen(false);
  };

  // close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      className="
        w-full
        bg-[#303030]
        px-4
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-20
        py-10
        md:py-14
        lg:py-16
        overflow-hidden
      "
    >
      {/* DESKTOP WIDER CONTAINER */}
      <div className="w-full max-w-[1500px] mx-auto">

        {/* FILTER ICON (top right, unobtrusive) */}

        <div className="relative flex justify-end mb-6" ref={filterRef}>
          <button
            type="button"
            onClick={() => setFilterOpen((prev) => !prev)}
            aria-label="Filter articles"
            className="
              flex
              items-center
              gap-2
              px-3
              py-2
              border
              border-[#2995c5]
              text-white/85
              text-[12px]
              font-medium
              transition-all
              duration-300
              hover:border-[#48b7df]
              hover:text-white
            "
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            {activeFilter}
          </button>

          <AnimatePresence>
            {filterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="
                  absolute
                  top-[calc(100%+6px)]
                  right-0
                  z-20
                  min-w-[190px]
                  bg-[#222]
                  border
                  border-[#2995c5]
                  shadow-lg
                "
              >
                {blogFilters.map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => handleFilterSelect(filter.value)}
                    className={`
                      w-full
                      text-left
                      px-4
                      py-2.5
                      text-[12px]
                      font-medium
                      transition-colors
                      duration-200
                      ${
                        activeFilter === filter.value
                          ? "bg-gradient-to-r from-[#2478bd] to-[#68c4b2] text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    {filter.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* BLOG GRID */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            md:gap-7
            lg:gap-9
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


        {/* LOAD MORE / LOAD LESS */}

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
          className="
            flex
            justify-center
            mt-10
            md:mt-14
          "
        >
          {hasMore ? (
            <motion.button
              type="button"
              onClick={() =>
                setVisibleBlogs((prev) =>
                  Math.min(prev + 3, filteredBlogs.length)
                )
              }
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                px-7
                py-3
                min-w-[140px]
                bg-gradient-to-r
                from-[#79cba8]
                to-[#329bd0]
                border
                border-[#73c9b9]
                text-white
                text-[14px]
                md:text-[15px]
                font-medium
                cursor-pointer
                transition-all
                duration-300
                hover:brightness-110
              "
            >
              Load More
            </motion.button>
          ) : (
            visibleBlogs > 3 && (
              <motion.button
                type="button"
                onClick={() => setVisibleBlogs(3)}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  px-7
                  py-3
                  min-w-[140px]
                  bg-gradient-to-r
                  from-[#79cba8]
                  to-[#329bd0]
                  border
                  border-[#73c9b9]
                  text-white
                  text-[14px]
                  md:text-[15px]
                  font-medium
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
   BLOG CARD (original look — unchanged)
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
      {/* IMAGE */}

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


      {/* DARK OVERLAY */}

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


      {/* BOTTOM GRADIENT */}

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


      {/* HOVER SHINE */}

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


      {/* CONTENT */}

      <div
        className="
          absolute
          left-0
          right-0
          bottom-0
          z-10
          p-5
          md:p-6
          lg:p-7
        "
      >
        {/* DATE */}

        <p
          className="
            text-white/90
            text-[12px]
            md:text-[14px]
            lg:text-[15px]
            font-medium
            mb-3
          "
        >
          {blog.date}
        </p>


        {/* TITLE */}

        <h2
          className="
            text-white
            text-[19px]
            md:text-[22px]
            lg:text-[24px]
            font-semibold
            leading-[1.4]
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
          href={`/blog/${blog.slug}`}
          className="
            inline-flex
            items-center
            gap-2
            mt-5
            text-white
            text-[14px]
            md:text-[15px]
            font-medium
            transition-all
            duration-300
            hover:text-[#65c5d8]
            hover:gap-3
          "
        >
          Read More

          <span
            className="
              text-[24px]
              leading-none
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