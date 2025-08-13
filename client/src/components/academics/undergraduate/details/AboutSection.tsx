"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AboutSectionProps {
  heading?: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function AboutSection({
  heading = "About This Program",
  description,
  imageAlt = "Program related image",
}: AboutSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{heading}</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
      <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
        <Image
          src={
            "https://i.ibb.co/VcF0xmPn/happy-woman-travel-london-big-600nw-222159805.webp"
          }
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
    </motion.section>
  );
}
