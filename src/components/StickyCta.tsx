"use client";

import { useEffect, useState } from "react";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-[998] bg-[var(--color-dark)]/95 backdrop-blur-xl border-t border-white/10 p-3 grid grid-cols-2 gap-2"
      style={{ animation: "slideUp 0.3s ease" }}
    >
      <a
        href="tel:+359888996917"
        className="inline-flex items-center justify-center gap-2 font-[family-name:var(--font-heading)] font-semibold text-sm bg-emerald-600 text-white py-3 rounded-full"
      >
        <i className="fas fa-phone-alt" />
        Обади се
      </a>
      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-2 font-[family-name:var(--font-heading)] font-semibold text-sm bg-[var(--color-gold)] text-white py-3 rounded-full"
      >
        Безплатна оферта
        <i className="fas fa-arrow-right" />
      </a>
    </div>
  );
}
