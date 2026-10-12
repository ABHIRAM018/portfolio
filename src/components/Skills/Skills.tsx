import { Layout, Server, Database, Wrench, type LucideIcon } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  database: Database,
  wrench: Wrench,
};

const categoryGradients: Record<string, string> = {
  Frontend: 'from-primary-600 to-accent-500',
  Backend: 'from-secondary-500 to-primary-600',
  Database: 'from-accent-600 to-accent-400',
  Tools: 'from-primary-500 to-secondary-400',
};

export default function Skills() {
  const { ref, revealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 sm:py-28 bg-paper dark:bg-slate-950 reveal ${revealed ? 'revealed' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold gradient-text tracking-wider uppercase font-display">
            What I work with
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-display">
            Skills & Technologies
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] ?? Wrench;
            const gradient = categoryGradients[category.title] ?? 'from-primary-500 to-accent-500';
            return (
              <div
                key={category.title}
                className="group relative p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-6 h-6" />
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 dark:hover:from-primary-950/40 dark:hover:to-accent-950/40 hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
