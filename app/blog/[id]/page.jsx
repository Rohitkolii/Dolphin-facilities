"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    date: "July 17, 2026",
    title: "Corporate Event Budget Planning Guide for Maximum ROI in 2026",
    image: "/blog/image1.png",
    description:
      "Planning a successful corporate event requires a clear understanding of budgets, objectives, audiences, and expected outcomes. A well-planned budget helps brands create impactful experiences while maintaining control over costs.",
  },
  {
    id: 2,
    date: "July 10, 2026",
    title: "Common Event Planning Mistakes and How to Avoid Them",
    image: "/blog/image2.png",
    description:
      "Event planning involves multiple moving parts. From timelines and vendors to guest experience and execution, avoiding common mistakes can make the entire event smoother and more successful.",
  },
  {
    id: 3,
    date: "July 03, 2026",
    title: "Event Marketing Trends 2026: What Brands Need to Know",
    image: "/blog/image3.png",
    description:
      "Event marketing continues to evolve with new technologies, creative formats, and audience expectations. Brands are increasingly focusing on experiences that create meaningful engagement.",
  },
  {
    id: 4,
    date: "June 26, 2026",
    title:
      "The Ultimate Event Technology Checklist for Modern Event Planners",
    image: "/blog/image4.png",
    description:
      "Technology plays an important role in modern events. From registration and audience engagement to production and analytics, the right tools can improve the overall event experience.",
  },
  {
    id: 5,
    date: "June 19, 2026",
    title:
      "Why Brands Are Choosing Virtual AR Event Planners in 2026",
    image: "/blog/image5.png",
    description:
      "Virtual and augmented experiences are helping brands reach audiences in new ways. These technologies can combine storytelling, interaction, and innovation to create memorable experiences.",
  },
  {
    id: 6,
    date: "June 12, 2026",
    title:
      "Why Corporate Event Launches Are Critical for Brand Growth",
    image: "/blog/image6.png",
    description:
      "A strong corporate launch can create awareness, build relationships, and communicate a brand's vision effectively. Strategic planning and creative execution are key to making these launches successful.",
  },
  {
    id: 7,
    date: "June 05, 2026",
    title:
      "How Experiential Marketing Creates Stronger Brand Connections",
    image: "/blog/image7.png",
    description:
      "Experiential marketing allows audiences to interact directly with brands. These meaningful experiences can create stronger emotional connections and improve brand recall.",
  },
  {
    id: 8,
    date: "May 29, 2026",
    title:
      "Creating Memorable Experiences Through Strategic Event Design",
    image: "/blog/image8.png",
    description:
      "Great event design combines creativity, strategy, production, and audience understanding. Every element should work together to create a seamless and memorable experience.",
  },
  {
    id: 9,
    date: "May 22, 2026",
    title:
      "The Future of Corporate Events and Brand Experiences",
    image: "/blog/image9.png",
    description:
      "The future of events is moving toward more personalized, interactive, and technology-driven experiences. Brands are looking for innovative ways to connect with their audiences.",
  },
];

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();

  const blog = blogs.find(
    (item) => item.id === Number(params.id)
  );

  /* Invalid ID */
  if (!blog) {
    return (
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
    );
  }

  return (
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
            text-[11px]
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
                md:h-[400px]
                object-cover
              "
            />
          </div>


          {/* DATE */}

          <p className="mt-6 text-[#5eb8d4] text-[10px] font-semibold">
            {blog.date}
          </p>


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
              text-[12px]
              md:text-[14px]
              leading-[1.8]
              space-y-5
            "
          >
            <p>
              {blog.description}
            </p>

            <p>
              At Wizcraft, every experience is designed with creativity,
              precision, and a strong understanding of the audience. From
              corporate events and brand activations to experiential
              campaigns, the focus remains on creating experiences that
              people remember.
            </p>

            <p>
              Successful events go beyond logistics. They bring together
              strategy, storytelling, technology, production, and creative
              execution to deliver meaningful experiences for brands and
              their audiences.
            </p>
          </div>

        </motion.article>

      </div>
    </section>
  );
}