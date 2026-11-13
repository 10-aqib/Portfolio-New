import { motion, useScroll, useTransform } from 'framer-motion';
import type { CSSProperties } from 'react';
import { Fragment, useRef } from 'react';
import type { MotionValue } from 'framer-motion';

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative" aria-hidden="true">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const total = text.length;
  let cursor = 0;

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, wi) => {
        const wordStart = cursor;
        cursor += word.length + 1; // +1 for the space after the word
        return (
          <Fragment key={wi}>
            <span className="inline-block whitespace-nowrap" aria-hidden="true">
            {word.split('').map((char, ci) => {
              const i = wordStart + ci;
              return <Char key={ci} char={char} progress={scrollYProgress} range={[i / total, (i + 1) / total]} />;
            })}
            </span>
            {/* The space lives outside the inline-block so it isn't collapsed and lines can wrap between words. */}
            {wi < words.length - 1 && ' '}
          </Fragment>
        );
      })}
    </p>
  );
}
