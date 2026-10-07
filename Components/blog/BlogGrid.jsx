"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";
import { blogs, blogFilters } from "./blogData";
import Link from "next/link";
import { playfair } from "@/lib/fonts";

// Same display font as page.js / Navbar / About
const display = { fontFamily: playfair.style.fontFamily };

const ease = [0.22, 1, 0.36, 1];

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
    <section className="w-full overflow-hidden bg-[#f8f4ec] px-4 py-10 sm:px-6 md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-20">
      <div className="mx-auto w-full max-w-[1500px]">
        {/* FILTER (top right, unobtrusive) */}

        <div className="relative mb-10 flex justify-end" ref={filterRef}>
          <button
            type="button"
            onClick={() => setFilterOpen((prev) => !prev)}
            aria-label="Filter articles"
            className="
              flex
              items-center
              gap-2
              border
              border-[#13253b]/20
              bg-white
              px-4
              py-2.5
              text-[12px]
              font-medium
              text-[#13253b]
              transition-all
              duration-300
              hover:border-[#c9a768]
              hover:text-[#a5803a]
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
                  right-0
                  top-[calc(100%+6px)]
                  z-20
                  min-w-[200px]
                  border
                  border-[#c9a768]/50
                  bg-white
                  shadow-[0_25px_50px_-20px_rgba(19,37,59,0.3)]
                "
              >
                {blogFilters.map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => handleFilterSelect(filter.value)}
                    className={`
                      w-full
                      px-4
                      py-2.5
                      text-left
                      text-[12px]
                      font-medium
                      transition-colors
                      duration-200
                      ${
                        activeFilter === filter.value
                          ? "bg-[#13253b] text-[#c9a768]"
                          : "text-[#4a4438] hover:bg-[#c9a768]/10 hover:text-[#13253b]"
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-9">
          {displayedBlogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>

        {/* LOAD MORE / LOAD LESS */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="mt-12 flex justify-center md:mt-16"
        >
          {hasMore ? (
            <motion.button
              type="button"
              onClick={() =>
                setVisibleBlogs((prev) => Math.min(prev + 3, filteredBlogs.length))
              }
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="
                min-w-[150px]
                border
                border-[#13253b]
                bg-[#13253b]
                px-8
                py-3
                text-[14px]
                font-medium
                tracking-wide
                text-white
                transition-colors
                duration-300
                hover:border-[#c9a768]
                hover:bg-[#c9a768]
                hover:text-[#13253b]
                md:text-[15px]
              "
            >
              Load More
            </motion.button>
          ) : (
            visibleBlogs > 3 && (
              <motion.button
                type="button"
                onClick={() => setVisibleBlogs(3)}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="
                  min-w-[150px]
                  border
                  border-[#13253b]
                  bg-transparent
                  px-8
                  py-3
                  text-[14px]
                  font-medium
                  tracking-wide
                  text-[#13253b]
                  transition-colors
                  duration-300
                  hover:border-[#c9a768]
                  hover:bg-[#c9a768]
                  hover:text-[#13253b]
                  md:text-[15px]
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
   BLOG CARD — same editorial-card language as the About page
   (white card, border, gold hover, Playfair heading)
============================================================ */

function BlogCard({ blog, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 45, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="
        group
        flex
        flex-col
        overflow-hidden
        border
        border-[#13253b]/10
        bg-white
        shadow-[0_18px_40px_-28px_rgba(19,37,59,0.3)]
        transition-colors
        duration-300
        hover:border-[#c9a768]
        hover:shadow-[0_22px_45px_-22px_rgba(19,37,59,0.28)]
      "
    >
      {/* IMAGE */}
      <div className="relative h-[220px] w-full overflow-hidden md:h-[240px]">
        <img
          src={blog.image}
          alt={blog.title}
          draggable="false"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-[1.06]
          "
        />

        {/* Category chip */}
        <span className="absolute left-4 top-4 border border-[#c9a768] bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#a5803a] backdrop-blur-sm">
          {blog.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        {/* DATE */}
        <p className="mb-3 text-[12px] font-medium tracking-wide text-[#a5803a] md:text-[13px]">
          {blog.date}
        </p>

        {/* TITLE */}
        <Link
          href={`/blog/${blog.slug}`}
          style={display}
          className="
            line-clamp-3
            text-[19px]
            font-semibold
            leading-[1.35]
            text-[#13253b]
            transition-colors
            duration-300
            group-hover:text-[#a5803a]
            md:text-[21px]
          "
        >
          {blog.title}
        </Link>

        {/* EXCERPT */}
        {blog.excerpt && (
          <p className="mt-3 line-clamp-2 text-[13px] leading-[1.7] text-[#6b6255] md:text-[14px]">
            {blog.excerpt}
          </p>
        )}

        {/* GOLD DIVIDER */}
        <div className="mb-5 mt-5 h-px w-10 bg-[#c9a768] transition-all duration-300 group-hover:w-16" />

        {/* READ MORE */}
        <Link
          href={`/blog/${blog.slug}`}
          className="
            mt-auto
            inline-flex
            items-center
            gap-2
            text-[13px]
            font-medium
            tracking-wide
            text-[#13253b]
            transition-all
            duration-300
            hover:gap-3
            hover:text-[#a5803a]
            md:text-[14px]
          "
        >
          Read More
          <span className="text-[18px] leading-none">→</span>
        </Link>
      </div>
    </motion.article>
  );
}