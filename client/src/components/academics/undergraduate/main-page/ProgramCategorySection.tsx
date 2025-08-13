"use client";

import { useState } from "react";
import { undergraduatePrograms } from "@/components/data/undergraduateProgrammes";
import SearchAndFilter from "./SearchAndFilter";
import ProgrammeCard from "@/components/cards/academic/ProgrammeCard";
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { slugify } from "@/components/ui/slugify";

type FilterFormData = {
  keyword: string;
  field: string;
  duration: string;
};

export default function ProgramCategorySection() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<FilterFormData>({
    keyword: "",
    field: "",
    duration: "",
  });

  const handleFilterChange = (newFilters: FilterFormData) => {
    setFilters(newFilters);
  };

  const fieldsOfStudy = Array.from(
    new Set(
      undergraduatePrograms.flatMap((program) => [
        ...(program.curriculumOverview?.coreSubjects || []),
        ...(program.curriculumOverview?.electives || []),
      ])
    )
  );

  const durations = Array.from(
    new Set(
      undergraduatePrograms.map(
        (program) => program.curriculumOverview?.duration
      )
    )
  ).filter(Boolean);

  const filteredPrograms = undergraduatePrograms.filter((program) => {
    const keyword = filters.keyword.toLowerCase();
    const matchesKeyword = program.programTitle.toLowerCase().includes(keyword);

    const matchesField = filters.field
      ? (program.curriculumOverview?.coreSubjects || [])
          .concat(program.curriculumOverview?.electives || [])
          .map((f) => f.toLowerCase())
          .includes(filters.field.toLowerCase())
      : true;

    const matchesDuration = filters.duration
      ? program.curriculumOverview?.duration.toLowerCase() ===
        filters.duration.toLowerCase()
      : true;

    return matchesKeyword && matchesField && matchesDuration;
  });

  return (
    <section className="w-11/12 mx-auto my-20">
      <h2 className="text-3xl sm:text-5xl font-bold text-[#008080] mb-16 text-center">
        Featured Programs
      </h2>

      <div className="md:hidden mb-4 flex items-center space-x-3">
        <button
          onClick={() => setSidebarOpen(true)}
          aria-label="Open filter menu"
          className="text-3xl text-[#008080]"
        >
          <FiMenu />
        </button>
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#008080]">
          Filters
        </h1>
      </div>

      {/* Mobile Sidebar filters */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ x: "-75%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-50 p-4 pt-12 mt-10"
            >
              {/* Close button */}
              <button
                onClick={() => setSidebarOpen(false)}
                aria-label="Close filter menu"
                className="absolute top-0 right-2 text-2xl text-[#008080] cursor-pointer"
              >
                ×
              </button>

              {/* Filters */}
              <div className="mt-2">
                <SearchAndFilter
                  onFilterChange={(filters) => {
                    handleFilterChange(filters);
                    setSidebarOpen(false);
                  }}
                  fieldsOfStudy={fieldsOfStudy}
                  durations={durations}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
          </>
        )}
      </AnimatePresence>

      {/* Search & Filter */}
      <div className="hidden md:block">
        <SearchAndFilter
          onFilterChange={handleFilterChange}
          fieldsOfStudy={fieldsOfStudy}
          durations={durations}
        />
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 2xl:gap-4 mt-10">
        {filteredPrograms.map((program) => (
          <ProgrammeCard
            key={program.programTitle}
            title={program.programTitle}
            image={program.about.image}
            duration={program.curriculumOverview?.duration || ""}
            totalCredits={program.curriculumOverview?.totalCredits || 0}
            tuitionPerSemester={program.tuitionFees?.perSemester || ""}
            detailsLink={`/academics/undergraduate/${slugify(
              program.programTitle
            )}`}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredPrograms.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No programs match your filters.
        </p>
      )}
    </section>
  );
}
