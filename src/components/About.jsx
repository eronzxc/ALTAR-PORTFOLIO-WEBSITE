import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="min-h-screen bg-[#0a0a0f] text-[#f5f3ee] px-6 md:px-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#8b8b94]">About</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
            I’m a 3rd-year Computer Engineering student currently taking my summer OJT journey.
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-[#c9c7bf]">
            I’m in the transition between my 3rd year and 4th year in Computer Engineering,
            and this summer OJT experience is helping me grow beyond the classroom by applying
            what I’ve learned in real-world work and problem-solving.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="rounded-2xl border border-[#3a3a42] bg-[#111118]/80 p-8"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#8b8b94]">Who I am</p>
            <p className="mt-4 text-[#f5f3ee] leading-relaxed">
              I’m someone who enjoys building meaningful digital experiences while also appreciating
              the logic and discipline behind systems and hardware. My interest lies in creating smart,
              thoughtful solutions that connect creativity with engineering.
            </p>
            <p className="mt-4 text-[#c9c7bf] leading-relaxed">
              This stage of my journey is all about learning, adapting, and strengthening my skills
              through hands-on experience and continuous growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="rounded-2xl border border-[#3a3a42] bg-[#111118]/80 p-8"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#8b8b94]">Current Focus</p>
            <ul className="mt-4 space-y-3 text-[#c9c7bf]">
              <li>• Summer OJT training and professional exposure</li>
              <li>• Strengthening technical skills in web and software development</li>
              <li>• Building a strong foundation for my 4th-year journey</li>
              <li>• Exploring solutions that blend innovation with practicality</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
