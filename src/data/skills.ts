export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & UI',
    icon: 'layout',
    skills: ['React.js', 'Angular', 'Bootstrap', 'Tailwind CSS', 'Responsive Web Design'],
  },
  {
    title: 'Backend & APIs',
    icon: 'server',
    skills: ['Node.js', 'Flask', 'RESTful APIs', 'JDBC'],
  },
  {
    title: 'Languages',
    icon: 'code',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'SQL', 'PHP', 'HTML5', 'CSS3'],
  },
  {
    title: 'Databases & DevOps',
    icon: 'database',
    skills: ['MySQL', 'SQLite', 'Firebase', 'Git', 'GitHub', 'Web hosting solutions'],
  },
  {
    title: 'Specializations',
    icon: 'wrench',
    skills: [
      'ERP Integration',
      'Data Analysis Techniques',
      'React Development',
      'PHP Development',
      'SQL Databases',
    ],
  },
];