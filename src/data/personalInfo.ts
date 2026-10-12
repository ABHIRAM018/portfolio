export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  about: string;
  summary: string[];
  resumeUrl: string;
  profileImage: string;
  email: string;
  phone: string;
  location: string;
}

export const personalInfo: PersonalInfo = {
  name: 'ABHIRAM',
  title: 'MCA Full-Stack Developer',
  tagline: 'Building modern, scalable and user-friendly applications.',
  about:
    "I am an MCA graduate and Full-Stack Developer with experience in Java, Python, React, Angular, Node.js, PHP and MySQL. I enjoy developing practical software solutions that solve real-world problems. My interests include full-stack development, ERP systems, AI-powered applications, UI/UX and database-driven applications.",
  summary: [
    'MCA Graduate',
    'Full-Stack Developer',
    'AI/ML Project Experience',
    'ERP Development',
    'Web Application Development',
  ],
  resumeUrl: 'YOUR_RESUME_URL',
  profileImage: '/Polished_Corporate_Portrait_Outdoors.png',
  email: 'abhiramnellyadi018@gmail.com',
  phone: '+91 XXXXX XXXXX',
  location: 'Mangaluru, Karnataka, India',
};
