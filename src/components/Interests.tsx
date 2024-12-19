import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { InterestGrid } from './interests/InterestGrid';

export default function Interests() {
  return (
    <section className="min-h-screen w-full py-20 bg-gradient-to-br from-terracotta/10 to-terracotta/20 flex items-center snap-start">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Interests</SectionTitle>
        <InterestGrid />
      </motion.div>
    </section>
  );
}