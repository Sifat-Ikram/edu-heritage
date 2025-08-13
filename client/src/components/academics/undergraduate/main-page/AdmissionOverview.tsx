"use client";
import { motion } from "framer-motion";

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    description:
      "Complete the online application form and submit all required documents.",
  },
  {
    step: 2,
    title: "Entrance Exam",
    description: "Take the university entrance exam to assess your readiness.",
  },
  {
    step: 3,
    title: "Interview",
    description:
      "Attend an interview to discuss your goals and qualifications.",
  },
  {
    step: 4,
    title: "Admission Decision",
    description: "Receive your admission letter and next steps.",
  },
];

export default function AdmissionOverview() {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-[#008080] mb-10 text-center">
        Admission Process Overview
      </h2>
      <div className="space-y-8 max-w-3xl mx-auto">
        {admissionSteps.map(({ step, title, description }, i) => (
          <motion.div
            key={step}
            className="flex flex-col sm:flex-row sm:items-start gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * i, duration: 0.4 }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#008080] text-white flex items-center justify-center text-xl font-bold">
              {step}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#006666]">{title}</h3>
              <p className="mt-1 text-gray-700">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
