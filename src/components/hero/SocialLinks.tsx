import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { fadeInUp } from '../../animations/variants';
import { useDelayedBounce } from '../../hooks/useDelayedBounce';

export function SocialLinks() {
  const { shouldBounce, onAnimationComplete, setIsAnimating } = useDelayedBounce(10000);

  const socialIcons = [
    { Icon: Github, href: "https://github.com/DerSIlent", delay: 0, label: "GitHub Profile" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/stephan-ruiz-780586167/", delay: 0.2, label: "LinkedIn Profile" },
    { Icon: Mail, href: "mailto:stephan.ruiz@example.com", delay: 0.4, label: "Send Email" }
  ];

  return (
    <motion.div
      {...fadeInUp}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="flex justify-center gap-6 mb-12"
    >
      {socialIcons.map(({ Icon, href, delay, label }, index) => (
        <motion.a
          key={index}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className="text-secondary hover:text-primary transition-colors"
          animate={shouldBounce ? {
            y: [0, -8, 0],
            transition: {
              delay: delay,
              duration: 0.6,
              repeat: 1,
              repeatDelay: 0.2,
              onStart: () => setIsAnimating(true),
              onComplete: index === socialIcons.length - 1 ? onAnimationComplete : undefined
            }
          } : {}}
        >
          <Icon size={28} />
        </motion.a>
      ))}
    </motion.div>
  );
}