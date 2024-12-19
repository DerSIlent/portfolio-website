import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

export function HeroTitle() {
  return (
    <motion.h1 
      {...fadeInUp}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark text-transparent bg-clip-text"
    >
      Stephan Ruiz
    </motion.h1>
  );
}