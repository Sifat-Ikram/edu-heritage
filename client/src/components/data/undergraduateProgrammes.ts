import { Program } from "@/types/academicProgrammes";

export const undergraduatePrograms: Program[] = [
  {
    programTitle: "Bachelor of Science in Biotechnology",
    about: {
      heading: "About the Program",
      description:
        "Combines biology and technology to develop innovative solutions in healthcare, agriculture, and the environment.",
      image: "/images/programs/biotech.jpg",
    },
    departments: [
      {
        name: "Genetic Engineering",
        description:
          "Manipulation of genes for medical and agricultural benefits.",
        image: "/images/departments/genetics.jpg",
      },
      {
        name: "Microbiology",
        description: "Study of microorganisms and their applications.",
        image: "/images/departments/microbiology.jpg",
      },
    ],
    faculty: [
      {
        name: "Dr. Mahbuba Khan",
        position: "Professor",
        photo: "/images/faculty/mahbuba.jpg",
        specialization: "Molecular Biology",
      },
    ],
    researchPrograms: [
      {
        title: "CRISPR Gene Editing",
        description: "Advanced gene editing tools for disease resistance.",
      },
    ],
    curriculumOverview: {
      duration: "4 Years",
      totalCredits: 134,
      coreSubjects: ["Genetics", "Cell Biology", "Bioinformatics"],
      electives: ["Pharmaceutical Biotechnology", "Industrial Microbiology"],
    },
    careerOpportunities: [
      "Research Scientist",
      "Biotech Analyst",
      "Quality Control Officer",
    ],
    admissionRequirements: [
      "GPA 3.5 in SSC & HSC",
      "Biology mandatory",
      "Admission test",
    ],
    tuitionFees: {
      perSemester: "BDT 68,000",
      totalProgramCost: "BDT 544,000",
      scholarshipsAvailable: true,
    },
    applyNowBanner: {
      text: "Explore the future of life sciences!",
      buttonText: "Apply Now",
      buttonLink: "/apply/biotech",
    },
  },
  {
    programTitle: "Bachelor of Pharmacy (BPharm)",
    about: {
      heading: "About the Program",
      description:
        "Prepares students for roles in pharmaceutical sciences and healthcare with hands-on laboratory training.",
      image: "/images/programs/bpharm.jpg",
    },
    departments: [
      {
        name: "Pharmaceutical Chemistry",
        description: "Study of chemical aspects of drug development.",
        image: "/images/departments/pharmchem.jpg",
      },
      {
        name: "Pharmacology",
        description: "Interaction between drugs and biological systems.",
        image: "/images/departments/pharmacology.jpg",
      },
    ],
    faculty: [
      {
        name: "Dr. Tanvir Hossain",
        position: "Associate Professor",
        photo: "/images/faculty/tanvir.jpg",
        specialization: "Clinical Pharmacy",
      },
    ],
    researchPrograms: [
      {
        title: "Drug Delivery Systems",
        description: "Innovative approaches for targeted drug delivery.",
      },
    ],
    curriculumOverview: {
      duration: "4 Years",
      totalCredits: 160,
      coreSubjects: [
        "Pharmaceutics",
        "Pharmacology",
        "Pharmaceutical Microbiology",
      ],
      electives: ["Regulatory Affairs", "Herbal Medicine"],
    },
    careerOpportunities: [
      "Hospital Pharmacist",
      "Medical Representative",
      "Drug Inspector",
    ],
    admissionRequirements: [
      "GPA 3.5 in SSC & HSC",
      "Biology & Chemistry required",
      "Admission test",
    ],
    tuitionFees: {
      perSemester: "BDT 80,000",
      totalProgramCost: "BDT 640,000",
      scholarshipsAvailable: true,
    },
    applyNowBanner: {
      text: "Become a healthcare innovator!",
      buttonText: "Apply Now",
      buttonLink: "/apply/bpharm",
    },
  },
  {
    programTitle: "Bachelor of Science in Environmental Science",
    about: {
      heading: "About the Program",
      description:
        "Equips students to address climate change, pollution control, and environmental management.",
      image: "/images/programs/environment.jpg",
    },
    departments: [
      {
        name: "Environmental Chemistry",
        description: "Chemical analysis of pollutants and their impact.",
        image: "/images/departments/envchem.jpg",
      },
      {
        name: "Climate Science",
        description: "Study of global climate systems and change.",
        image: "/images/departments/climate.jpg",
      },
    ],
    faculty: [
      {
        name: "Dr. Farzana Haque",
        position: "Professor",
        photo: "/images/faculty/farzana.jpg",
        specialization: "Environmental Toxicology",
      },
    ],
    researchPrograms: [
      {
        title: "Air Quality Monitoring",
        description: "Real-time analysis of air pollutants in urban areas.",
      },
    ],
    curriculumOverview: {
      duration: "4 Years",
      totalCredits: 132,
      coreSubjects: ["Ecology", "Environmental Law", "Soil Science"],
      electives: ["Renewable Energy", "Climate Risk Assessment"],
    },
    careerOpportunities: [
      "Environmental Consultant",
      "Policy Analyst",
      "Field Officer",
    ],
    admissionRequirements: [
      "GPA 3.0 in SSC & HSC",
      "Science background",
      "Interview",
    ],
    tuitionFees: {
      perSemester: "BDT 60,000",
      totalProgramCost: "BDT 480,000",
      scholarshipsAvailable: true,
    },
    applyNowBanner: {
      text: "Lead the green revolution!",
      buttonText: "Apply Now",
      buttonLink: "/apply/environment",
    },
  },
  {
    programTitle: "Bachelor of Laws (LLB)",
    about: {
      heading: "About the Program",
      description:
        "Trains students in legal principles, case analysis, and public policy for a career in law and justice.",
      image: "/images/programs/llb.jpg",
    },
    departments: [
      {
        name: "Constitutional Law",
        description: "Framework of government and fundamental rights.",
        image: "/images/departments/constitutional.jpg",
      },
      {
        name: "Criminal Law",
        description: "Study of crimes and legal penalties.",
        image: "/images/departments/criminal.jpg",
      },
    ],
    faculty: [
      {
        name: "Barrister Imran Zaman",
        position: "Assistant Professor",
        photo: "/images/faculty/imran.jpg",
        specialization: "International Law",
      },
    ],
    researchPrograms: [
      {
        title: "Cyber Law and Digital Rights",
        description: "Exploring internet law and user protections.",
      },
    ],
    curriculumOverview: {
      duration: "4 Years",
      totalCredits: 140,
      coreSubjects: ["Civil Law", "Criminal Law", "Law of Evidence"],
      electives: ["Environmental Law", "Cyber Law"],
    },
    careerOpportunities: ["Advocate", "Judge", "Legal Officer"],
    admissionRequirements: [
      "GPA 3.0 in SSC & HSC",
      "English required",
      "Written test",
    ],
    tuitionFees: {
      perSemester: "BDT 58,000",
      totalProgramCost: "BDT 464,000",
      scholarshipsAvailable: true,
    },
    applyNowBanner: {
      text: "Pursue justice, shape society!",
      buttonText: "Apply Now",
      buttonLink: "/apply/llb",
    },
  },
  {
    programTitle: "Bachelor of Science in Mathematics",
    about: {
      heading: "About the Program",
      description:
        "Develops strong analytical and problem-solving skills applicable in academia, finance, and data science.",
      image: "/images/programs/mathematics.jpg",
    },
    departments: [
      {
        name: "Pure Mathematics",
        description: "Abstract theories and mathematical logic.",
        image: "/images/departments/puremath.jpg",
      },
      {
        name: "Applied Mathematics",
        description: "Modeling real-world systems and computational methods.",
        image: "/images/departments/appliedmath.jpg",
      },
    ],
    faculty: [
      {
        name: "Dr. Khalid Hossain",
        position: "Professor",
        photo: "/images/faculty/khalid.jpg",
        specialization: "Numerical Analysis",
      },
    ],
    researchPrograms: [
      {
        title: "Mathematical Modeling of Epidemics",
        description: "Predictive models for disease transmission.",
      },
    ],
    curriculumOverview: {
      duration: "4 Years",
      totalCredits: 128,
      coreSubjects: ["Calculus", "Linear Algebra", "Differential Equations"],
      electives: ["Operations Research", "Mathematical Finance"],
    },
    careerOpportunities: ["Data Analyst", "Actuary", "Research Mathematician"],
    admissionRequirements: [
      "GPA 3.5 in SSC & HSC",
      "Math required",
      "Admission test",
    ],
    tuitionFees: {
      perSemester: "BDT 55,000",
      totalProgramCost: "BDT 440,000",
      scholarshipsAvailable: true,
    },
    applyNowBanner: {
      text: "Solve the world's hardest problems!",
      buttonText: "Apply Now",
      buttonLink: "/apply/mathematics",
    },
  },
  {
    programTitle: "Bachelor of Business Administration (BBA)",
    about: {
      heading: "About the Program",
      description:
        "Equips students with management, finance, marketing, and entrepreneurial skills for the corporate world.",
      image: "/images/programs/bba.jpg",
    },
    departments: [
      {
        name: "Marketing",
        description: "Strategies for market research, branding, and sales.",
        image: "/images/departments/marketing.jpg",
      },
      {
        name: "Finance",
        description: "Financial management, investment, and risk analysis.",
        image: "/images/departments/finance.jpg",
      },
    ],
    faculty: [
      {
        name: "Dr. Rasheda Akhter",
        position: "Professor",
        photo: "/images/faculty/rasheda.jpg",
        specialization: "Strategic Management",
      },
    ],
    researchPrograms: [
      {
        title: "Consumer Behavior in Digital Era",
        description:
          "Study on changing buying patterns influenced by digital platforms.",
      },
    ],
    curriculumOverview: {
      duration: "4 Years",
      totalCredits: 130,
      coreSubjects: ["Accounting", "Management", "Marketing"],
      electives: ["E-Commerce", "Entrepreneurship"],
    },
    careerOpportunities: [
      "Business Analyst",
      "Marketing Manager",
      "Entrepreneur",
    ],
    admissionRequirements: [
      "GPA 3.5 in SSC & HSC",
      "Math or Business Studies required",
      "Admission test",
    ],
    tuitionFees: {
      perSemester: "BDT 65,000",
      totalProgramCost: "BDT 520,000",
      scholarshipsAvailable: true,
    },
    applyNowBanner: {
      text: "Start your journey to corporate success!",
      buttonText: "Apply Now",
      buttonLink: "/apply/bba",
    },
  },
  {
    programTitle: "Bachelor of Arts in English",
    about: {
      heading: "About the Program",
      description:
        "Focuses on English literature, linguistics, and critical thinking for careers in education, writing, and media.",
      image: "/images/programs/english.jpg",
    },
    departments: [
      {
        name: "Literature",
        description: "Study of classical and modern literary works.",
        image: "/images/departments/literature.jpg",
      },
      {
        name: "Linguistics",
        description: "Scientific study of language and its structure.",
        image: "/images/departments/linguistics.jpg",
      },
    ],
    faculty: [
      {
        name: "Dr. Nasrin Ahmed",
        position: "Professor",
        photo: "/images/faculty/nasrin.jpg",
        specialization: "Postcolonial Literature",
      },
    ],
    researchPrograms: [
      {
        title: "Digital Narratives and Modern Media",
        description: "Analyzing storytelling in digital platforms.",
      },
    ],
    curriculumOverview: {
      duration: "4 Years",
      totalCredits: 120,
      coreSubjects: ["English Literature", "Phonetics", "Sociolinguistics"],
      electives: ["Translation Studies", "Creative Writing"],
    },
    careerOpportunities: ["Teacher", "Content Writer", "Editor"],
    admissionRequirements: [
      "GPA 3.0 in SSC & HSC",
      "Strong English skills",
      "Interview",
    ],
    tuitionFees: {
      perSemester: "BDT 48,000",
      totalProgramCost: "BDT 384,000",
      scholarshipsAvailable: true,
    },
    applyNowBanner: {
      text: "Explore the power of words!",
      buttonText: "Apply Now",
      buttonLink: "/apply/english",
    },
  },
  {
    programTitle:
      "Bachelor of Science in Computer Science and Engineering (CSE)",
    about: {
      heading: "About the Program",
      description:
        "Prepares students with solid foundations in algorithms, software development, and systems design.",
      image: "/images/programs/cse.jpg",
    },
    departments: [
      {
        name: "Software Engineering",
        description: "Design and development of scalable applications.",
        image: "/images/departments/software.jpg",
      },
      {
        name: "Cybersecurity",
        description: "Security practices to protect digital systems.",
        image: "/images/departments/cyber.jpg",
      },
    ],
    faculty: [
      {
        name: "Dr. Anisur Rahman",
        position: "Professor",
        photo: "/images/faculty/anisur.jpg",
        specialization: "Artificial Intelligence",
      },
    ],
    researchPrograms: [
      {
        title: "AI for Social Good",
        description: "Using machine learning to address societal challenges.",
      },
    ],
    curriculumOverview: {
      duration: "4 Years",
      totalCredits: 136,
      coreSubjects: ["Algorithms", "Data Structures", "Database Systems"],
      electives: ["AI & Machine Learning", "Blockchain"],
    },
    careerOpportunities: [
      "Software Engineer",
      "Data Scientist",
      "DevOps Engineer",
    ],
    admissionRequirements: [
      "GPA 4.0 in SSC & HSC",
      "Math and Physics required",
      "Admission test",
    ],
    tuitionFees: {
      perSemester: "BDT 75,000",
      totalProgramCost: "BDT 600,000",
      scholarshipsAvailable: true,
    },
    applyNowBanner: {
      text: "Code your way into the future!",
      buttonText: "Apply Now",
      buttonLink: "/apply/cse",
    },
  },
  {
    programTitle:
      "Bachelor of Science in Electrical and Electronic Engineering (EEE)",
    about: {
      heading: "About the Program",
      description:
        "Focuses on electronics, circuits, power systems, and control engineering for tomorrow's tech leaders.",
      image: "/images/programs/eee.jpg",
    },
    departments: [
      {
        name: "Power Systems",
        description:
          "Generation, transmission, and distribution of electricity.",
        image: "/images/departments/power.jpg",
      },
      {
        name: "Telecommunication",
        description: "Modern communication technologies and networks.",
        image: "/images/departments/telecom.jpg",
      },
    ],
    faculty: [
      {
        name: "Dr. Zubair Ahmed",
        position: "Professor",
        photo: "/images/faculty/zubair.jpg",
        specialization: "Control Systems",
      },
    ],
    researchPrograms: [
      {
        title: "Smart Grid Technology",
        description:
          "Improving efficiency and sustainability in energy systems.",
      },
    ],
    curriculumOverview: {
      duration: "4 Years",
      totalCredits: 138,
      coreSubjects: ["Circuit Theory", "Electronics", "Signal Processing"],
      electives: ["Robotics", "Renewable Energy"],
    },
    careerOpportunities: [
      "Electrical Engineer",
      "Telecom Engineer",
      "Control Engineer",
    ],
    admissionRequirements: [
      "GPA 3.8 in SSC & HSC",
      "Math & Physics mandatory",
      "Admission test",
    ],
    tuitionFees: {
      perSemester: "BDT 70,000",
      totalProgramCost: "BDT 560,000",
      scholarshipsAvailable: true,
    },
    applyNowBanner: {
      text: "Power the world with innovation!",
      buttonText: "Apply Now",
      buttonLink: "/apply/eee",
    },
  },
  {
    programTitle: "Bachelor of Science in Civil Engineering",
    about: {
      heading: "About the Program",
      description:
        "Focuses on infrastructure design, urban development, and environmental safety with practical field applications.",
      image: "/images/programs/civil.jpg",
    },
    departments: [
      {
        name: "Structural Engineering",
        description: "Analysis and design of buildings and bridges.",
        image: "/images/departments/structure.jpg",
      },
      {
        name: "Transportation Engineering",
        description: "Design and planning of transportation systems.",
        image: "/images/departments/transport.jpg",
      },
    ],
    faculty: [
      {
        name: "Engr. Kamrul Islam",
        position: "Associate Professor",
        photo: "/images/faculty/kamrul.jpg",
        specialization: "Geotechnical Engineering",
      },
    ],
    researchPrograms: [
      {
        title: "Sustainable Urban Planning",
        description: "Innovative solutions for smart and resilient cities.",
      },
    ],
    curriculumOverview: {
      duration: "4 Years",
      totalCredits: 140,
      coreSubjects: ["Mechanics", "Fluid Dynamics", "Construction Materials"],
      electives: ["Disaster Management", "Urban Drainage"],
    },
    careerOpportunities: ["Civil Engineer", "Site Engineer", "Project Manager"],
    admissionRequirements: [
      "GPA 3.5 in SSC & HSC",
      "Math & Physics required",
      "Admission test",
    ],
    tuitionFees: {
      perSemester: "BDT 72,000",
      totalProgramCost: "BDT 576,000",
      scholarshipsAvailable: true,
    },
    applyNowBanner: {
      text: "Build the future with confidence!",
      buttonText: "Apply Now",
      buttonLink: "/apply/civil",
    },
  },
];
