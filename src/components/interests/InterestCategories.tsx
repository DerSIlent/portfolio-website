import { motion } from 'framer-motion';
import { InterestCard } from './InterestCard';
import { interests } from '../../constants/interests';
import { staggerChildren } from '../../animations/variants';

export function InterestCategories() {
  return (
    <motion.div 
      variants={staggerChildren}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
    >
      {interests.map((interest, index) => (
        <InterestCard key={index} interest={interest} index={index} />
      ))}
    </motion.div>
  );
}