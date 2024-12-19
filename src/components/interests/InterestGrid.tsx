import { motion } from 'framer-motion';
import { interests } from '../../constants/interests';
import { InterestItem } from './InterestItem';
import { staggerChildren } from '../../animations/variants';

export function InterestGrid() {
  return (
    <motion.div 
      variants={staggerChildren}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4"
    >
      {interests.map((interest, index) => (
        <InterestItem key={index} interest={interest} index={index} />
      ))}
    </motion.div>
  );
}