import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import profilePic from '../assets/profile.png';

function Hero() {
  return (
    <section className="min-h-screen flex flex-col bg-[#0a0a0f] text-[#f5f3ee] px-6 md:px-16 relative overflow-hidden">

      {/* Top label */}
      <div className="relative z-30 pt-10 overflow-hidden">
        <motion.p
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="font-mono text-sm md:text-base tracking-widest uppercase text-[#8b8b94]"
        >
          Aaron's Portfolio
        </motion.p>
      </div>

      {/* Wordmark behind, photo in front, overlapping at the right end of the word */}
      <div className="relative flex-1 flex items-center">
        <div className="relative w-full flex justify-center">

          {/* Wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 select-none font-black uppercase leading-none text-[#f5f3ee] pointer-events-none whitespace-nowrap"
            style={{ fontSize: 'clamp(3.2rem, 13vw, 10.5rem)', letterSpacing: '-0.03em' }}
          >
            PORTFOLIO
          </motion.h1>

          {/* Photo: positioned at the right edge of the word, overlapping the last letters */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="absolute z-20 bottom-0 h-[25vh] md:h-[40vh]"
            style={{ left: '57%', bottom: '-30%' }}
          >
            <img
              src={profilePic}
              alt="Aaron Ludwig"
              className="h-full w-auto object-contain object-bottom"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom: bio with left border + Read More + socials, CTAs */}
      <div className="relative z-30 pb-6 md:pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          className="max-w-md"
        >
          {/* Left border accent + bio text */}
          <div className="border-l-2 border-[#3a3a42] pl-4">
            <p className="text-[#8b8b94] leading-relaxed">
              <span className="text-[#f5f3ee] font-semibold">
                Aaron Ludwig A. Altar - BS Computer Engineering
              </span>{' '}
              I build interactive front-end interfaces and design smart hardware
              integrations — bridging the gap between software efficiency and
              physical systems.
            </p>
          </div>

          {/* Read More button */}
          <a
            href="#about"
            className="inline-block mt-5 px-5 py-2 border border-[#3a3a42] rounded-lg text-sm font-semibold tracking-wide hover:bg-[#16161c] transition-all duration-200"
          >
            Read More
          </a>

          {/* Social icons */}
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/aaronludwigg" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#3a3a42] hover:bg-[#16161c] transition-all duration-200">
              <FaFacebook size={18} />
            </a>
            <a href="https://www.instagram.com/aaron.ludwigg/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#3a3a42] hover:bg-[#16161c] transition-all duration-200">
              <FaInstagram size={18} />
            </a>
            <a href="https://github.com/eronzxc" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#3a3a42] hover:bg-[#16161c] transition-all duration-200">
              <FaGithub size={18} />
            </a>
            <a href="mailto:aaronaltar@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#3a3a42] hover:bg-[#16161c] transition-all duration-200">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[#f5f3ee] text-[#0a0a0f] rounded-lg font-semibold text-sm hover:bg-white transition-all duration-200 hover:scale-105"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border border-[#3a3a42] text-[#f5f3ee] rounded-lg font-semibold text-sm hover:bg-[#16161c] transition-all duration-200 hover:scale-105"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
