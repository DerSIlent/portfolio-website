import { motion } from 'framer-motion';
import { fadeInRight } from '../../animations/variants';

export function ContactForm() {
  return (
    <motion.form
      {...fadeInRight}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <div>
        <input
          type="text"
          placeholder="John Doe"
          autoComplete="name"
          required
          className="w-full px-4 py-2 rounded-lg border border-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="john.doe@example.com"
          autoComplete="email"
          required
          className="w-full px-4 py-2 rounded-lg border border-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={4}
          required
          className="w-full px-4 py-2 rounded-lg border border-neutral-dark focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition-colors"
      >
        Send Message
      </button>
    </motion.form>
  );
}