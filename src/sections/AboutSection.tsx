import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import FadeIn from '../components/FadeIn';
import { ABOUT_FACTS, ABOUT_IMAGES, ABOUT_TEXT, STATS } from '../data/content';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center gap-16 px-5 py-20 sm:gap-20 sm:px-8 md:gap-24 md:px-10"
    >
      {ABOUT_IMAGES.map((img) => (
        <FadeIn
          key={img.src}
          delay={img.delay}
          x={img.x}
          y={0}
          duration={0.9}
          className={`pointer-events-none absolute ${img.className}`}
        >
          <img src={img.src} alt="" loading="lazy" className="h-auto w-full select-none" draggable={false} />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn as="h2" delay={0} y={40}>
          <span
            className="hero-heading block text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </span>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>

      <FadeIn className="relative z-10 grid w-full max-w-4xl gap-8 sm:grid-cols-[1fr_1fr_1.6fr] sm:gap-6">
        {ABOUT_FACTS.map((fact) => (
          <div key={fact.label} className="text-center">
            <p className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
              {fact.label}
            </p>
            <p className="mt-1 text-sm font-medium text-[#D7E2EA] sm:text-base">{fact.value}</p>
          </div>
        ))}
      </FadeIn>

      <FadeIn className="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {STATS.map((stat) => (
          <div key={stat.value} className="flex items-center gap-4">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 80px)' }}
            >
              {stat.value}
            </span>
            <span className="max-w-[150px] text-xs font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </FadeIn>

      <div className="relative z-10">
        <ContactButton />
      </div>
    </section>
  );
}
