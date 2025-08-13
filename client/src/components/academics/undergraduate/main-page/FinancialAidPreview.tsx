"use client";
import { motion } from "framer-motion";

const aids = [
  {
    id: "merit",
    title: "Merit-Based Scholarships",
    description: "Awarded to students with outstanding academic records.",
  },
  {
    id: "need",
    title: "Need-Based Financial Aid",
    description: "Support for students with financial difficulties.",
  },
  {
    id: "workstudy",
    title: "Work-Study Programs",
    description: "Opportunities to work part-time while studying.",
  },
];

export default function FinancialAidPreview() {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-[#008080] mb-8 text-center">
        Financial Aid & Scholarships
      </h2>
      <div className="grid gap-8 sm:grid-cols-3 mb-8">
        {aids.map(({ id, title, description }, i) => (
          <motion.div
            key={id}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-[#006666] mb-2">
              {title}
            </h3>
            <p className="text-gray-700">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
