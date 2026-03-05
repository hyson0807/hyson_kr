'use client';

import { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

import type { AnimationDelay } from './animation-utils';

type AnimationType = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scale';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: AnimationDelay;
  duration?: number; // 300, 500, 700, 1000
  className?: string;
}

const animationClasses: Record<AnimationType, { initial: string; animate: string }> = {
  fadeUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  fadeIn: {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
  fadeLeft: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  fadeRight: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  scale: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
  },
};

const delayClasses: Record<number, string> = {
  0: 'delay-0',
  100: 'delay-100',
  200: 'delay-200',
  300: 'delay-300',
  400: 'delay-[400ms]',
  500: 'delay-500',
};

const durationClasses: Record<number, string> = {
  300: 'duration-300',
  500: 'duration-500',
  700: 'duration-700',
  1000: 'duration-1000',
};

export function AnimatedSection({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 700,
  className = '',
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const { initial, animate } = animationClasses[animation];
  const delayClass = delayClasses[delay] || 'delay-0';
  const durationClass = durationClasses[duration] || 'duration-700';

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${durationClass} ${delayClass} ${
        isInView ? animate : initial
      } ${className}`}
    >
      {children}
    </div>
  );
}
