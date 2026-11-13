import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { Github } from 'lucide-react';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { MORE_PROJECTS, PROJECTS } from '../data/content';
import type { Project } from '../data/content';
import { PROFILE } from '../config';

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
        <header className="flex flex-col gap-3 px-2 sm:px-4">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
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
            <LiveProjectButton href={project.live} />
          </div>
          <p
            className="max-w-3xl font-light leading-relaxed text-[#D7E2EA] opacity-70"
            style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1.1rem)' }}
          >
            {project.description}
          </p>
        </header>

        <div className="grid grid-cols-[40fr_60fr] gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4">
            <img
              src={images.landscape}
              alt={`${project.name} — desktop preview`}
              loading="lazy"
              className={`w-full object-cover object-top ${RADIUS}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <div
              className={`flex flex-col justify-between gap-2 overflow-hidden border border-[#D7E2EA]/30 px-4 py-5 sm:gap-3 sm:p-6 ${RADIUS}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <ul className="flex flex-wrap gap-1 sm:gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-[#D7E2EA]/40 px-1.5 py-px text-[9px] font-medium uppercase tracking-normal text-[#D7E2EA] sm:px-3 sm:py-1 sm:text-xs sm:tracking-wide"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-opacity hover:opacity-70 sm:text-sm"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                Source
              </a>
            </div>
          </div>
          {/* Absolutely positioned so the tall screenshot never stretches the grid row. */}
          <div className={`relative overflow-hidden ${RADIUS}`}>
            <img
              src={images.tall}
              alt={`${project.name} — mobile preview`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
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

      <div className="mx-auto mt-16 max-w-[1400px] sm:mt-24">
        <FadeIn>
          <h3 className="mb-8 text-center text-sm font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-base">
            More projects
          </h3>
        </FadeIn>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MORE_PROJECTS.map((item, i) => (
            <FadeIn as="li" key={item.name} delay={i * 0.1}>
              <a
                href={item.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col gap-3 rounded-[28px] border border-[#D7E2EA]/30 p-6 transition-colors duration-200 hover:bg-[#D7E2EA]/10"
              >
                <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60">
                  {item.tag}
                </span>
                <span className="text-xl font-medium uppercase text-[#D7E2EA]">{item.name}</span>
                <span className="text-sm font-light leading-relaxed text-[#D7E2EA] opacity-70">{item.text}</span>
              </a>
            </FadeIn>
          ))}
        </ul>
        <FadeIn className="mt-10 text-center">
          <a
            href={PROFILE.githubRepos}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA] underline-offset-8 transition-opacity hover:underline hover:opacity-70"
          >
            All repositories on GitHub ↗
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
