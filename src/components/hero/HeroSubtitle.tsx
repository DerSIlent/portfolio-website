import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

export function HeroSubtitle() {
  return (
    <motion.h2 
      {...fadeInUp}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="text-3xl text-secondary mb-8"
    >
      Full Stack Developer & Designer
    </motion.h2>
  );
}