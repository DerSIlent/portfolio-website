import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';
import { SkillModal } from './SkillModal';
import { useState } from 'react';

interface SkillCardProps {
  skill: {
    icon: any;
    title: string;
    skills: string[];
  };
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Icon = skill.icon;
  
  return (
    <>
      <motion.div
        variants={fadeInUp}
        onClick={() => setIsModalOpen(true)}
        className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
      >
        <div className="text-primary mb-4">
          <Icon size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-secondary">{skill.title}</h3>
        <ul className="space-y-2">
          {skill.skills.map((item, i) => (
            <li key={i} className="text-secondary-light">{item}</li>
          ))}
        </ul>
      </motion.div>

      <SkillModal
        skill={skill}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}