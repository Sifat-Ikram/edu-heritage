import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProgrammeCardProps {
  title: string;
  image: string;
  duration: string;
  totalCredits: number;
  tuitionPerSemester: string;
  detailsLink: string;
}

export default function ProgrammeCard({
  title,
  image,
  duration,
  totalCredits,
  tuitionPerSemester,
  detailsLink,
}: ProgrammeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row h-full">
        {/* Left Image */}
        <div className="relative w-full sm:w-1/3 min-h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            {/* Title */}
            <h3 className="text-lg md:text-xl 2xl:text-2xl font-semibold text-gray-900 mb-4 leading-snug line-clamp-2">
              {title}
            </h3>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="font-medium">{duration}</p>
                <span className="text-xs text-gray-500">Duration</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="font-medium">{totalCredits}</p>
                <span className="text-xs text-gray-500">Credits</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="font-medium">{tuitionPerSemester}</p>
                <span className="text-xs text-gray-500">Per Semester</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 sm:mt-4">
            <Link
              href={detailsLink}
              className="inline-block w-full text-center bg-[#006666] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#004d4d] transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
