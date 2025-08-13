"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    degree: "BSc Computer Science, Class of 2023",
    feedback:
      "The supportive faculty and hands-on projects helped me secure a great job right after graduation.",
  },
  {
    id: 2,
    name: "Michael Lee",
    degree: "BBA Business Administration, Class of 2022",
    feedback:
      "Amazing internships and career services that prepared me for the real world.",
  },
  {
    id: 3,
    name: "Amina Ali",
    degree: "BSc Nursing, Class of 2024",
    feedback:
      "The clinical experience and faculty mentorship were outstanding.",
  },
];

export default function Testimonials() {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-[#008080] mb-8 text-center">
        What Our Students Say
      </h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {testimonials.map(({ id, name, degree, feedback }, i) => (
          <motion.blockquote
            key={id}
            className="border-l-4 border-[#008080] pl-6 italic text-gray-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * i, duration: 0.5 }}
          >
            <p className="mb-3">&ldquo;{feedback}&rdquo;</p>
            <footer className="font-semibold text-[#006666]">
              — {name}, <span className="text-sm text-gray-500">{degree}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
