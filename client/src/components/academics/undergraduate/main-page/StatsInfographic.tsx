"use client";
import { motion } from "framer-motion";
import {
  FaDollarSign,
  FaGraduationCap,
  FaRegClock,
  FaUsers,
} from "react-icons/fa6";

const stats = [
  { id: 1, icon: FaGraduationCap, label: "Programs Offered", value: "30+" },
  { id: 2, icon: FaUsers, label: "Active Students", value: "5,000+" },
  { id: 3, icon: FaDollarSign, label: "Scholarships Awarded", value: "$1M+" },
  { id: 4, icon: FaRegClock, label: "Average Duration", value: "4 years" },
];

export default function StatsInfographic() {
  return (
    <section className="bg-[#e6f2f2] dark:bg-white dark:text-gray-900 text-[#008080] rounded-xl w-11/12 mx-auto p-8 sm:p-12">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map(({ id, icon: Icon, label, value }, i) => (
          <motion.div
            key={id}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * i, duration: 0.4 }}
          >
            <Icon className="w-10 h-10" />
            <span className="text-3xl font-bold">{value}</span>
            <span className="text-gray-700">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
