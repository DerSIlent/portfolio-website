import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';
import { Interest } from '../../types';

interface InterestCardProps {
  interest: Interest;
  index: number;
}

export function InterestCard({ interest, index }: InterestCardProps) {
  const Icon = interest.icon;
  
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img 
          src={interest.image} 
          alt={interest.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="text-primary" size={24} />
          <h3 className="text-xl font-semibold text-secondary">{interest.title}</h3>
        </div>
        <p className="text-secondary-light">{interest.description}</p>
      </div>
    </motion.div>
  );
}