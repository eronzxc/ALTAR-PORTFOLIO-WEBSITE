import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  {
    number: '01',
    title: 'Tech Tambayan: Where Data and People Click',
    issuer: 'University of Perpetual Help System DALTA – Molino Campus',
    date: 'November 15, 2025',
    description:
      'A seminar exploring the intersection of data and human-centered design, covering how data-driven approaches can be applied to build more people-friendly digital systems.',
    image: 'https://placehold.co/800x560/16161c/8b8b94?text=Tech+Tambayan',
  },
  {
    number: '02',
    title: 'Batangas AI and Cybersecurity Congress 2025',
    issuer: 'University of Batangas – Main Campus',
    date: 'November 7, 2025',
    description:
      'A regional congress discussing the latest developments in artificial intelligence and cybersecurity, with focus on ethical AI use and securing digital systems in modern infrastructure.',
    image: 'https://placehold.co/800x560/16161c/8b8b94?text=AI+%26+Cybersecurity+Congress',
  },
  {
    number: '03',
    title: 'Ethics and Security in Digital Trade',
    issuer: 'University of Batangas – Lipa Campus',
    date: 'May 14, 2025',
    description:
      'A seminar addressing the ethical responsibilities and security challenges in digital commerce, including data privacy, trust frameworks, and safe online transaction practices.',
    image: 'https://placehold.co/800x560/16161c/8b8b94?text=Ethics+%26+Digital+Trade',
  },
  {
    number: '04',
    title: 'Tech Nexus 2024: Empowering Campus Innovators',
    issuer: 'University of Batangas – Lipa Campus',
    date: 'December 7, 2024',
    description:
      'A campus innovation summit focused on empowering student engineers and developers to build impactful technology solutions, featuring talks on emerging tech trends and student-led projects.',
    image: 'https://placehold.co/800x560/16161c/8b8b94?text=Tech+Nexus+2024',
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
          Seminars
        </h2>
        <p className="mt-4 text-[#8b8b94] text-sm md:text-base max-w-md leading-relaxed">
          Trainings and seminars attended to stay current with industry trends and emerging technologies.
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
                  SEMINAR {cert.number}
                </p>
                <h3
                  className="font-black uppercase leading-tight text-[#f5f3ee]"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}
                >
                  {cert.title}
                </h3>
                <div className="w-10 h-px bg-[#3a3a42]" />
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
