import { GraduationCap, Code2, Brain, Building2, Globe } from 'lucide-react';
import { personalInfo } from '@/data/personalInfo';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const summaryIcons: Record<string, typeof GraduationCap> = {
  'MCA Graduate': GraduationCap,
  'Full-Stack Developer': Code2,
  'AI/ML Project Experience': Brain,
  'ERP Development': Building2,
  'Web Application Development': Globe,
};

export default function About() {
  const { ref, revealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 sm:py-28 bg-white dark:bg-slate-900 reveal ${revealed ? 'revealed' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold gradient-text tracking-wider uppercase font-display">
            Get to know me
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-display">
            About Me
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Description */}
          <div className="lg:col-span-3">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200/60 dark:border-slate-700/50 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl" />
              <p className="relative text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {personalInfo.about}
              </p>
            </div>
          </div>

          {/* Summary cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
            {personalInfo.summary.map((item) => {
              const Icon = summaryIcons[item] ?? Code2;
              return (
                <div
                  key={item}
                  className="group flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-950/50 dark:to-accent-950/50 text-primary-600 dark:text-primary-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
