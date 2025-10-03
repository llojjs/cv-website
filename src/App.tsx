import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
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
          {[
            { id: 'hero', label: 'About' },
            { id: 'experience', label: 'Experience' },
            { id: 'education', label: 'Education' },
            { id: 'skills', label: 'Skills' },
            { id: 'contact', label: 'Contact' }
          ].map((section, index) => (
            <motion.div key={section.id} className="relative group">
              <motion.button
                onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="w-3 h-3 rounded-full border-2 border-emerald-500 bg-transparent hover:bg-emerald-500 transition-all duration-300"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
              />
              <motion.div
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                {section.label}
              </motion.div>
            </motion.div>
          ))}
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