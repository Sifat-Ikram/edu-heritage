"use client";

import { motion } from "framer-motion";

interface ResearchProgram {
  title: string;
  description: string;
}

interface ResearchProgramsSectionProps {
  researchPrograms: ResearchProgram[];
}

export default function ResearchProgramsSection({
  researchPrograms,
}: ResearchProgramsSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Research Programs</h2>
      <ul className="space-y-4">
        {researchPrograms.map((rp) => (
          <motion.li
            key={rp.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-4 rounded-lg shadow"
          >
            <h3 className="font-semibold text-lg">{rp.title}</h3>
            <p className="text-gray-700">{rp.description}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
