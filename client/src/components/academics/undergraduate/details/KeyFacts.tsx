"use client";

import { motion } from "framer-motion";
import {
  FaClock,
  FaBookOpen,
  FaMoneyBillWave,
  FaGraduationCap,
} from "react-icons/fa";

interface KeyFactsProps {
  duration: string;
  totalCredits: number;
  tuitionPerSemester: string;
  degree: string;
}

const factsData = [
  {
    icon: <FaClock />,
    label: "Duration",
  },
  {
    icon: <FaBookOpen />,
    label: "Total Credits",
  },
  {
    icon: <FaMoneyBillWave />,
    label: "Tuition / Semester",
  },
  {
    icon: <FaGraduationCap />,
    label: "Degree Awarded",
  },
];

export default function KeyFacts({
  duration,
  totalCredits,
  tuitionPerSemester,
  degree,
}: KeyFactsProps) {
  const values = [
    duration,
    `${totalCredits} Credits`,
    tuitionPerSemester,
    degree,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {factsData.map(({ icon, label }, i) => (
        <div
          key={label}
          className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
        >
          <div className="text-[#006666] text-3xl mb-3">{icon}</div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-lg font-semibold text-gray-900">{values[i]}</p>
        </div>
      ))}
    </motion.div>
  );
}
