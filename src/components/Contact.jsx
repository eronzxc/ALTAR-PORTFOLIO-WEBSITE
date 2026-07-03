import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const socials = [
  {
    label: 'Facebook',
    handle: 'Aaron Ludwig',
    href: 'https://www.facebook.com/aaronludwigg',
    icon: <FaFacebook size={20} />,
  },
  {
    label: 'Instagram',
    handle: '@aaron.ludwigg',
    href: 'https://www.instagram.com/aaron.ludwigg/',
    icon: <FaInstagram size={20} />,
  },
  {
    label: 'GitHub',
    handle: 'eronzxc',
    href: 'https://github.com/eronzxc',
    icon: <FaGithub size={20} />,
  },
  {
    label: 'Email',
    handle: 'aaronaltar@gmail.com',
    href: 'mailto:aaronaltar@gmail.com',
    icon: <Mail size={20} />,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0a0a0f] text-[#f5f3ee] px-6 md:px-16 pt-20 pb-24"
    >
      {/* Divider */}
      <div className="w-full h-px bg-[#3a3a42] mb-20" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-16">

        {/* Left — intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-[#8b8b94] mb-4">
            Get in Touch
          </p>
          <h2
            className="font-black uppercase leading-none text-[#f5f3ee] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            Let's Connect
          </h2>
          <p className="text-[#8b8b94] leading-relaxed text-sm md:text-base max-w-sm">
            Whether you have a project in mind, an opportunity to share, or just want to say hello —
            feel free to reach out. I am always open to new connections and conversations.
          </p>
        </motion.div>

        {/* Right — contact details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:w-1/2 flex flex-col gap-4"
        >
          {socials.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="flex items-center gap-4 p-4 rounded-xl border border-[#3a3a42] bg-[#111118]/60 hover:bg-[#16161c] hover:border-[#8b8b94] transition-all duration-200 group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#3a3a42] text-[#8b8b94] group-hover:text-[#f5f3ee] group-hover:border-[#f5f3ee] transition-all duration-200">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-mono tracking-widest uppercase text-[#8b8b94]">{item.label}</p>
                <p className="text-[#f5f3ee] text-sm font-medium mt-0.5">{item.handle}</p>
              </div>
              <div className="ml-auto text-[#3a3a42] group-hover:text-[#8b8b94] transition-colors duration-200">
                →
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center text-[#3a3a42] text-xs font-mono tracking-widest uppercase mt-20"
      >
        Aaron Ludwig A. Altar © {new Date().getFullYear()}
      </motion.p>
    </section>
  );
}

export default Contact;
