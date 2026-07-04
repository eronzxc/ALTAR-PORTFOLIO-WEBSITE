import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const socials = [
  {
    label: 'Facebook',
    handle: 'Aaron Altar',
    href: 'https://www.facebook.com/aaronludwigg',
    icon: <FaFacebook size={19} />,
  },
  {
    label: 'Instagram',
    handle: '@aaron.ludwigg',
    href: 'https://www.instagram.com/aaron.ludwigg/',
    icon: <FaInstagram size={19} />,
  },
  {
    label: 'GitHub',
    handle: 'eronzxc',
    href: 'https://github.com/eronzxc',
    icon: <FaGithub size={19} />,
  },
  {
    label: 'Email',
    handle: 'aaronaltar@gmail.com',
    href: 'mailto:aaronaltar@gmail.com',
    icon: <Mail size={19} />,
  },
];

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_66t4vmf',
        'template_03svs7x',
        formRef.current,
        '7i2zIFPJWr_XhIcAn'
      );
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0a0a0f] text-[#f5f3ee] px-6 md:px-16 pt-20 pb-24"
    >
      {/* Divider */}
      <div className="w-full h-px bg-[#3a3a42] mb-20" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="font-mono text-xs tracking-widest uppercase text-[#8b8b94] mb-3">
          Get in Touch
        </p>
        <h2
          className="font-black uppercase leading-none text-[#f5f3ee]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
        >
          Let's Connect
        </h2>
        <p className="mt-4 text-[#8b8b94] text-sm md:text-base max-w-md leading-relaxed">
          Whether you have a project in mind, an opportunity to share, or just want to say hello —
          feel free to reach out. I am always open to new connections and conversations.
        </p>
      </motion.div>

      {/* Main content — socials left, form right */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 max-w-6xl">

        {/* Left — socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:w-[40%] flex flex-col gap-3"
        >
          {socials.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="flex items-center gap-4 p-4 rounded-xl border border-[#3a3a42] bg-[#111118]/60 hover:bg-[#16161c] hover:border-[#8b8b94] transition-all duration-200 group"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-full border border-[#3a3a42] text-[#8b8b94] group-hover:text-[#f5f3ee] group-hover:border-[#f5f3ee] transition-all duration-200 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-mono tracking-widest uppercase text-[#8b8b94]">{item.label}</p>
                <p className="text-[#f5f3ee] text-sm font-medium mt-0.5">{item.handle}</p>
              </div>
              <span className="ml-auto text-[#3a3a42] group-hover:text-[#8b8b94] transition-colors duration-200">→</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Right — contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-[60%]"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-xs font-mono tracking-widest uppercase text-[#8b8b94]">Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-[#3a3a42] text-[#f5f3ee] text-sm placeholder-[#3a3a42] focus:outline-none focus:border-[#8b8b94] transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-xs font-mono tracking-widest uppercase text-[#8b8b94]">Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-[#3a3a42] text-[#f5f3ee] text-sm placeholder-[#3a3a42] focus:outline-none focus:border-[#8b8b94] transition-colors duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono tracking-widest uppercase text-[#8b8b94]">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-[#3a3a42] text-[#f5f3ee] text-sm placeholder-[#3a3a42] focus:outline-none focus:border-[#8b8b94] transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-1 px-6 py-3 bg-[#f5f3ee] text-[#0a0a0f] rounded-xl font-semibold text-sm hover:bg-white transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 self-start"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-green-400 font-mono"
              >
                ✓ Message sent! I will get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-400 font-mono"
              >
                ✕ Something went wrong. Please try again.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>

      {/* Footer */}
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
