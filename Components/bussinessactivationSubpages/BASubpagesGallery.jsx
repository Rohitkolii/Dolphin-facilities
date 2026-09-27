"use client";

import { motion } from "framer-motion";

export default function NationGallery({
  image = "/businessss/nationalpage/nation4.jpg",
}) {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-[58px]">
      <div className="mx-auto max-w-[1458px] py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full overflow-hidden border border-[#c9a768] shadow-[0_18px_40px_-20px_rgba(19,37,59,0.3)]"
        >
          <img
            src={image}
            alt="Event Gallery"
            draggable="false"
            className="block h-[190px] w-full object-cover transition-transform duration-700 hover:scale-[1.02] sm:h-[250px] md:h-[350px] lg:h-[430px] xl:h-[610px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
