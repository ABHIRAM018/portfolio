import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollNavigation() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, nextProgress)));
      setIsVisible(window.scrollY > 520);
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-primary-950 via-primary-500 to-accent-500 transition-transform duration-150"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-950 text-white shadow-xl shadow-primary-950/25 transition-all duration-300 hover:-translate-y-1 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 ${
          isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{ background: `conic-gradient(#cc7d51 ${progress}%, transparent ${progress}%)` }}
        />
        <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary-950">
          <ArrowUp className="h-4 w-4" />
        </span>
      </button>
    </>
  );
}
