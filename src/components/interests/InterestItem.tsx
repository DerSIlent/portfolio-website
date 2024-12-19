import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

interface InterestItemProps {
  interest: string;
  index: number;
}

export function InterestItem({ interest, index }: InterestItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative overflow-hidden"
    >
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <h3 className="text-lg md:text-xl font-medium text-secondary group-hover:text-primary transition-colors duration-300 text-center">
          {interest}
        </h3>
      </div>
    </motion.div>
  );
}