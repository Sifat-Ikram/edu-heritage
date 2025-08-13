"use client";

import { motion } from "framer-motion";

interface CurriculumOverviewProps {
  curriculum: string[];
  heading?: string;
}

export default function CurriculumOverview({
  curriculum,
  heading = "Curriculum Overview",
}: CurriculumOverviewProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">{heading}</h2>
      <ul className="space-y-3">
        {curriculum.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <span className="w-2 h-2 bg-[#006666] rounded-full mr-3"></span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
