import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="min-h-screen bg-[#0a0a0f] text-[#f5f3ee] px-6 md:px-16 pt-36 pb-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#8b8b94]">About</p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            I’m a Computer Engineering student transitioning from 3rd year to 4th year, currently gaining hands-on experience through summer OJT.
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-[#c9c7bf]">
            This stage of my journey is about applying what I’ve learned in the classroom to real-world challenges,
            strengthening my technical foundation, and growing through practical experience.
            I’m especially interested in creating thoughtful solutions that connect technology with meaningful impact.
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
              I enjoy building meaningful digital experiences while also appreciating the logic,
              structure, and problem-solving behind systems and hardware. My interest lies in developing
              practical solutions that balance creativity, engineering, and real-world usefulness.
            </p>
            <p className="mt-4 text-[#c9c7bf] leading-relaxed">
              I’m continuously learning how to adapt, improve, and contribute with purpose as I move closer
              to the final stage of my academic journey.
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
