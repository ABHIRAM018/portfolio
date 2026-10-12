import { GraduationCap, Award, MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
  scoreLabel: string;
}

const educationItems: EducationItem[] = [
  {
    degree: 'Master of Computer Applications',
    institution: 'AJ Institute of Engineering and Technology, Mangaluru',
    year: '2024–2026',
    score: '8.2',
    scoreLabel: 'SGPA',
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'St Aloysius College (Autonomous), Mangaluru',
    year: '2021–2024',
    score: '7.2',
    scoreLabel: 'CGPA',
  },
];

const achievements = [
  'Palo Alto Networks Cybersecurity Academy',
  'NPTEL Data Mining',
  '1st Prize — Product Launch',
  '1st Place — TECHNO HIVE, Nitte Semaphore 2025–26',
  'Technical Head — AAKAR 2025',
  'Workshop Conductor — Programming Languages & AI',
];

export default function Education() {
  const { ref, revealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="education"
      ref={ref}
      className={`py-20 sm:py-28 bg-white dark:bg-slate-900 reveal ${revealed ? 'revealed' : ''}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold gradient-text tracking-wider uppercase font-display">
            Academic background
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-display">
            Education
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {educationItems.map((item) => (
            <div
              key={item.degree}
              className="group relative p-6 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-slate-700/50 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </span>
                  <div className="text-right">
                    <span className="text-3xl font-bold gradient-text font-display">{item.score}</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.scoreLabel}</p>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white font-display">{item.degree}</h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <MapPin className="w-4 h-4 shrink-0" />
                  {item.institution}
                </div>
                <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">{item.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements & Certifications */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold gradient-text tracking-wider uppercase font-display">
              Recognition
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-display">
              Achievements & Certifications
            </h2>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement}
                className="group flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-slate-700/50 hover:border-accent-300 dark:hover:border-accent-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shrink-0 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-5 h-5" />
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
