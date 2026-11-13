import { useEffect, useRef } from 'react';
import { MARQUEE_IMAGES } from '../data/content';

const TILE_W = 420;
const TILE_H = 270;
const GAP = 12; // gap-3

const row1 = MARQUEE_IMAGES.slice(0, 11);
const row2 = MARQUEE_IMAGES.slice(11);
const triple = (items: string[]) => [...items, ...items, ...items];

// One full set of tiles. Rows are pre-shifted left by this much so the middle
// copy sits in view and there is content on both sides while scrolling.
const setWidth = (count: number) => count * (TILE_W + GAP);

function Row({ images, rowRef }: { images: string[]; rowRef: React.RefObject<HTMLDivElement> }) {
  return (
    <div
      ref={rowRef}
      className="flex w-max gap-3"
      style={{ marginLeft: -setWidth(images.length), willChange: 'transform' }}
    >
      {triple(images).map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          draggable={false}
          className="shrink-0 rounded-2xl object-cover"
          style={{ width: TILE_W, height: TILE_H }}
        />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const top = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - top + window.innerHeight) * 0.3;
      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-3 bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ overflowX: 'clip' }}
      aria-label="Selected work previews"
    >
      <Row images={row1} rowRef={row1Ref} />
      <Row images={row2} rowRef={row2Ref} />
    </section>
  );
}
