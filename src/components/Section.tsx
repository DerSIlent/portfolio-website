import React from 'react';
import { TypewriterReveal } from './TypewriterReveal';

interface SectionProps {
  title: string;
  delay: number;
  children: React.ReactNode;
}

export function Section({ title, delay, children }: SectionProps) {
  return (
    <TypewriterReveal delay={delay}>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children}
      </section>
    </TypewriterReveal>
  );
}