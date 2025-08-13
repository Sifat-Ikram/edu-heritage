"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const reasons = [
  {
    title: "Accredited Programs",
    description:
      "Our programs meet rigorous national and international standards.",
  },
  {
    title: "Experienced Faculty",
    description:
      "Learn from industry professionals and award-winning professors.",
  },
  {
    title: "State-of-the-Art Facilities",
    description: "Access modern labs, libraries, and innovation centers.",
  },
  {
    title: "Career Support",
    description: "Receive personalized guidance and internship opportunities.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[url('https://i.ibb.co/LXDgSjBh/College-admission-process-that-fits-you.jpg')] bg-cover bg-center bg-fixed relative flex flex-col items-center justify-center py-20">
      <div className="bg-black/10 bg-opacity-40 w-full h-full absolute top-0 left-0 z-0" />
      <div className="w-4/5 mx-auto shadow rounded-2xl bg-black/50 p-8">
        <h2 className="text-3xl font-semibold text-white mb-10 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map(({ title, description }, i) => (
            <motion.div
              key={title}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <FaCheckCircle className="w-8 h-8 text-white flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-white mt-1">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
