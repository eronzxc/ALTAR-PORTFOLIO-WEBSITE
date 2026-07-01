import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  {
    number: '01',
    title: 'Certificate Title One',
    issuer: 'Coursera',
    date: 'March 2024',
    description:
      'Short description of what this certificate covers — the skills or concepts you gained from completing this course or program.',
    image: 'https://placehold.co/800x560/16161c/8b8b94?text=Certificate+1',
  },
  {
    number: '02',
    title: 'Certificate Title Two',
    issuer: 'Cisco Networking Academy',
    date: 'July 2024',
    description:
      'Another certificate description here. Mention the topic area and why it's relevant to your field or career goals.',
    image: 'https://placehold.co/800x560/16161c/8b8b94?text=Certificate+2',
  },
  {
    number: '03',
    title: 'Certificate Title Three',
    issuer: 'Google',
    date: 'January 2025',
    description:
      'Third certificate description. Keep it concise — one to two sentences about the course and what you learned.',
    image: 'https://placehold.co/800x560/16161c/8b8b94?text=Certificate+3',
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[#0a0a0f] text-[#f5f3ee] px-6 md:px-16 pt-20 pb-40"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="font-mono text-xs tracking-widest uppercase text-[#8b8b94] mb-3">
          Credentials
        </p>
        <h2
          className="font-black uppercase leading-none text-[#f5f3ee]"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', letterSpacing: '-0.03em' }}
        >
          Certificates
        </h2>
        <p className="mt-4 text-[#8b8b94] text-sm md:text-base max-w-md leading-relaxed">
          Courses and programs I've completed to strengthen my technical foundation.
        </p>
      </motion.div>

      {/* Certificate list */}
      <div className="flex flex-col gap-40">
        {certificates.map((cert, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={cert.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className={`flex flex-col gap-10 md:gap-16 md:items-center ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Certificate image — 55% width */}
              <div className="w-full md:w-[55%]">
                <div className="rounded-xl overflow-hidden aspect-[16/8] bg-[#16161c]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Details — 45% width */}
              <div className="w-full md:w-[45%] flex flex-col gap-5">
                <p className="font-mono text-xs tracking-widest text-[#3a3a42]">
                  CERTIFICATE {cert.number}
                </p>
                <h3
                  className="font-black uppercase leading-tight text-[#f5f3ee]"
                  style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
                >
                  {cert.title}
                </h3>
                <div className="w-10 h-px bg-[#3a3a42]" />

                {/* Issuer + date */}
                <div className="flex flex-col gap-1">
                  <p className="text-[#f5f3ee] text-sm font-semibold">{cert.issuer}</p>
                  <p className="text-[#8b8b94] text-xs font-mono tracking-widest uppercase">{cert.date}</p>
                </div>

                <p className="text-[#8b8b94] leading-relaxed text-sm md:text-base">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Certificates;
