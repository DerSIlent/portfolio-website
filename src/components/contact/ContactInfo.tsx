import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { fadeInLeft } from '../../animations/variants';

export function ContactInfo() {
  return (
    <motion.div
      {...fadeInLeft}
      viewport={{ once: true }}
      className="space-y-6 text-center"
    >
      <div className="flex items-center justify-center space-x-4">
        <Mail className="text-primary" size={24} />
        <span className="text-secondary">stephan.ruiz@example.com</span>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <MapPin className="text-primary" size={24} />
        <span className="text-secondary">Amsterdam, NL</span>
      </div>
    </motion.div>
  );
}