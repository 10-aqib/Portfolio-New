import { CONTACT_HREF, PROFILE } from '../config';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_PORTRAIT = '/images/aqib.webp';

const P = '/images/projects';

// Two rows of project previews for the scroll marquee.
export const MARQUEE_ROW_1 = [
  `${P}/1tap.jpg`,
  `${P}/beef-burger.jpg`,
  `${P}/space-cleaner.jpg`,
  `${P}/mobile-1tap.webp`,
  `${P}/mobile-beef-burger.webp`,
  `${P}/mobile-space-cleaner.webp`,
];
export const MARQUEE_ROW_2 = [
  `${P}/mobile-space-cleaner.webp`,
  `${P}/space-cleaner.jpg`,
  `${P}/mobile-beef-burger.webp`,
  `${P}/beef-burger.jpg`,
  `${P}/mobile-1tap.webp`,
  `${P}/1tap.jpg`,
];

const ICONS = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7';

export const ABOUT_IMAGES = [
  {
    src: `${ICONS}/moon_icon.11395d36.png`,
    className: 'w-[120px] sm:w-[160px] md:w-[210px] top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    delay: 0.1,
    x: -80,
  },
  {
    src: `${ICONS}/p59_1.4659672e.png`,
    className: 'w-[100px] sm:w-[140px] md:w-[180px] bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
    delay: 0.25,
    x: -80,
  },
  {
    src: `${ICONS}/lego_icon-1.703bb594.png`,
    className: 'w-[120px] sm:w-[160px] md:w-[210px] top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    delay: 0.15,
    x: 80,
  },
  {
    src: `${ICONS}/Group_134-1.2e04f3ce.png`,
    className: 'w-[130px] sm:w-[170px] md:w-[220px] bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
    delay: 0.3,
    x: 80,
  },
];

export const ABOUT_TEXT =
  "My name is Muhammad Aqib, a web and mobile application developer and BS Information Technology student in Islamabad. I build Flutter apps on Firebase, React and Next.js sites with real-time sync, and websites for local businesses. Let's build something useful together!";

export const ABOUT_FACTS = [
  { label: 'Based in', value: PROFILE.location },
  { label: 'Languages', value: 'Urdu, English' },
  { label: 'Open to', value: 'Freelance · Remote · Hybrid · On-site' },
];

export const STATS = [
  { value: '5+', label: 'Projects delivered for local businesses' },
  { value: '2nd', label: 'Place · Project Gala, Bahria University' },
];

export const SERVICES = [
  {
    name: 'Web Development',
    description:
      'Responsive websites and modern web apps built with React and Next.js — fast, clean and made for real users.',
  },
  {
    name: 'Mobile Apps',
    description:
      'Cross-platform apps with Flutter and Dart, backed by Firebase, from the first screen to a finished product.',
  },
  {
    name: 'Full-Stack Solutions',
    description:
      'End-to-end products with Node.js and Supabase: databases, authentication and REST APIs that just work.',
  },
  {
    name: 'UI / UX',
    description:
      'Mobile-first, responsive interfaces with motion and attention to detail that make an app feel effortless.',
  },
  {
    name: 'Backend & Cloud',
    description: 'Firebase and Firestore, APIs and webhooks, and smooth deployments on Vercel.',
  },
  {
    name: 'AI & Automation',
    description:
      'AI chat and API integrations plus business automation, from e-commerce stores to appointment systems.',
  },
];

