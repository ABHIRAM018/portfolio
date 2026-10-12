import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Experience from '@/components/Experience/Experience';
import Education from '@/components/Education/Education';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import ScrollNavigation from '@/components/ScrollNavigation/ScrollNavigation';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-paper dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ScrollNavigation />
      </div>
    </ThemeProvider>
  );
}

export default App;
