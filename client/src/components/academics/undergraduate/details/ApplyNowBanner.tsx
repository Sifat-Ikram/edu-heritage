"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ApplyNowBannerProps {
  text: string;
  buttonText: string;
  buttonLink: string;
}

export default function ApplyNowBanner({
  text,
  buttonText,
  buttonLink,
}: ApplyNowBannerProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#008080] text-white p-14 text-center"
    >
      <h2 className="text-2xl font-semibold mb-4">{text}</h2>
      <Link
        className="inline-block bg-white text-[#008080] font-semibold py-3 px-6 rounded hover:bg-gray-100 transition"
        href={buttonLink}
      >
        {buttonText}
      </Link>
    </motion.section>
  );
}
