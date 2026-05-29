import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function CtaBanner() {
  return (
    <section className="relative py-24 overflow-hidden" aria-label="Призив за действие">
      <Image
        src="/05-finished-roof-vista.jpg"
        alt="Готов покрив — Гео Строй"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[var(--color-gold)]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(0,0,0,0.1)_0%,transparent_50%)]" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <RevealOnScroll direction="up" className="text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-[clamp(1.5rem,4vw,2.5rem)] text-white mb-4">
            Тече ли ви покривът? Не чакайте следващия дъжд.
          </h2>
          <p className="text-lg text-white/90 max-w-[540px] mx-auto mb-8">
            Безплатен оглед до 48 часа. Точна оферта на хартия. Започваме за 7 дни.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+359888996917"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-heading)] font-semibold bg-white text-[var(--color-dark)] px-8 py-4 rounded-full hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-250"
            >
              <i className="fas fa-phone-alt" />
              <span>+359 88 8996917</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-heading)] font-semibold border-2 border-white/40 text-white px-8 py-4 rounded-full hover:border-white hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-250"
            >
              <span>Поискай оферта</span>
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
