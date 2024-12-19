import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectList } from './ProjectList';
import { ProjectDetails } from './ProjectDetails';
import { projects } from '../../constants/projects';

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr,2fr] gap-8">
      <ProjectList 
        projects={projects}
        activeProject={activeProject}
        onProjectSelect={setActiveProject}
      />
      <ProjectDetails project={activeProject} />
    </div>
  );
}