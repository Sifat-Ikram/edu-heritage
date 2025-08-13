"use client";

import { useParams } from "next/navigation";
import { undergraduatePrograms } from "@/components/data/undergraduateProgrammes";
import { slugify } from "@/components/ui/slugify";
import KeyFacts from "@/components/academics/undergraduate/details/KeyFacts";
import AboutSection from "@/components/academics/undergraduate/details/AboutSection";
import CurriculumOverview from "@/components/academics/undergraduate/details/CurriculumOverview";
import HeroSection from "@/components/academics/undergraduate/main-page/HeroSection";
import DepartmentsSection from "@/components/academics/undergraduate/details/DepartmentsSection";
import FacultySection from "@/components/academics/undergraduate/details/FacultySection";
import ResearchProgramsSection from "@/components/academics/undergraduate/details/ResearchProgramsSection";
import CareerOpportunitiesSection from "@/components/academics/undergraduate/details/CareerOpportunitiesSection";
import AdmissionRequirementsSection from "@/components/academics/undergraduate/details/AdmissionRequirementsSection";
import TuitionFeesSection from "@/components/academics/undergraduate/details/TuitionFeesSection";
import ApplyNowBanner from "@/components/academics/undergraduate/details/ApplyNowBanner";

export default function ProgramDetailsPage() {
  const params = useParams();
  const { title } = params; // slug from URL

  // Find program by matching slugified title
  const program = undergraduatePrograms.find(
    (p) => slugify(p.programTitle) === title
  );

  console.log(program);

  if (!program) {
    return (
      <main className="max-w-3xl mx-auto p-10 text-center text-gray-700">
        <h1 className="text-3xl font-semibold mb-4">Program Not Found</h1>
        <p>
          Sorry, we couldn&apos;t find the program you&apos;re looking for.
          Please check the URL or return to the programs list.
        </p>
      </main>
    );
  }

  return (
    <main>
      <HeroSection title={program.programTitle} description={""} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        <KeyFacts
          duration={program.curriculumOverview?.duration || ""}
          totalCredits={program.curriculumOverview?.totalCredits || 0}
          tuitionPerSemester={program.tuitionFees?.perSemester || ""}
          degree="Bachelor's"
        />
        <AboutSection
          description={program.about.description}
          imageSrc={program.about.image}
          imageAlt={`${program.programTitle} program`}
        />
        <CurriculumOverview
          curriculum={[
            ...(program.curriculumOverview?.coreSubjects || []),
            ...(program.curriculumOverview?.electives || []),
          ]}
        />
        <DepartmentsSection departments={program.departments} />
        <FacultySection faculty={program.faculty} />
        <ResearchProgramsSection researchPrograms={program.researchPrograms} />
        <CareerOpportunitiesSection
          opportunities={program.careerOpportunities}
        />
        <AdmissionRequirementsSection
          requirements={program.admissionRequirements}
        />
        <TuitionFeesSection tuitionFees={program.tuitionFees} />
      </div>
      <ApplyNowBanner {...program.applyNowBanner} />
    </main>
  );
}
