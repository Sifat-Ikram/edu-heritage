"use client";

import { FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaSchoolFlag } from "react-icons/fa6";

interface TuitionFees {
  perSemester: string;
  totalProgramCost: string;
  scholarshipsAvailable: boolean;
}

interface TuitionFeesSectionProps {
  tuitionFees: TuitionFees;
}

export default function TuitionFeesSection({
  tuitionFees,
}: TuitionFeesSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Tuition Fees</h2>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white py-6"
      >
        <p className="flex items-center gap-2 text-gray-800 mb-2">
          <FaMoneyBillWave /> Per Semester:{" "}
          <span className="font-semibold">{tuitionFees.perSemester}</span>
        </p>
        <p className="flex items-center gap-2 text-gray-800 mb-2">
          <FaMoneyBillWave /> Total Program Cost:{" "}
          <span className="font-semibold">{tuitionFees.totalProgramCost}</span>
        </p>
        {tuitionFees.scholarshipsAvailable && (
          <p className="flex items-center gap-2 text-green-600 font-semibold">
            <FaSchoolFlag /> Scholarships Available
          </p>
        )}
      </motion.div>
    </section>
  );
}
