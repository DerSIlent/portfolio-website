import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { ContactInfo } from './contact/ContactInfo';
import { ContactCTA } from './contact/ContactCTA';

export default function Contact() {
  return (
    <section className="min-h-screen w-full py-20 bg-gray-50 flex items-center snap-start">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col items-center gap-8">
            <ContactInfo />
            <ContactCTA />
          </div>
        </div>
      </motion.div>
    </section>
  );
}