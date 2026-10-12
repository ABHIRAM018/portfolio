import { useState } from 'react';
import { projects, type Project, type ProjectCategory } from '@/data/projects';
import ProjectCard from '@/components/Projects/ProjectCard';
import ProjectDetails from '@/components/Projects/ProjectDetails';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const filters: (ProjectCategory | 'All')[] = ['All', 'Full Stack', 'Web', 'AI/ML', 'Desktop'];

export default function Projects() {
  const { ref, revealed } = useScrollReveal<HTMLElement>();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return (
      <ProjectDetails
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 sm:py-28 bg-white dark:bg-slate-900 reveal ${revealed ? 'revealed' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold gradient-text tracking-wider uppercase font-display">
            My work
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-display">
            Projects
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                activeFilter === filter
                  ? 'text-white bg-gradient-to-r from-primary-600 to-accent-500 shadow-lg shadow-primary-500/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onMoreDetails={setSelectedProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
