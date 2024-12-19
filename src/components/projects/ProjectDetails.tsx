import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types';
import { fadeInRight } from '../../animations/variants';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.title}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeInRight}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="aspect-w-16 aspect-h-9 relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-secondary mb-4">{project.title}</h2>
          <p className="text-secondary-light mb-6">{project.description}</p>
          
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Github size={20} />
              <span>View Code</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}