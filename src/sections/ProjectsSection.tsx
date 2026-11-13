import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { PROJECTS } from '../data/content';
import type { Project } from '../data/content';

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

interface CardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function ProjectCard({ project, index, total, progress }: CardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const { images } = project;

  return (
    <div className="sticky top-24 h-[85vh] md:top-32">
      <motion.article
        className={`relative flex origin-top flex-col gap-4 border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:gap-6 sm:p-6 md:p-8 ${RADIUS}`}
        style={{ scale, top: index * 28 }}
      >
        <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-2 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span
                className="font-light uppercase tracking-widest text-[#D7E2EA] opacity-60"
                style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.1rem)' }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </header>

        <div className="grid grid-cols-[40fr_60fr] gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4">
            <img
              src={images.topLeft}
              alt={`${project.name} — preview 1`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={images.bottomLeft}
              alt={`${project.name} — preview 2`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <img
            src={images.right}
            alt={`${project.name} — preview 3`}
            loading="lazy"
            className={`h-full w-full object-cover ${RADIUS}`}
          />
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn as="h2" y={40}>
        <span
          className="hero-heading mb-16 block text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </span>
      </FadeIn>

      <div ref={listRef} className="mx-auto max-w-[1400px]">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} total={PROJECTS.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
