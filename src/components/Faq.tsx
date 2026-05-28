"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import { faqs } from "@/lib/faqs";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24 lg:py-32 bg-white" aria-label="Често задавани въпроси">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll direction="up" className="text-center max-w-[640px] mx-auto mb-12">
          <span className="inline-block font-[family-name:var(--font-heading)] font-bold text-[0.8rem] tracking-[3px] uppercase text-[var(--color-gold)] mb-3">
            Често задавани въпроси
          </span>
          <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-[clamp(1.75rem,4vw,2.75rem)] text-[var(--color-dark)] leading-tight mb-4">
            Отговори преди да <span className="text-[var(--color-gold)]">попитате</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Това са въпросите, които клиентите ни задават най-често. Ако вашият не е тук — обадете ни се.
          </p>
        </RevealOnScroll>

        <div className="max-w-[820px] mx-auto flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <RevealOnScroll key={item.q} direction="up" delay={i * 50}>
                <div
                  className={`border-2 rounded-xl transition-all duration-250 ${
                    isOpen
                      ? "border-[var(--color-gold)] bg-[var(--color-gold)]/5"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-dark)] text-base md:text-lg">
                      {item.q}
                    </span>
                    <i
                      className={`fas fa-chevron-down text-[var(--color-gold)] transition-transform duration-250 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll direction="up" className="text-center mt-12">
          <p className="text-gray-500 mb-4">Имате друг въпрос?</p>
          <a
            href="tel:+359888123456"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-heading)] font-semibold bg-[var(--color-gold)] text-white px-8 py-4 rounded-full shadow-[0_10px_40px_rgba(232,98,26,0.3)] hover:bg-[var(--color-gold-dark)] hover:-translate-y-0.5 transition-all duration-250"
          >
            <i className="fas fa-phone-alt" />
            <span>+359 888 123 456</span>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
