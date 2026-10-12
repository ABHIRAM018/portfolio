import { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import type { Project, ProjectCategory } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onMoreDetails: (project: Project) => void;
}

const categoryStyles: Record<ProjectCategory, { badge: string; glow: string }> = {
  'Full Stack': {
    badge: 'bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-300 border-primary-500/30',
    glow: 'from-primary-500/20 to-accent-500/20',
  },
  Web: {
    badge: 'bg-accent-500/10 dark:bg-accent-500/20 text-accent-600 dark:text-accent-300 border-accent-500/30',
    glow: 'from-accent-500/20 to-primary-500/20',
  },
  'AI/ML': {
    badge: 'bg-secondary-500/10 dark:bg-secondary-500/20 text-secondary-600 dark:text-secondary-300 border-secondary-500/30',
    glow: 'from-secondary-500/20 to-accent-500/20',
  },
  Desktop: {
    badge: 'bg-accent-500/10 dark:bg-accent-500/20 text-accent-600 dark:text-accent-300 border-accent-500/30',
    glow: 'from-accent-500/20 to-primary-500/20',
  },
};

export default function ProjectCard({ project, onMoreDetails }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const style = categoryStyles[project.category];

  return (
    <article className="group relative flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 transition-all duration-500">
      {/* Project image */}
      <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        {!imageLoaded && <div className="absolute inset-0 animate-pulse bg-slate-200 dark:bg-slate-700" />}
        <img
          src={project.screenshots[0]}
          alt={project.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t ${style.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${style.badge}`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">{project.name}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Tech badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 mt-auto">
          <button
            onClick={() => onMoreDetails(project)}
            className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold gradient-text hover:gap-2.5 transition-all"
          >
            More Details
            <ArrowRight className="w-4 h-4 text-primary-500 group-hover/btn:translate-x-1 transition-transform" />
          </button>
          <div className="flex items-center gap-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} GitHub repository`}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live demo`}
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
