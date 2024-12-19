import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { fadeInUp, staggerChildren } from '../../animations/variants';

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

export function ExtracurricularActivities() {
  return (
    <div className="mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 mb-8"
      >
        <Trophy className="text-primary" size={24} />
        <h3 className="text-2xl font-semibold text-secondary">
          Extracurricular Activities
        </h3>
      </motion.div>

      <motion.div
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg text-secondary font-medium">
                {activity.title}
              </span>
              <span className="text-primary font-medium">
                {activity.year}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}