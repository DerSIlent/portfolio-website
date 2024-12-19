import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../animations/variants';
import { useIdleDetection } from '../hooks/useIdleDetection';
import { HeroTitle } from './hero/HeroTitle';
import { HeroSubtitle } from './hero/HeroSubtitle';
import { SocialLinks } from './hero/SocialLinks';
import { ScrollIndicator } from './hero/ScrollIndicator';

export default function Hero() {
  const isIdle = useIdleDetection(5000);

  return (
    <section id="home" className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral to-neutral-light z-0" />
      
      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 z-10"
      >
        <div className="text-center">
          <HeroTitle />
          <HeroSubtitle />
          <SocialLinks />
        </div>
      </motion.div>

      <AnimatePresence>
        {isIdle && <ScrollIndicator />}
      </AnimatePresence>
    </section>
  );
}