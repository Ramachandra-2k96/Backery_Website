import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = 'animate-slide-up',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const ref = useScrollAnimation({ animation, delay });

  return (
    <div ref={ref as any} className={className}>
      {children}
    </div>
  );
}