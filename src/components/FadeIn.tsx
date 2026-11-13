import { motion } from 'framer-motion';
import type { CSSProperties, ElementType, ReactNode } from 'react';

type Tag = 'div' | 'h1' | 'h2' | 'p' | 'span' | 'nav' | 'li' | 'section';

// motion.create() must not run on every render, so cache one component per tag.
const cache = new Map<Tag, ElementType>();
const getMotion = (tag: Tag): ElementType => {
  let component = cache.get(tag);
  if (!component) {
    component = motion.create(tag);
    cache.set(tag, component);
  }
  return component;
};

interface FadeInProps {
  children: ReactNode;
  as?: Tag;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
}

export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: FadeInProps) {
  const Component = getMotion(as);
  return (
    <Component
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Component>
  );
}
