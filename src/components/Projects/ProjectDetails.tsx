import { useEffect, useRef } from 'react';
import { ArrowLeft, ExternalLink, CheckCircle2, Target, Lightbulb, User, Star, Cpu, Wrench, AlertTriangle, TrendingUp } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
}

type Section = {
  title: string;
  icon: typeof Target;
  content?: string;
  list?: string[];
};

export default function ProjectDetails({ project, onBack }: ProjectDetailsProps) {
  const detailRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [project.id]);

  const sections: Section[] = [
    { title: 'Project Overview', icon: Target, content: project.fullDescription },
    { title: 'Problem', icon: AlertTriangle, content: project.problem },
    { title: 'Solution', icon: Lightbulb, content: project.solution },
    { title: 'My Role & Contribution', icon: User, list: project.contribution },
    { title: 'Key Features', icon: Star, list: project.features },
    { title: 'Technical Implementation', icon: Cpu, list: project.technicalImplementation },
    { title: 'Technologies Used', icon: Wrench, list: project.technologies },
    { title: 'Challenges & Solutions', icon: AlertTriangle, list: project.challenges },
    { title: 'Results / Impact', icon: TrendingUp, content: project.results },
  ];

  const isDisclaimerProject = project.id === 'arthricare-ai';

  return (
    <div ref={detailRef} className="min-h-screen pt-20 pb-20 bg-paper dark:bg-slate-950 animate-detail-enter">
      {/* Hero header */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img
          src={project.screenshots[0]}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-950 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors mb-4 glass px-4 py-2 rounded-xl border border-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </button>
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-display">{project.name}</h1>
            <p className="mt-3 text-lg text-slate-200 max-w-2xl">{project.shortDescription}</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Tech badges + links */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-950/40 dark:to-accent-950/40 text-primary-700 dark:text-primary-300 border border-primary-200/50 dark:border-primary-800/40"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm hover:scale-105 border border-slate-200 dark:border-slate-700 transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-primary-500/30 hover:scale-105 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shrink-0 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                    {section.title}
                  </h2>
                </div>

                {section.content && (
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed ml-0 sm:ml-13 text-base">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <div className="grid sm:grid-cols-2 gap-2 ml-0 sm:ml-13">
                    {section.list.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gradient-to-br from-primary-500 to-accent-500 shrink-0 mt-0.5 text-primary-500 dark:text-primary-400" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Disclaimer for ArthriCare AI */}
          {isDisclaimerProject && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-accent-50 to-sand/40 dark:from-accent-900/30 dark:to-primary-900/30 border border-accent-200 dark:border-accent-800">
              <p className="text-sm text-primary-800 dark:text-accent-100">
                This project is for educational and demonstration purposes and is not a medical diagnostic system.
              </p>
            </div>
          )}

          {/* Bottom links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm hover:scale-105 border border-slate-200 dark:border-slate-700 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </button>
            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm hover:scale-105 border border-slate-200 dark:border-slate-700 transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-primary-500/30 hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
