"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Department {
  name: string;
  description: string;
  image: string;
}

interface DepartmentsSectionProps {
  departments: Department[];
}

export default function DepartmentsSection({
  departments,
}: DepartmentsSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Departments</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => (
          <motion.div
            key={dept.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="relative">
              <Image
                src={dept.image}
                alt={dept.name}
                fill
                priority
                className="h-40 w-full object-cover rounded-md mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
            <p className="text-gray-700">{dept.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
