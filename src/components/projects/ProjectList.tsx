import { motion } from 'framer-motion';
import { Project } from '../../types';
import { fadeInLeft, staggerChildren } from '../../animations/variants';

interface ProjectListProps {
  projects: Project[];
  activeProject: Project;
  onProjectSelect: (project: Project) => void;
}

export function ProjectList({ projects, activeProject, onProjectSelect }: ProjectListProps) {
  return (
    <motion.div
      variants={staggerChildren}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="space-y-4"
    >
      {projects.map((project, index) => (
        <motion.button
          key={index}
          variants={fadeInLeft}
          onClick={() => onProjectSelect(project)}
          className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
            activeProject.title === project.title
              ? 'bg-white shadow-lg scale-[1.02]'
              : 'bg-white/50 hover:bg-white/80'
          }`}
        >
          <h3 className={`font-medium transition-colors duration-300 ${
            activeProject.title === project.title ? 'text-primary' : 'text-secondary'
          }`}>
            {project.title}
          </h3>
          <p className="text-sm text-secondary-light line-clamp-2 mt-1">
            {project.description}
          </p>
        </motion.button>
      ))}
    </motion.div>
  );
}