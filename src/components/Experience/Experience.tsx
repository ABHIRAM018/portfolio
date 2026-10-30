import { Briefcase } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'Software Developer',
    company: 'Abhimo Technology Private Ltd',
    duration: '3 months',
    responsibilities: [
      'Developed applications using PHP and React',
      'Worked on web application development',
      'Worked with hosting and deployment',
      'Developed and maintained application features',
    ],
  },
  {
    role: 'ERP Developer',
    company: 'PEPA Enterprise',
    duration: 'Ongoing',
    responsibilities: [
      'Developed ERP modules',
      'Worked on database-driven applications',
      'Implemented ERP functionality',
      'Worked on application improvements',
    ],
  },
];

export default function Experience() {
  const { ref, revealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 sm:py-28 bg-paper dark:bg-slate-950 reveal ${revealed ? 'revealed' : ''}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold gradient-text tracking-wider uppercase font-display">
            Career path
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-display">
            Experience
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 -translate-x-1/2 opacity-30" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative flex gap-6 sm:gap-0 mb-8 ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 ring-4 ring-slate-50 dark:ring-slate-950 shadow-lg shadow-primary-500/30" />
              </div>

              {/* Content */}
              <div className={`pl-12 sm:pl-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'}`}>
                <div className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-950/40 dark:to-accent-950/40 text-xs font-semibold text-primary-600 dark:text-primary-400 border border-primary-200/50 dark:border-primary-800/40">
                      <Briefcase className="w-3 h-3" />
                      {exp.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">{exp.role}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{exp.company}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer */}
              <div className="hidden sm:block sm:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}