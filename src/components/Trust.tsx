import RevealOnScroll from "./RevealOnScroll";

const testimonials = [
  {
    name: "Иван П.",
    location: "с. Брестовица, обл. Пловдив",
    date: "2025-09-04",
    quote:
      "Подмениха целия покрив на старата ни къща за 6 дни. Договор, фактура, чисто свършена работа. Кмета на селото вече ги препоръчва на половината хора в улицата.",
    rating: 5,
  },
  {
    name: "Петя М.",
    location: "гр. София, кв. Драгалевци",
    date: "2024-06-21",
    quote:
      "Имахме теч в спалнята при всеки дъжд — два пъти други майстори ни „оправяха“ покрива, и пак течеше. Тези намериха проблема за 20 минути по време на огледа. От година — суха стая.",
    rating: 5,
  },
  {
    name: "Георги С.",
    location: "гр. Стара Загора",
    date: "2022-11-15",
    quote:
      "Прави нов покрив на двуетажна къща. Фиксирана цена, никакви „по време разходи“. След две дъждовни седмици — нула капки. Гаранцията 15 години е реална, в договор.",
    rating: 5,
  },
];

const trustItems = [
  { icon: "fas fa-file-signature", title: "Договор с фиксирана цена", desc: "Подписваме преди да започнем" },
  { icon: "fas fa-shield-alt", title: "До 15 г. писмена гаранция", desc: "В протокола за предаване" },
  { icon: "fas fa-receipt", title: "Фактура с реални материали", desc: "Без скрити надценки" },
  { icon: "fas fa-tools", title: "Само покриви — 18+ години", desc: "Не правим друго" },
];

export default function Trust() {
  return (
    <section id="trust" className="py-20 md:py-24 lg:py-32 bg-white" aria-label="Доверие">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll direction="up" className="text-center max-w-[640px] mx-auto mb-16">
          <span className="inline-block font-[family-name:var(--font-heading)] font-bold text-[0.8rem] tracking-[3px] uppercase text-[var(--color-gold)] mb-3">
            Защо нас
          </span>
          <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-[clamp(1.75rem,4vw,2.75rem)] text-[var(--color-dark)] leading-tight mb-4">
            Гаранции, не <span className="text-[var(--color-gold)]">обещания</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Всичко важно е на хартия. Така и двете страни сме спокойни.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {trustItems.map((t, i) => (
            <RevealOnScroll key={t.title} direction="up" delay={i * 80}>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center h-full hover:border-[var(--color-gold)] hover:-translate-y-1 hover:shadow-lg transition-all duration-250">
                <div className="w-12 h-12 mx-auto mb-4 bg-[var(--color-gold)]/10 text-[var(--color-gold)] rounded-xl flex items-center justify-center text-lg">
                  <i className={t.icon} />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--color-dark)] mb-1">{t.title}</h3>
                <p className="text-xs text-gray-500 leading-snug">{t.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.name} direction="up" delay={i * 120}>
              <article className="p-7 bg-gray-50 rounded-2xl border border-gray-200 h-full flex flex-col hover:border-[var(--color-gold)] hover:shadow-lg transition-all duration-250">
                <div className="flex text-[var(--color-gold)] mb-3 text-sm">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <i key={idx} className="fas fa-star" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 grow">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-dark)] text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.location} &middot; {t.date}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
