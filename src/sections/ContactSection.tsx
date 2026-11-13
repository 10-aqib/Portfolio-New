import { Download, Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ContactButton from '../components/ContactButton';
import FadeIn from '../components/FadeIn';
import { CONTACT_HREF, PROFILE } from '../config';

const LINKS: { label: string; value: string; href: string; Icon: LucideIcon; external?: boolean }[] = [
  { label: 'Email', value: PROFILE.email, href: CONTACT_HREF, Icon: Mail },
  { label: 'Phone / WhatsApp', value: PROFILE.phone, href: PROFILE.phoneHref, Icon: Phone },
  { label: 'LinkedIn', value: 'in/aqib10', href: PROFILE.linkedin, Icon: Linkedin, external: true },
  { label: 'GitHub', value: '10-aqib', href: PROFILE.github, Icon: Github, external: true },
  { label: 'Instagram', value: '@aqibkhn._', href: PROFILE.instagram, Icon: Instagram, external: true },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 pb-10 pt-10 sm:px-8 md:px-10">
      <FadeIn as="h2" y={40}>
        <span
          className="hero-heading mb-8 block text-center font-black uppercase leading-none tracking-tight sm:mb-10"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </span>
      </FadeIn>

      <FadeIn className="mx-auto mb-14 max-w-xl text-center">
        <p
          className="font-light leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        >
          Need a website, an online store, an appointment system or a mobile app? No perfect brief required — tell me
          what you&rsquo;re building and I&rsquo;ll get back to you.
        </p>
      </FadeIn>

      <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LINKS.map(({ label, value, href, Icon, external }, i) => (
          <FadeIn as="li" key={label} delay={i * 0.08}>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex h-full items-center gap-4 rounded-[28px] border border-[#D7E2EA]/30 p-5 transition-colors duration-200 hover:bg-[#D7E2EA]/10"
            >
              <Icon className="h-6 w-6 shrink-0 text-[#D7E2EA]" aria-hidden="true" />
              <span className="flex min-w-0 flex-col">
                <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60">{label}</span>
                <span className="truncate text-sm font-medium text-[#D7E2EA] sm:text-base">{value}</span>
              </span>
            </a>
          </FadeIn>
        ))}
      </ul>

      <FadeIn className="mt-14 flex flex-wrap items-center justify-center gap-4">
        <ContactButton />
        <a
          href={PROFILE.cv}
          download
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download CV
        </a>
      </FadeIn>

      <footer className="mt-20 border-t border-[#D7E2EA]/15 pt-6 text-center text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
        © 2026 {PROFILE.name} · {PROFILE.location}
      </footer>
    </section>
  );
}
