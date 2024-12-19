import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';
import { skills } from '../../constants/skills';
import { staggerChildren } from '../../animations/variants';

export function SkillsGrid() {
  return (
    <motion.div 
      variants={staggerChildren}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
    >
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} index={index} />
      ))}
    </motion.div>
  );
}