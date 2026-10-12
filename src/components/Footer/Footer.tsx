import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/personalInfo';
import { socialLinks } from '@/data/socialLinks';

const socialItems = [
  { label: 'GitHub', url: socialLinks.github, Icon: Github },
  { label: 'LinkedIn', url: socialLinks.linkedin, Icon: Linkedin },
  { label: 'Email', url: `mailto:${socialLinks.email}`, Icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 border-t border-slate-800 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-primary-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-2">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl overflow-hidden border-2 border-slate-700 shadow-lg shadow-primary-500/20">
                <img src={personalInfo.profileImage} alt="" className="w-full h-full object-cover" />
              </span>
              <span className="text-lg font-bold text-white font-display">{personalInfo.name}</span>
            </div>
            <p className="text-sm text-slate-400">{personalInfo.title}</p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-3">
            {socialItems.map(({ label, url, Icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-800 text-slate-400 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <div className="flex justify-center sm:justify-end">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:scale-105 transition-all"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-500">
            © 2026 {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
