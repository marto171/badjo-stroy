"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const start = performance.now();

          function update(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el!.textContent = Math.round(eased * target).toLocaleString();
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <>
      <span ref={ref} className="font-[family-name:var(--font-heading)] font-black text-[2.5rem] text-[var(--color-gold)] leading-none">
        0
      </span>
      {suffix && (
        <span className="font-[family-name:var(--font-heading)] font-black text-[2rem] text-[var(--color-gold)]">
          {suffix}
        </span>
      )}
    </>
  );
}

function Particles() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const size = 2 + Math.random() * 4;
      p.style.cssText = `left:${Math.random() * 100}%;width:${size}px;height:${size}px;animation-delay:${Math.random() * 6}s;animation-duration:${4 + Math.random() * 4}s;opacity:${0.1 + Math.random() * 0.4}`;
      container.appendChild(p);
    }
  }, []);

  return <div ref={ref} className="absolute inset-0 overflow-hidden" />;
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth <= 768) return;

    const hero = heroRef.current;
    if (!hero) return;

    const content = hero.querySelector(".hero-parallax-target") as HTMLElement;
    if (!content) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      content.style.transform = `translate(${x}px, ${y}px)`;
    };

    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  const stats = [
    { target: 18, suffix: "+", label: "Години опит" },
    { target: 850, suffix: "+", label: "Покрива готови" },
    { target: 15, suffix: "", label: "Год. гаранция" },
    { target: 48, suffix: "ч", label: "Безплатен оглед" },
  ];

  return (
    <section id="hero" ref={heroRef} className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-[var(--color-dark)]">
      <div className="absolute inset-0">
        <Image
          src="/01-master-roof-view.jpg"
          alt="Майстор работи върху покрив с керемиди — Баджо Строй"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-[var(--color-dark)]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(232,98,26,0.18)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(30,58,95,0.4)_0%,transparent_50%),radial-gradient(ellipse_at_50%_100%,rgba(12,18,32,0.6)_0%,transparent_50%)]" />
        <Particles />
      </div>

      <div className="hero-parallax-target relative z-2 text-center px-6 pt-32 pb-20 max-w-[1200px] mx-auto">
        <RevealOnScroll direction="up">
          <div className="inline-flex items-center gap-2 bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/30 text-[var(--color-gold)] px-6 py-2 rounded-full font-[family-name:var(--font-heading)] font-semibold text-[0.85rem] tracking-wider mb-8">
            <i className="fas fa-shield-alt" />
            <span>15 години писмена гаранция</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100}>
          <h1 className="font-[family-name:var(--font-heading)] font-black text-[clamp(2rem,6vw,4rem)] text-white leading-[1.15] mb-6">
            Ремонт и изграждане
            <br />
            на покриви <span className="text-gradient">без компромис</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={200}>
          <p className="text-[clamp(1rem,2vw,1.2rem)] text-white/70 max-w-[640px] mx-auto mb-10 leading-relaxed">
            Керемиди, дървени конструкции, мембрани, улуци и хидроизолация. Работим с договор, фиксирана цена и до 15 години гаранция в цяла България.
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={300}>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <a
              href="#contact"
              className="btn-shimmer relative overflow-hidden inline-flex items-center gap-2 font-[family-name:var(--font-heading)] font-semibold bg-[var(--color-gold)] text-white px-8 py-4 rounded-full shadow-[0_10px_40px_rgba(232,98,26,0.3)] hover:bg-[var(--color-gold-dark)] hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(232,98,26,0.4)] transition-all duration-250"
            >
              <span>Безплатна оферта</span>
              <i className="fas fa-arrow-right" />
            </a>
            <a
              href="tel:+359888996917"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-heading)] font-semibold border-2 border-white/30 text-white px-8 py-4 rounded-full hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:-translate-y-0.5 transition-all duration-250"
            >
              <i className="fas fa-phone-alt" />
              <span>+359 88 8996917</span>
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={350}>
          <p className="text-white/50 text-sm mb-12">
            Без ангажимент &middot; Безплатен оглед в рамките на 48ч &middot; Отговор до 1 час
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={400}>
          <div className="flex flex-wrap justify-center gap-6 md:flex-nowrap px-6 py-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                <div className="text-center min-w-[100px]">
                  <div>
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <span className="block text-white/60 text-[0.85rem] mt-1 font-medium">{stat.label}</span>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-3">
        <a href="#about" aria-label="Скролнете надолу">
          <div className="w-[26px] h-10 border-2 border-white/30 rounded-[14px] relative">
            <div className="scroll-wheel w-1 h-2 bg-[var(--color-gold)] rounded-sm absolute top-2 left-1/2 -translate-x-1/2" />
          </div>
        </a>
      </div>
    </section>
  );
}
