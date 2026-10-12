import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Send, CheckCircle2, User, AtSign, MessageSquare } from 'lucide-react';
import { personalInfo } from '@/data/personalInfo';
import { socialLinks } from '@/data/socialLinks';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, revealed } = useScrollReveal<HTMLElement>();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const inputClass =
    'w-full pl-11 pr-4 py-3 rounded-xl bg-surface dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all';

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 sm:py-28 bg-paper dark:bg-slate-950 reveal ${revealed ? 'revealed' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold gradient-text tracking-wider uppercase font-display">
            Get in touch
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-display">
            Contact Me
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-primary-600 to-accent-600 text-white overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="text-2xl font-bold font-display mb-4">Let's connect</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                I'm open to software developer, full-stack developer, and AI/ML roles, as well as
                internship and fresher opportunities. Feel free to reach out through the form or via
                any of the links below.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center gap-3 group"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm group-hover:bg-white/25 transition-colors">
                    <Mail className="w-5 h-5" />
                  </span>
                  <span className="text-sm font-medium">{socialLinks.email}</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <span className="text-sm font-medium">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xl shadow-slate-200/50 dark:shadow-none"
          >
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Email
              </label>
              <div className="relative">
                <AtSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-4 w-4 h-4 text-slate-400" />
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none pt-3`}
                  placeholder="Your message..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium text-sm hover:shadow-xl hover:shadow-primary-500/30 hover:scale-[1.02] transition-all duration-300"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
            {sent && (
              <p className="text-sm text-center text-slate-500 dark:text-slate-400">
                Your email client should now be open with the message pre-filled.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
