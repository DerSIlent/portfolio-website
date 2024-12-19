import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { fadeInUp } from '../../animations/variants';

export function ContactCTA() {
  return (
    <motion.div
      {...fadeInUp}
      viewport={{ once: true }}
      className="mt-8"
    >
      <a
        href="mailto:stephan.ruiz@example.com"
        className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
      >
        <Mail className="transition-transform duration-300 group-hover:rotate-12" size={24} />
        <span className="text-lg font-semibold">Send me an email</span>
      </a>
    </motion.div>
  );
}