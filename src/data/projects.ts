export type ProjectCategory = 'Full Stack' | 'Web' | 'AI/ML' | 'Desktop';

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  contribution: string[];
  features: string[];
  technicalImplementation: string[];
  technologies: string[];
  challenges: string[];
  results: string;
  category: ProjectCategory;
  screenshots: string[];
  githubUrl: string;
  liveDemoUrl: string;
}

export const projects: Project[] = [
  {
    id: 'college-erp',
    name: 'College ERP',
    shortDescription:
      'A multi-college academic and administrative management system that centralizes college operations into one platform with role-based access control.',
    fullDescription:
      'College ERP is a multi-college academic and administrative management system designed to centralize college operations into one platform. It manages students, faculty, departments, admissions, attendance, examinations, results, timetable, accounts, hostel and other administrative activities.',
    problem:
      'Many college activities can involve separate systems and manual processes, making student management, attendance, examinations, fees and administration difficult to manage efficiently.',
    solution:
      'Developed a centralized ERP platform with role-based access so different users can access the modules and information relevant to their responsibilities.',
    contribution: [
      'Designed and developed ERP modules',
      'Developed frontend interfaces',
      'Worked with database structure and relationships',
      'Implemented role-based access',
      'Developed student management',
      'Developed faculty management',
      'Developed admission workflows',
      'Implemented attendance management',
      'Implemented results and marks management',
      'Worked on accounts and fee modules',
      'Worked on examination modules',
      'Worked on timetable modules',
      'Developed role-specific dashboards',
      'Worked on backend/database integration',
    ],
    features: [
      'Multi-college management',
      'Super Admin',
      'Principal',
      'HOD',
      'Faculty',
      'Student',
      'Admissions',
      'Student management',
      'Faculty management',
      'Attendance',
      'Results',
      'Examination',
      'Timetable',
      'Accounts and fees',
      'Hostel management',
      'Payroll',
      'Role-based access',
      'Student dashboard',
      'Faculty dashboard',
    ],
    technicalImplementation: [
      'Role-Based Access Control',
      'Authentication',
      'Authorization',
      'CRUD operations',
      'Relational database design',
      'Form validation',
      'Data filtering',
      'College/department-based access',
      'Reusable React components',
      'Backend integration',
    ],
    technologies: ['React', 'MySQL', 'PHP', 'Node.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    challenges: [
      'Managing multiple user roles',
      'Separating college and department data',
      'Managing relationships between students, faculty and departments',
      'Designing complex ERP workflows',
      'Creating reusable components',
    ],
    results:
      'Created a centralized platform that brings multiple academic and administrative workflows into a single system.',
    category: 'Full Stack',
    screenshots: [
      'https://images.pexels.com/photos/9159042/pexels-photo-9159042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8197508/pexels-photo-8197508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    githubUrl: 'https://github.com/ABHIRAM018?tab=repositories',
    liveDemoUrl: 'https://app.pepa.co.in/',
  },
  {
    id: 'techmaze',
    name: 'TECHMAZE',
    shortDescription:
      'A coding and programming practice platform where students can learn programming through coding challenges across multiple languages.',
    fullDescription:
      'TECHMAZE is a coding and programming practice platform designed to help students learn programming through coding challenges. It provides a structured environment for students to practice programming problems and explore multiple programming languages in one place.',
    problem:
      'Students need a simple platform where they can practice programming problems and explore multiple programming languages in one place.',
    solution:
      'Developed a web-based coding challenge platform with student and admin functionality.',
    contribution: [
      'Developed frontend interfaces',
      'Created student authentication screens',
      'Developed challenge browsing functionality',
      'Implemented challenge management',
      'Worked on admin functionality',
      'Connected frontend with backend',
      'Designed responsive interfaces',
      'Worked on reusable components',
    ],
    features: [
      'Student registration/login',
      'Programming challenges',
      'Coding practice',
      'Multiple programming languages',
      'Challenge management',
      'Admin management',
      'Student dashboard',
    ],
    technicalImplementation: [
      'Angular component architecture',
      'Routing',
      'Form handling',
      'API integration',
      'CRUD operations',
      'Responsive UI',
      'Authentication',
    ],
    technologies: ['Angular', 'Bootstrap', 'Node.js', 'JavaScript', 'TypeScript'],
    challenges: [
      'Structuring coding challenges',
      'Managing student/admin access',
      'Creating reusable components',
      'Building responsive interfaces',
    ],
    results:
      'Created a structured platform for students to practice programming challenges and explore multiple programming languages.',
    category: 'Web',
    screenshots: [
      'https://images.pexels.com/photos/34803969/pexels-photo-34803969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/5473892/pexels-photo-5473892.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    githubUrl: 'https://github.com/ABHIRAM018/TECHMAZE-INTERACTIVE-CODING-LANGUAGE-PLATFORM-',
    liveDemoUrl: '',
  },
  {
    id: 'smart-inventory',
    name: 'Smart Inventory Management',
    shortDescription:
      'A Java desktop application for inventory management with Apriori-based analysis to identify product associations and support decision making.',
    fullDescription:
      'Smart Inventory Management is a Java desktop application designed to manage inventory and assist with inventory-related decision making. It combines product tracking with Apriori-based analysis to identify useful product associations.',
    problem:
      'Traditional inventory management can make it difficult to efficiently track products, stock and purchasing patterns.',
    solution:
      'Developed a Java-based inventory management application with product tracking and Apriori-based analysis to identify useful product associations.',
    contribution: [
      'Designed application interface',
      'Developed inventory management functionality',
      'Developed product management',
      'Implemented database operations',
      'Integrated SQLite',
      'Implemented Apriori algorithm',
      'Developed analysis functionality',
      'Tested application workflows',
    ],
    features: [
      'Product management',
      'Stock management',
      'Inventory tracking',
      'Sales data management',
      'Product analysis',
      'Apriori algorithm',
      'Association analysis',
      'Decision support',
    ],
    technicalImplementation: [
      'Java Swing',
      'SQLite',
      'JDBC',
      'CRUD operations',
      'Apriori algorithm',
      'Data processing',
      'Association rule analysis',
    ],
    technologies: ['Java', 'Java Swing', 'SQLite', 'JDBC', 'Apriori Algorithm'],
    challenges: [
      'Implementing the Apriori algorithm efficiently',
      'Designing a clean desktop UI with Java Swing',
      'Handling association rule mining on sales data',
      'Integrating SQLite with Java via JDBC',
    ],
    results:
      '200+ products handled, approximately 80% reduction in errors, and approximately 50% improvement in decision speed.',
    category: 'Desktop',
    screenshots: [
      'https://images.pexels.com/photos/7857560/pexels-photo-7857560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7857526/pexels-photo-7857526.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    githubUrl: 'https://github.com/ABHIRAM018?tab=repositories',
    liveDemoUrl: '',
  },
  {
    id: 'arthricare-ai',
    name: 'ArthriCare AI',
    shortDescription:
      'An AI-assisted application that analyzes X-ray images for arthritis-related predictions with Grad-CAM visual explanations.',
    fullDescription:
      'ArthriCare AI is an AI-assisted application designed to analyze X-ray images for arthritis-related predictions and provide visual explanations using Grad-CAM. It combines image-based AI prediction with visualization to make model predictions easier to understand.',
    problem:
      'AI image classification models can provide predictions without clearly showing which areas of an image influenced the prediction.',
    solution:
      'Built an application combining image-based AI prediction with Grad-CAM visualization to make model predictions easier to understand.',
    contribution: [
      'Developed React frontend',
      'Created image upload interface',
      'Integrated React frontend with Flask backend',
      'Implemented prediction workflow',
      'Integrated AI/ML model',
      'Implemented Grad-CAM visualization',
      'Developed result display',
      'Worked with SQLite',
    ],
    features: [
      'X-ray image upload',
      'AI-based prediction',
      'Prediction result',
      'Grad-CAM visualization',
      'Image analysis',
      'User-friendly dashboard',
    ],
    technicalImplementation: [
      'React',
      'TypeScript',
      'Flask',
      'Python',
      'Image processing',
      'AI/ML inference',
      'Grad-CAM',
      'API communication',
      'SQLite',
    ],
    technologies: ['React', 'TypeScript', 'Flask', 'Python', 'SQLite', 'AI/ML', 'Grad-CAM'],
    challenges: [
      'Connecting frontend with ML backend',
      'Handling image uploads',
      'Displaying predictions',
      'Generating visual explanations',
      'Managing image-processing workflow',
    ],
    results:
      'Provides an explainable AI workflow by combining prediction results with Grad-CAM visualizations.',
    category: 'AI/ML',
    screenshots: [
      'https://images.pexels.com/photos/5723884/pexels-photo-5723884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/5723876/pexels-photo-5723876.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    githubUrl: 'https://github.com/ABHIRAM018?tab=repositories',
    liveDemoUrl: '',
  },
  {
    id: 'icanproperty',
    name: 'iCanProperty',
    shortDescription:
      'A property platform for Mangalore and Coastal Karnataka combining property discovery with an AI-powered chatbot assistant.',
    fullDescription:
      'iCanProperty is a property platform focused on Mangalore and Coastal Karnataka that combines property discovery with an AI-powered chatbot assistant. Users can browse property listings, search for properties and interact with an AI assistant for quick answers about properties and locations.',
    problem:
      'Users searching for properties may need to browse multiple listings while also looking for quick answers about properties and locations.',
    solution:
      'Developed a property platform with property listings, search functionality and an AI assistant for interacting with property information.',
    contribution: [
      'Developed frontend interfaces',
      'Designed property listing pages',
      'Implemented property search',
      'Integrated AI chatbot',
      'Worked with database integration',
      'Developed responsive UI',
      'Worked on property data management',
    ],
    features: [
      'Property listings',
      'Property search',
      'Property details',
      'Location-based property discovery',
      'AI chatbot',
      'Property data management',
      'Responsive interface',
    ],
    technicalImplementation: [
      'React',
      'MySQL',
      'AI chatbot integration',
      'Llama-based AI',
      'Property data management',
      'Search/filter functionality',
      'Responsive UI',
    ],
    technologies: ['React', 'MySQL', 'AI', 'Llama', 'JavaScript', 'TypeScript'],
    challenges: [
      'Managing property information',
      'Designing search/filter functionality',
      'Integrating AI with the property platform',
      'Connecting frontend with database',
      'Creating responsive interfaces',
    ],
    results:
      'Created a centralized property discovery platform with an integrated AI assistant for interacting with property information.',
    category: 'Web',
    screenshots: [
      'https://images.pexels.com/photos/8482510/pexels-photo-8482510.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7031581/pexels-photo-7031581.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    githubUrl: 'https://github.com/ABHIRAM018?tab=repositories',
    liveDemoUrl: 'https://www.icanproperty.com/',
  },
  {
    id: 'shrutha-portal',
    name: 'Shrutha Portal',
    shortDescription:
      'An online job and career platform that connects job seekers with employers through job discovery, applications, recruitment, and career support.',
    fullDescription:
      'Shrutha Portal is an online job and career platform that helps candidates discover opportunities, build professional resumes, apply for jobs, and track application progress. Employers can publish vacancies, review candidate profiles, and support their recruitment process from one platform.',
    problem:
      'Job seekers and employers need a focused platform that brings job discovery, professional profiles, applications, recruitment, and career guidance together in one place.',
    solution:
      'Shrutha Portal provides a complete career workflow for candidates and employers, from registration and job search through applications, alerts, reviews, and recruitment decisions.',
    contribution: [
      'Worked on the job and career platform experience',
      'Supported job discovery and search workflows',
      'Worked on candidate profile and resume experiences',
      'Supported job application and tracking flows',
      'Worked on employer recruitment workflows',
      'Contributed to career guidance and company review experiences',
    ],
    features: [
      'Job search by title, skills, and location',
      'Candidate registration and login',
      'Professional profile creation',
      'Resume builder',
      'Job applications',
      'Application tracking',
      'Job alerts',
      'Career guidance and interview resources',
      'Company reviews',
      'Employer vacancy publishing',
      'Candidate profile and resume review',
    ],
    technicalImplementation: [
      'Candidate and employer account flows',
      'Job search and filtering',
      'Profile and resume data management',
      'Application status tracking',
      'Recruitment workflow support',
      'Responsive web experience',
    ],
    technologies: ['Web Platform', 'Job Search', 'Resume Builder', 'Recruitment', 'Responsive UI'],
    challenges: [
      'Supporting two different user journeys',
      'Organizing detailed job and candidate information',
      'Making job search efficient and easy to use',
      'Presenting application updates clearly',
      'Balancing candidate and employer recruitment needs',
    ],
    results:
      'Created a centralized career platform that supports job seekers throughout their search and helps employers manage candidate discovery and recruitment.',
    category: 'Web',
    screenshots: [
      'https://images.pexels.com/photos/4225927/pexels-photo-4225927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4226115/pexels-photo-4226115.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    githubUrl: 'https://github.com/ABHIRAM018?tab=repositories',
    liveDemoUrl: 'https://shrutha.com/',
  },
];
