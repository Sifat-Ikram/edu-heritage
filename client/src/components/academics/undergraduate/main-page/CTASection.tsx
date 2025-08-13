"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-[#006666] to-[#004d4d] text-white py-12 text-center w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="mb-8 text-lg sm:text-xl max-w-3xl mx-auto">
          Choose a course, Apply and become part of our vibrant academic
          community.
        </p>
        <Link href={"/academics/course-catelog"}>
          <button className="buttons bg-white text-[#008080]">
            Choose Course
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
