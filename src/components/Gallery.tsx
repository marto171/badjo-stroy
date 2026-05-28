"use client";

import { useState } from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const filters = [
  { key: "all", label: "Всички" },
  { key: "new", label: "Нови покриви" },
  { key: "repair", label: "Ремонти" },
  { key: "flat", label: "Хидроизолация" },
];

const items = [
  { src: "/01-master-roof-view.jpg", category: "repair", tag: "Ремонт", title: "Майстор по време на ремонт на керемиди" },
  { src: "/02-team-chimney-mountains.jpg", category: "repair", tag: "Ремонт", title: "Работа около комин в село край планина" },
  { src: "/03-ridge-tiles.jpg", category: "repair", tag: "Ремонт", title: "Монтаж на капаци на билото" },
  { src: "/04-tile-stacks.jpg", category: "new", tag: "Нов покрив", title: "Подреждане на керемиди преди монтаж" },
  { src: "/05-finished-roof-vista.jpg", category: "new", tag: "Нов покрив", title: "Завършен покрив с изглед към полето" },
  { src: "/06-wooden-truss.jpg", category: "new", tag: "Нов покрив", title: "Нова дървена покривна конструкция" },
  { src: "/07-new-tile-roof.jpg", category: "new", tag: "Нов покрив", title: "Готов керемиден покрив на нова къща" },
  { src: "/08-rural-house-roof.jpg", category: "repair", tag: "Ремонт", title: "Сглобяване на материали — селска къща" },
  { src: "/09-tile-laying.jpg", category: "new", tag: "Нов покрив", title: "Полагане на керемиди върху летвена скара" },
  { src: "/10-osb-decking.jpg", category: "new", tag: "Нов покрив", title: "OSB обшивка на нова покривна плоча" },
  { src: "/11-membrane-install.jpg", category: "repair", tag: "Ремонт", title: "Монтаж на нова мембрана под керемиди" },
  { src: "/12-flat-roof-waterproof.jpg", category: "flat", tag: "Плосък покрив", title: "Двупластова битумна хидроизолация" },
];

export default function Gallery() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? items : items.filter((it) => it.category === active);

  return (
    <section id="gallery" className="py-20 md:py-24 lg:py-32 bg-gray-50" aria-label="Галерия">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll direction="up" className="text-center max-w-[640px] mx-auto mb-12">
          <span className="inline-block font-[family-name:var(--font-heading)] font-bold text-[0.8rem] tracking-[3px] uppercase text-[var(--color-gold)] mb-3">
            Нашата работа
          </span>
          <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-[clamp(1.75rem,4vw,2.75rem)] text-[var(--color-dark)] leading-tight mb-4">
            Реални <span className="text-[var(--color-gold)]">обекти</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Снимки от истински покриви на наши клиенти — не stock фотографии
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`font-[family-name:var(--font-heading)] font-semibold text-sm px-5 py-2 rounded-full border-2 min-h-[44px] transition-all duration-250 cursor-pointer ${
                  active === f.key
                    ? "bg-[var(--color-gold)] border-[var(--color-gold)] text-white"
                    : "border-gray-200 text-gray-500 hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <div
              key={`${item.src}-${active}`}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] hover:scale-[1.02] transition-transform duration-250"
              style={{ animation: "fadeScale 0.4s ease forwards" }}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading={i < 6 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/90 via-transparent to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                <span className="font-[family-name:var(--font-heading)] font-semibold text-xs text-[var(--color-gold)] tracking-wider uppercase mb-1">
                  {item.tag}
                </span>
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-white">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
