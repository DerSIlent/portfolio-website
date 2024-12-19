import { motion } from 'framer-motion';

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
    >
      <motion.div 
        className="text-secondary-light"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Scroll Down
      </motion.div>
    </motion.div>
  );
}