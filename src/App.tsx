import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Interests from './components/Interests';
import ExtracurricularActivities from './components/ExtracurricularActivities';
import { useScrollSnap } from './hooks/useScrollSnap';
import { useBrowserDetection } from './hooks/useBrowserDetection';

export default function App() {
  const { isSafari } = useBrowserDetection();
  useScrollSnap(!isSafari); // Only enable scroll snap if not Safari

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-screen overflow-hidden"
      >
        <div className={`h-screen overflow-y-auto ${!isSafari ? 'snap-y snap-mandatory' : ''}`}>
          <Hero />
          <Skills />
          <Projects />
          <Interests />
          <ExtracurricularActivities />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}