"use client";

import { FaClipboardList } from "react-icons/fa";
import { motion } from "framer-motion";

interface AdmissionRequirementsSectionProps {
  requirements: string[];
}

export default function AdmissionRequirementsSection({
  requirements,
}: AdmissionRequirementsSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Admission Requirements</h2>
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
        {requirements.map((req) => (
          <motion.li
            key={req}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -10 },
            }}
            className="text-gray-700 flex items-center gap-2"
          >
            <FaClipboardList /> {req}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
