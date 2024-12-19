import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';
import { fadeInUp } from '../../animations/variants';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      {...fadeInUp}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative bg-transparent rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl h-[400px] flex flex-col"
    >
      <div className="relative h-48 flex-shrink-0">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-300" />
      </div>
      <div className="p-6 bg-transparent group-hover:bg-white transition-colors duration-300 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-secondary">{project.title}</h3>
          <p className="text-secondary-light opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{project.description}</p>
        </div>
        <div className="flex gap-4 mt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a 
            href={project.github} 
            className="text-secondary hover:text-primary transition-colors"
            aria-label="View GitHub repository"
          >
            <Github size={20} />
          </a>
          <a 
            href={project.live} 
            className="text-secondary hover:text-primary transition-colors"
            aria-label="View live project"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}