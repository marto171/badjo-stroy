"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Direction = "up" | "left" | "right";

interface Props {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

export default function RevealOnScroll({ children, direction = "up", delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("revealed"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-${direction} ${className}`}>
      {children}
    </div>
  );
}
