import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Project Title One',
    description:
      'A brief description of what this project does, the problem it solves, and the tech stack or tools used to build it.',
    tags: ['React', 'Tailwind', 'Firebase'],
    images: [
      'https://placehold.co/800x500/16161c/8b8b94?text=Screenshot+1',
      'https://placehold.co/800x500/16161c/8b8b94?text=Screenshot+2',
      'https://placehold.co/800x500/16161c/8b8b94?text=Screenshot+3',
    ],
  },
  {
    number: '02',
    title: 'Project Title Two',
    description:
      'Another project description here. Keep it concise — one to two sentences about what it is and what makes it interesting.',
    tags: ['Arduino', 'C++', 'IoT'],
    images: [
      'https://placehold.co/800x500/16161c/8b8b94?text=Screenshot+1',
      'https://placehold.co/800x500/16161c/8b8b94?text=Screenshot+2',
    ],
  },
  {
    number: '03',
    title: 'Project Title Three',
    description:
      'Third project description. Highlight the impact or key feature that makes this stand out from the rest.',
    tags: ['Python', 'OpenCV', 'ML'],
    images: [
      'https://placehold.co/800x500/16161c/8b8b94?text=Screenshot+1',
      'https://placehold.co/800x500/16161c/8b8b94?text=Screenshot+2',
      'https://placehold.co/800x500/16161c/8b8b94?text=Screenshot+3',
    ],
  },
];

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative w-full select-none">
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-[#16161c]">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Screenshot ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={false}
            animate={{ opacity: i === current ? 1 : 0, x: i === current ? 0 : i < current ? -24 : 24 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          />
        ))}

        {/* Arrow buttons — only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[#0a0a0f]/70 border border-[#3a3a42] text-[#f5f3ee] hover:bg-[#16161c] transition-all duration-200 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[#0a0a0f]/70 border border-[#3a3a42] text-[#f5f3ee] hover:bg-[#16161c] transition-all duration-200 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
              className="transition-all duration-300"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-4 h-1.5 bg-[#f5f3ee]'
                    : 'w-1.5 h-1.5 bg-[#3a3a42]'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0f] text-[#f5f3ee] px-6 md:px-16 pt-32 pb-40"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-32"
      >
        <p className="font-mono text-xs tracking-widest uppercase text-[#8b8b94] mb-3">
          Selected Work
        </p>
        <h2
          className="font-black uppercase leading-none text-[#f5f3ee]"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', letterSpacing: '-0.03em' }}
        >
          Projects
        </h2>
      </motion.div>

      {/* Project list */}
      <div className="flex flex-col gap-40">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className={`flex flex-col gap-10 md:gap-16 md:items-center min-h-[60vh] ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Carousel — 55% width on desktop */}
              <div className="w-full md:w-[55%]">
                <Carousel images={project.images} />
              </div>

              {/* Text — 45% width on desktop */}
              <div className="w-full md:w-[45%] flex flex-col gap-5">
                <p className="font-mono text-xs tracking-widest text-[#3a3a42]">
                  PROJECT {project.number}
                </p>
                <h3
                  className="font-black uppercase leading-tight text-[#f5f3ee]"
                  style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
                >
                  {project.title}
                </h3>
                <div className="w-10 h-px bg-[#3a3a42]" />
                <p className="text-[#8b8b94] leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono border border-[#3a3a42] rounded-full text-[#8b8b94]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