export interface Project {
  number: string;
  category: string;
  name: string;
  description: string;
  stack: string[];
  live: string;
  repo: string;
  images: { landscape: string; tall: string };
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Real-time web app',
    name: '1Tap',
    description:
      'Move text, links and files between devices with no account or signup. Join a shared room on the same Wi-Fi, or pair privately with a room code or QR code.',
    stack: ['React', 'TypeScript', 'Supabase Realtime', 'TanStack Router', 'Tailwind CSS'],
    live: 'https://1tap-theta.vercel.app',
    repo: 'https://github.com/10-aqib/1Tap',
    images: { landscape: `${P}/1tap.jpg`, tall: `${P}/mobile-1tap.webp` },
  },
  {
    number: '02',
    category: 'Restaurant ordering',
    name: 'Beef Burger Patties',
    description:
      'A cinematic burger-restaurant website with online ordering: a topping-by-topping burger builder, kitchen notes, a cart, deals and branch discovery.',
    stack: ['React', 'TypeScript', 'GSAP', 'Framer Motion', 'Zustand', 'Supabase'],
    live: 'https://beef-burger-patties.vercel.app',
    repo: 'https://github.com/10-aqib/Beef-Burger-Patties',
    images: { landscape: `${P}/beef-burger.jpg`, tall: `${P}/mobile-beef-burger.webp` },
  },
  {
    number: '03',
    category: 'Storage tool',
    name: 'Space Cleaner',
    description:
      'Finds duplicate, unused and heavy files and shows where your disk space went, using interactive D3 maps, a virtualized file list and a keyboard command palette.',
    stack: ['React', 'TypeScript', 'Vite', 'D3.js', 'TanStack Virtual', 'Zustand', 'Tauri'],
    live: 'https://space-cleaner.vercel.app',
    repo: 'https://github.com/10-aqib/Cleaner',
    images: { landscape: `${P}/space-cleaner.jpg`, tall: `${P}/mobile-space-cleaner.webp` },
  },
];

export const MORE_PROJECTS = [
  {
    name: 'SkillBridge',
    tag: 'Final Year Project',
    text: 'Connects customers with reliable local skilled workers — a Flutter + Firebase mobile app with a Next.js + Supabase website.',
    repo: 'https://github.com/10-aqib/SkillBridge-',
  },
  {
    name: 'PixelMint',
    tag: 'Web tool',
    text: 'Compress, resize and convert images entirely in the browser. Nothing is ever uploaded to a server.',
    repo: 'https://github.com/10-aqib/PixelMint',
  },
  {
    name: 'Speech ⇄ Text',
    tag: 'Flutter app',
    text: 'Converts speech to text in real time and reads typed text aloud.',
    repo: 'https://github.com/10-aqib/TEXT-TO-SPEECH-',
  },
  {
    name: 'Infinity Basket Mart',
    tag: 'Client project',
    text: 'An e-commerce website for a local mart in F-8, Islamabad.',
    repo: 'https://github.com/10-aqib/Infinity-Basket-Mart',
  },
];

export const EXPERIENCE = [
  {
    period: 'May 2026 — Present',
    role: 'Software & Digital Solutions Intern',
    org: 'Altaf Developers',
    text: 'Website maintenance and optimisation, digital solutions for clients, a client appointment management system, and Meta Ads campaigns.',
  },
  {
    period: 'June 2024 — Present',
    role: 'Digital Solutions Developer',
    org: 'Freelance · Local businesses, Islamabad',
    text: '5+ projects delivered — websites and e-commerce, including Infinity Basket Mart for a mart in F-8.',
  },
  {
    period: 'Jan 2023 — Present',
    role: 'Web & Mobile Developer',
    org: 'Independent & project work',
    text: 'Built and deployed 1Tap, Beef Burger Patties and Space Cleaner; built PixelMint and SkillBridge.',
  },
];

export const EDUCATION = {
  period: 'Jan 2023 — Jan 2027',
  degree: 'BS Information Technology',
  school: 'Bahria University, Main Campus E-8, Islamabad',
  badge: '2nd Place · Project Gala (university level)',
};

export const SKILLS = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'] },
  { group: 'Mobile', items: ['Flutter', 'Dart', 'Riverpod'] },
  { group: 'Backend & Data', items: ['Node.js', 'Firebase', 'Firestore', 'Supabase', 'REST APIs'] },
  { group: 'Tools', items: ['Vercel', 'Git & GitHub', 'D3.js', 'Zustand', 'Tauri'] },
  { group: 'Also', items: ['AI integration', 'Business automation', 'Meta Ads'] },
];

export { CONTACT_HREF };
