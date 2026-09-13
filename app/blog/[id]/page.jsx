"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { blogs } from "@/Components/blog/blogData";
import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();

  const blog = blogs.find(
    (item) => item.slug == params.id
  );


  /* Invalid ID */
  if (!blog) {
    return (
      <>
        <Header />
        <section className="min-h-screen bg-[#303030] text-white flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#3ba1ca]">
              Blog Not Found
            </h1>

            <button
              onClick={() => router.push("/blog")}
              className="
                mt-5
                px-5
                py-2
                bg-gradient-to-r
                from-[#79cba8]
                to-[#329bd0]
                text-white
                text-sm
                font-semibold
              "
            >
              Back to Blog
            </button>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="w-full min-h-screen bg-[#303030] text-white px-4 py-10 md:py-14">
        <div className="max-w-[900px] mx-auto">

          {/* BACK BUTTON */}

          <motion.button
            onClick={() => router.push("/blog")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="
              mb-8
              text-[#5eb8d4]
              text-[15px]
              font-semibold
              hover:text-white
              transition-colors
            "
          >
            ← Back to Blog
          </motion.button>


          {/* BLOG */}

          <motion.article
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* IMAGE */}

            <div className="w-full border border-[#2999c7] overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="
                  w-full
                  h-[220px]
                  md:h-[500px]
                  object-cover
                "
              />
            </div>


            {/* DATE / CATEGORY / READING TIME */}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <p className="text-[#5eb8d4] text-[16px] font-semibold">
                {blog.date}
              </p>
              {blog.category && (
                <span className="text-white/40 text-[10px]">•</span>
              )}
              {blog.category && (
                <p className="text-[#5eb8d4] text-[10px] font-semibold uppercase tracking-wide">
                  {blog.category}
                </p>
              )}
              {blog.readingTime && (
                <span className="text-white/40 text-[10px]">•</span>
              )}
              {blog.readingTime && (
                <p className="text-white/60 text-[10px] font-medium">
                  {blog.readingTime} read
                </p>
              )}
            </div>


            {/* TITLE */}

            <h1
              className="
                mt-2
                text-white
                text-[24px]
                md:text-[34px]
                font-bold
                leading-tight
              "
            >
              {blog.title}
            </h1>


            {/* DIVIDER */}

            <div className="w-full h-px bg-[#2999c7]/40 mt-6 mb-6" />


            {/* CONTENT */}

            <div
              className="
                text-white/85
                text-[14px]
                md:text-[16px]
                leading-[1.8]
                space-y-5
              "
            >
              {/* INTRO */}
              <p>{blog.intro}</p>

              {/* SECTIONS */}
              {blog.sections?.map((section, i) => (
                <div key={i}>
                  <h2
                    className="
                      text-white
                      text-[16px]
                      md:text-[19px]
                      font-semibold
                      mt-8
                      mb-3
                    "
                  >
                    {section.heading}
                  </h2>
                  <p>{section.body}</p>
                </div>
              ))}

              {/* CHECKLIST */}
              {blog.checklist?.length > 0 && (
                <div>
                  <h2
                    className="
                      text-white
                      text-[16px]
                      md:text-[19px]
                      font-semibold
                      mt-8
                      mb-3
                    "
                  >
                    Dolphin Planning Checklist
                  </h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {blog.checklist.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FAQS */}
              {blog.faqs?.length > 0 && (
                <div>
                  <h2
                    className="
                      text-white
                      text-[16px]
                      md:text-[19px]
                      font-semibold
                      mt-8
                      mb-3
                    "
                  >
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {blog.faqs.map((faq, i) => (
                      <div key={i}>
                        <p className="text-white font-semibold text-[13px] md:text-[15px] mb-1">
                          {faq.q}
                        </p>
                        <p>{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              {blog.ctaBody && (
                <div
                  className="
                    mt-10
                    border
                    border-[#2999c7]
                    bg-white/5
                    px-5
                    py-6
                    md:px-7
                    md:py-8
                  "
                >
                  <h2 className="text-white text-[16px] md:text-[19px] font-semibold mb-3">
                    {blog.ctaTitle}
                  </h2>
                  <p>{blog.ctaBody}</p>
                </div>
              )}
            </div>

          </motion.article>

        </div>
      </section>
      <Footer />
    </>
  );
}