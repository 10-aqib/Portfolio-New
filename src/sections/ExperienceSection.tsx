import { GraduationCap } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { EDUCATION, EXPERIENCE, SKILLS } from '../data/content';

const HEADING = { fontSize: 'clamp(3rem, 12vw, 160px)' };

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#0C0C0C] px-5 pb-20 pt-10 sm:px-8 sm:pb-24 md:px-10 md:pb-32">
      <FadeIn as="h2" y={40}>
        <span
          className="hero-heading mb-16 block text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={HEADING}
        >
          Experience
        </span>
      </FadeIn>

      <ul className="mx-auto max-w-5xl">
        {EXPERIENCE.map((job, i) => (
          <FadeIn
            as="li"
            key={job.role}
            delay={i * 0.1}
            className="grid gap-3 py-8 sm:py-10 md:grid-cols-[240px_1fr] md:gap-12 md:py-12"
            style={{ borderTop: '1px solid rgba(215, 226, 234, 0.15)' }}
          >
            <span className="text-sm font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-base">
              {job.period}
            </span>
            <div className="flex flex-col gap-2">
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {job.role}
              </h3>
              <p className="text-sm font-medium uppercase tracking-wide text-[#D7E2EA] opacity-80 sm:text-base">
                {job.org}
              </p>
              <p
                className="max-w-2xl font-light leading-relaxed text-[#D7E2EA] opacity-70"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {job.text}
              </p>
            </div>
          </FadeIn>
        ))}

        <FadeIn
          as="li"
          className="grid gap-3 py-8 sm:py-10 md:grid-cols-[240px_1fr] md:gap-12 md:py-12"
          style={{ borderTop: '1px solid rgba(215, 226, 234, 0.15)' }}
        >
          <span className="text-sm font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-base">
            {EDUCATION.period}
          </span>
          <div className="flex flex-col gap-2">
            <h3
              className="flex items-center gap-3 font-medium uppercase text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
            >
              <GraduationCap className="h-6 w-6 shrink-0 sm:h-8 sm:w-8" aria-hidden="true" />
              {EDUCATION.degree}
            </h3>
            <p className="text-sm font-medium uppercase tracking-wide text-[#D7E2EA] opacity-80 sm:text-base">
              {EDUCATION.school}
            </p>
            <p className="mt-2 inline-flex w-fit rounded-full border border-[#D7E2EA]/40 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] sm:text-sm">
              {EDUCATION.badge}
            </p>
          </div>
        </FadeIn>

        <FadeIn
          as="li"
          className="grid gap-6 py-8 sm:py-10 md:grid-cols-[240px_1fr] md:gap-12 md:py-12"
          style={{ borderTop: '1px solid rgba(215, 226, 234, 0.15)' }}
        >
          <span className="text-sm font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-base">
            Skills
          </span>
          <div className="flex flex-col gap-6">
            {SKILLS.map((group) => (
              <div key={group.group} className="flex flex-col gap-3">
                <h3 className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA] sm:text-base">
                  {group.group}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[#D7E2EA]/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[#D7E2EA] sm:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </ul>
    </section>
  );
}
