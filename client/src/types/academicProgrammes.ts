export interface Program {
  programTitle: string;
  about: {
    heading: string;
    description: string;
    image: string;
  };
  departments: {
    name: string;
    description: string;
    image: string;
  }[];
  faculty: {
    name: string;
    position: string;
    photo: string;
    specialization: string;
  }[];
  researchPrograms: {
    title: string;
    description: string;
  }[];
  curriculumOverview: {
    duration: string;
    totalCredits: number;
    coreSubjects: string[];
    electives: string[];
  };
  careerOpportunities: string[];
  admissionRequirements: string[];
  tuitionFees: {
    perSemester: string;
    totalProgramCost: string;
    scholarshipsAvailable: boolean;
  };
  applyNowBanner: {
    text: string;
    buttonText: string;
    buttonLink: string;
  };
}
