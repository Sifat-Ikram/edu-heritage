"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaUserTie } from "react-icons/fa";

interface FacultyMember {
  name: string;
  position: string;
  photo: string;
  specialization: string;
}

interface FacultySectionProps {
  faculty: FacultyMember[];
}

export default function FacultySection({ faculty }: FacultySectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Faculty</h2>
      <div className="flex flex-wrap gap-6">
        {faculty.map((member) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow p-4 flex items-center space-x-4 max-w-md"
          >
            <div className="relative">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                priority
                className="h-20 w-20 rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600 italic">{member.position}</p>
              <p className="text-gray-700 text-sm mt-1">
                <FaUserTie className="inline mr-1" /> {member.specialization}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
