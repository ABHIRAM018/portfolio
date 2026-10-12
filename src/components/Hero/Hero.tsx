import { ArrowRight, Github, Mail, Download, MapPin, Sparkles, Code2, Brain, Layers } from 'lucide-react';
import { personalInfo } from '@/data/personalInfo';
import { socialLinks } from '@/data/socialLinks';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary-500/20 to-accent-500/10 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-accent-500/15 to-primary-500/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-200/50 dark:border-primary-800/40 text-sm font-medium text-primary-700 dark:text-primary-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              Available for opportunities
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 dark:text-white font-display leading-[1.1]">
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 font-display">
              {personalInfo.title}
            </p>

            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-primary-500" />
              {personalInfo.location}
            </div>

            {/* Quick highlight chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { icon: Code2, label: 'Full-Stack' },
                { icon: Brain, label: 'AI/ML' },
                { icon: Layers, label: 'ERP Systems' },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/80 dark:bg-slate-800/50 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50"
                >
                  <Icon className="w-3.5 h-3.5 text-primary-500 dark:text-primary-400" />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-7 grid max-w-xl grid-cols-3 divide-x divide-primary-200/70 rounded-2xl border border-primary-200/70 bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:divide-primary-800/60 dark:border-primary-800/60 dark:bg-slate-900/50">
              <div className="pr-3">
                <p className="text-lg font-bold text-primary-950 dark:text-white">5+</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Projects</p>
              </div>
              <div className="px-3">
                <p className="text-lg font-bold text-primary-950 dark:text-white">3</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Core areas</p>
              </div>
              <div className="pl-3">
                <p className="text-lg font-bold text-accent-600 dark:text-accent-400">Open</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">To connect</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium text-sm hover:shadow-xl hover:shadow-primary-500/30 hover:scale-[1.02] transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm hover:bg-surface dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-[1.02]"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm hover:bg-surface dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              {personalInfo.resumeUrl !== 'YOUR_RESUME_URL' && (
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm hover:bg-surface dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              )}
            </div>
          </div>

          {/* Profile image */}
          <div className="order-1 lg:order-2 flex justify-center animate-slide-in-right">
            <div className="relative">
              {/* Animated gradient ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-500 rounded-[2rem] blur-2xl opacity-30 animate-gradient-shift bg-[length:200%_200%]" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-accent-500 rounded-[2rem] opacity-50" />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2rem] overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating badge - top right */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl px-4 py-3 border border-slate-200 dark:border-slate-700 animate-float">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 text-white">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider">Specialization</p>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Full-Stack Dev</p>
                  </div>
                </div>
              </div>

              {/* Floating badge - bottom left */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl px-4 py-3 border border-slate-200 dark:border-slate-700 animate-float" style={{ animationDelay: '2s' }}>
                <p className="text-2xl font-bold gradient-text font-display">5+</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider">Projects Built</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex justify-center mt-16">
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-gradient-to-b from-primary-500 to-accent-500 animate-bounce-slow" />
          </div>
        </div>
      </div>
    </section>
  );
}
