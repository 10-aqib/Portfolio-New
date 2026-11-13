import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import FadeIn from '../components/FadeIn';
import { ABOUT_IMAGES, ABOUT_TEXT } from '../data/content';

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

      <div className="relative z-10">
        <ContactButton />
      </div>
    </section>
  );
}
