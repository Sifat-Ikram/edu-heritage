"use client";

import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

interface CareerOpportunitiesSectionProps {
  opportunities: string[];
}

export default function CareerOpportunitiesSection({
  opportunities,
}: CareerOpportunitiesSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Career Opportunities</h2>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        className="list-disc list-inside space-y-2"
      >
        {opportunities.map((job) => (
          <motion.li
            key={job}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -10 },
            }}
            className="text-gray-700 flex items-center gap-2"
          >
            <FaBriefcase /> {job}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
