import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface SkillModalProps {
  skill: {
    icon: any;
    title: string;
    skills: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export function SkillModal({ skill, isOpen, onClose }: SkillModalProps) {
  const Icon = skill.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-secondary/50 z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-4 md:inset-20 bg-white rounded-xl shadow-2xl z-50 overflow-auto"
          >
            <div className="relative p-6 md:p-12">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral transition-colors"
              >
                <X className="text-secondary" size={24} />
              </button>

              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <Icon size={48} className="text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary">{skill.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">Core Competencies</h3>
                    <ul className="space-y-3">
                      {skill.skills.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-secondary-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">Experience & Projects</h3>
                    <div className="space-y-4">
                      {getExampleProjects(skill.title).map((project, i) => (
                        <div key={i} className="p-4 bg-neutral rounded-lg">
                          <h4 className="font-semibold text-secondary mb-2">{project.title}</h4>
                          <p className="text-secondary-light text-sm">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function getExampleProjects(skillType: string) {
  const projects = {
    "Frontend Development": [
      {
        title: "E-commerce Platform Redesign",
        description: "Led the frontend development of a modern e-commerce platform using React and TypeScript"
      },
      {
        title: "Real-time Dashboard",
        description: "Built a real-time analytics dashboard with dynamic data visualization"
      },
      {
        title: "Social Media Application",
        description: "Developed a responsive social media application with advanced features"
      }
    ],
    "Backend Development": [
      {
        title: "RESTful API Architecture",
        description: "Designed and implemented a scalable REST API serving millions of requests"
      },
      {
        title: "Microservices Implementation",
        description: "Created a microservices architecture using Node.js and Docker"
      },
      {
        title: "Database Optimization",
        description: "Optimized database performance and implemented caching strategies"
      }
    ],
    "Design": [
      {
        title: "Brand Identity System",
        description: "Created a comprehensive brand identity system for a tech startup"
      },
      {
        title: "Mobile App UI/UX",
        description: "Designed an intuitive mobile app interface with high user engagement"
      },
      {
        title: "Design System Creation",
        description: "Developed a scalable design system used across multiple products"
      }
    ],
    "Other Skills": [
      {
        title: "CI/CD Pipeline Setup",
        description: "Implemented automated deployment pipelines using GitHub Actions"
      },
      {
        title: "Cloud Infrastructure",
        description: "Managed cloud infrastructure on AWS with Terraform"
      },
      {
        title: "Performance Optimization",
        description: "Improved application performance and loading times by 60%"
      }
    ]
  };
  
  return projects[skillType as keyof typeof projects] || [];
}