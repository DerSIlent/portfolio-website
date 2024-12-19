import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { fadeInUp, staggerChildren } from '../animations/variants';
import { SectionTitle } from './ui/SectionTitle';

const activities = [
  {
    title: "Hackatrain Amsterdam 2021",
    year: "2021"
  },
  {
    title: "X-Honours member of NHL Stenden",
    year: "2020-2021"
  },
  {
    title: "Hackathon Den Bosch 2019",
    year: "2019"
  }
];

export default function ExtracurricularActivities() {
  return (
    <section className="min-h-screen w-full py-20 bg-gradient-to-br from-accent/10 to-accent/20 flex items-center snap-start">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Extracurricular Activities</SectionTitle>
        
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div className="flex items-center gap-3">
                  <Trophy className="text-primary" size={24} />
                  <span className="text-lg text-secondary font-medium">
                    {activity.title}
                  </span>
                </div>
                <span className="text-primary font-medium md:text-lg">
                  {activity.year}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}