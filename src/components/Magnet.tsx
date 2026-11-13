import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  /** Distance (px) around the element in which the effect is active. */
  padding?: number;
  /** Higher = weaker pull. */
  strength?: number;
  disabled?: boolean;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  innerClassName?: string;
}

export default function Magnet({
  children,
  padding = 100,
  strength = 2,
  disabled = false,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  innerClassName,
}: MagnetProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (disabled || !wrapper || !inner) {
      if (inner) inner.style.transform = 'translate3d(0, 0, 0)';
      return;
    }

    let active = false;

    const set = (isActive: boolean, x: number, y: number) => {
      if (active !== isActive) {
        active = isActive;
        inner.style.transition = isActive ? activeTransition : inactiveTransition;
      }
      inner.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = wrapper.getBoundingClientRect();
      const cx = left + width / 2;
      const cy = top + height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      if (Math.abs(dx) < width / 2 + padding && Math.abs(dy) < height / 2 + padding) {
        set(true, dx / strength, dy / strength);
      } else {
        set(false, 0, 0);
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [padding, strength, disabled, activeTransition, inactiveTransition]);

  return (
    <div ref={wrapperRef} className={className} style={{ position: 'relative', display: 'inline-block' }}>
      <div
        ref={innerRef}
        className={innerClassName}
        style={{
          transition: inactiveTransition,
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
