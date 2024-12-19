export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tech: string[];
}

export interface Skill {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export interface Interest {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  whileInView?: object;
  viewport?: object;
  transition?: object;
}