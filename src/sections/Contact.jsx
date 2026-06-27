import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Mail, MapPin, Send } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';

/* ── Asset import ── */
import raicBg from '../assets/images/raic-bg.png';

/* ── Animation variants ── */
const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ── Shared input class string ── */
const inputClasses = `
  w-full bg-navy-800/50 border border-electric/20 rounded-xl px-4 py-3
  text-white placeholder-white/30 text-sm
  focus:border-electric/60 focus:ring-1 focus:ring-electric/30 focus:outline-none
  transition-all duration-200
`;

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  /* ── Form state ── */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* ── Background Circuit Image ── */}
      {raicBg && (
        <img
          src={raicBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(1.3) contrast(1.15)' }}
        />
      )}

      {/* ── Dark overlays for text readability ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/80 to-navy-950/95 z-10" />
      <div className="absolute inset-0 bg-grid opacity-15 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <SectionHeader
          title="Contact"
          subtitle="GET IN TOUCH"
          accent="gold"
        />

        {/* ── Tagline ── */}
        <motion.p
          className="text-xl text-white/60 text-center -mt-8 md:-mt-12 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let&apos;s build the future of autonomous aerial intelligence
        </motion.p>

        {/* ── Two-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* ─── Left: Contact Form ─── */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <GlassCard className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs text-white/40 font-mono tracking-widest uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClasses}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs text-white/40 font-mono tracking-widest uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClasses}
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs text-white/40 font-mono tracking-widest uppercase mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className={inputClasses}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs text-white/40 font-mono tracking-widest uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    className={`${inputClasses} resize-none`}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2
                             bg-gradient-to-r from-electric-600 to-electric
                             text-navy-950 font-heading text-sm font-bold tracking-wider uppercase
                             rounded-full px-8 py-4
                             shadow-glow-sm hover:shadow-glow-lg
                             transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </GlassCard>
          </motion.div>

          {/* ─── Right: Company Info Card (50% transparent background) ─── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="bg-navy-950/35 border border-gold/15 backdrop-blur-md rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between">
              {/* Heading */}
              <div>
                <h3 className="font-heading text-2xl gradient-text-gold mb-2">
                  RAGAS AEROSPACE
                </h3>
                <p className="text-white/40 text-sm mb-8">
                  Pioneering autonomous aerial intelligence systems
                </p>

                {/* Contact details */}
                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm font-medium">Headquarters</p>
                      <p className="text-white/40 text-sm mt-0.5">Hyderabad, India</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm font-medium">Email</p>
                      <a href="mailto:ragasaerospace@gmail.com" className="text-white/40 hover:text-gold text-sm mt-0.5 transition-colors duration-250">
                        ragasaerospace@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-10 pt-6 border-t border-gold/10">
                <p className="text-xs text-white/30 font-mono tracking-widest uppercase mb-4">
                  Connect With Us
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Website"
                    className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20
                               flex items-center justify-center
                               hover:bg-gold/20 hover:border-gold/40 transition-all duration-200"
                  >
                    <Globe className="w-5 h-5 text-gold" />
                  </a>
                  <a
                    href="mailto:ragasaerospace@gmail.com"
                    aria-label="Email"
                    className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20
                               flex items-center justify-center
                               hover:bg-gold/20 hover:border-gold/40 transition-all duration-200"
                  >
                    <Mail className="w-5 h-5 text-gold" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
