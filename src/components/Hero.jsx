import React from 'react';
import profilePic from '../assets/profile.jpg';

function Hero() {
  return (
    <section className="min-h-screen flex flex-col bg-slate-950 text-white px-6 md:px-16 relative overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/3 w-[30rem] h-[30rem] bg-purple-600/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-fuchsia-600/10 rounded-full blur-3xl"></div>

      {/* Top label */}
      <div className="relative z-20 pt-10 overflow-hidden">
        <p className="animate-slide-in-left opacity-0 [animation-delay:0.1s] font-mono text-sm md:text-base tracking-widest uppercase text-slate-400">
          Aaron's Portfolio
        </p>
      </div>

      {/* Wordmark + overlapping photo */}
      <div className="relative flex-1 flex items-center justify-center md:justify-start">

        <h1
          className="select-none font-black uppercase leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 animate-fade-up opacity-0 [animation-delay:0.3s]"
          style={{ fontSize: 'clamp(3.5rem, 14vw, 11rem)' }}
        >
          PORTFOLIO
        </h1>

        {/* Photo, overlapping the wordmark */}
        <div
          className="absolute right-[6%] md:right-[14%] bottom-0 h-[78%] md:h-[88%] animate-slide-in-up opacity-0 [animation-delay:0.5s] flex items-end"
        >
          <img
            src={profilePic}
            alt="Aaron Ludwig"
            className="h-full w-auto object-contain object-bottom drop-shadow-[0_0_45px_rgba(192,38,211,0.35)]"
          />
        </div>
      </div>

      {/* Bottom intro line + CTAs */}
      <div className="relative z-20 pb-12 md:pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <p className="animate-fade-up opacity-0 [animation-delay:0.7s] max-w-md text-slate-400 leading-relaxed">
          <span className="text-slate-100 font-semibold">Computer Engineering Student.</span>{' '}
          I build interactive front-end interfaces and design smart hardware integrations —
          bridging the gap between software efficiency and physical systems.
        </p>

        <div className="animate-fade-up opacity-0 [animation-delay:0.9s] flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-lg font-semibold text-sm hover:from-purple-400 hover:to-fuchsia-500 transition-all duration-200 shadow-lg shadow-purple-500/30 hover:scale-105"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-slate-900 border border-purple-800/40 rounded-lg font-semibold text-sm hover:bg-slate-800 transition-all duration-200 hover:scale-105"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
