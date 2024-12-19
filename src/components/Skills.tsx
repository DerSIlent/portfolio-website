import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { SkillsGrid } from './skills/SkillsGrid';

export default function Skills() {
  return (
    <section className="min-h-screen w-full py-20 bg-gradient-to-br from-accent/5 to-accent/10 flex items-center snap-start">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid />
      </motion.div>
    </section>
  );
}