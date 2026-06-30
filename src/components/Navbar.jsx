import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const navItems = ['Home', 'About', 'Projects', 'Certificates'];
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'certificates'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-40 pt-6 md:pt-8 pb-3 px-6 md:px-16 bg-[#0a0a0f]/90 backdrop-blur-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <motion.p
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="font-mono text-sm md:text-base tracking-widest uppercase text-[#8b8b94]"
        >
          Aaron's Portfolio
        </motion.p>

        <nav
          aria-label="Top navigation"
          className="flex flex-wrap items-center gap-2 rounded-full bg-transparent px-3 py-2"
        >
          {navItems.map((item) => {
            const sectionId = item === 'Home' ? 'home' : item.toLowerCase();
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item}
                href={`#${sectionId}`}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-[#f5f3ee] hover:text-white'
                }`}
                style={
                  isActive
                    ? {
                        textShadow:
                          '0 0 6px rgba(245,243,238,0.9), 0 0 18px rgba(245,243,238,0.6), 0 0 32px rgba(245,243,238,0.35)',
                      }
                    : undefined
                }
              >
                {item}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
