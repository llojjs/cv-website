import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Hobbies } from './components/Hobbies';
import { Contact } from './components/Contact';

const sections = [
  { id: 'hero', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'contact', label: 'Contact' }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        threshold: [0.35, 0.6, 0.8]
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation dots for smooth scrolling */}
      <motion.nav 
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col gap-4">
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <div
                key={section.id}
                className="grid items-center"
                style={{
                  gridTemplateColumns: '100px 16px',
                  columnGap: '12px'
                }}
              >
                <span
                  className={[
                    'text-right text-[10px] font-medium uppercase tracking-[0.2em] whitespace-nowrap transition-colors duration-200',
                    isActive ? 'text-emerald-700 font-semibold' : 'text-gray-500'
                  ].join(' ')}
                >
                  {section.label}
                </span>

                <motion.button
                  onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className={[
                    'w-4 h-4 rounded-full border-2 border-emerald-500 box-border transition-all duration-200 justify-self-center',
                    isActive ? '' : 'hover:bg-emerald-500/80'
                  ].join(' ')}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Scroll to ${section.label}`}
                  style={{
                    boxSizing: 'border-box',
                    backgroundColor: isActive ? '#10b981' : 'transparent'
                  }}
                />
              </div>
            );
          })}
        </div>
      </motion.nav>

      {/* Main content */}
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="skills">
          <Skills />
        </section>

        <section id="hobbies">
          <Hobbies />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Floating scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce lg:hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}