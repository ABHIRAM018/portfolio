export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'layout',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Angular',
      'Bootstrap',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: ['Java', 'Python', 'Node.js', 'PHP', 'Flask', 'JDBC'],
  },
  {
    title: 'Database',
    icon: 'database',
    skills: ['MySQL', 'SQLite', 'Firebase'],
  },
  {
    title: 'Tools',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva'],
  },
];
