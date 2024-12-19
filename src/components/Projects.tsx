import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectShowcase } from './projects/ProjectShowcase';

export default function Projects() {
  return (
    <section className="min-h-screen w-full py-20 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center snap-start">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectShowcase />
      </motion.div>
    </section>
  );
}