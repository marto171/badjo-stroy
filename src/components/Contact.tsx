import RevealOnScroll from "./RevealOnScroll";

const PHONE_DISPLAY = "+359 88 8996917";
const PHONE_HREF = "tel:+359888996917";

const contactCards = [
  { icon: "fas fa-envelope", title: "Имейл", content: "info@badjostroy.bg", href: "mailto:info@badjostroy.bg" },
  { icon: "fas fa-clock", title: "Работно време", content: "Пон - Съб: 08:00 - 19:00" },
  { icon: "fas fa-map-marker-alt", title: "Обслужваме", content: "Цяла България" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 lg:py-32 bg-white" aria-label="Контакти">
      <div className="max-w-[900px] mx-auto px-6">
        <RevealOnScroll direction="up" className="text-center max-w-[640px] mx-auto mb-12">
          <span className="inline-block font-[family-name:var(--font-heading)] font-bold text-[0.8rem] tracking-[3px] uppercase text-[var(--color-gold)] mb-3">
            Контакти
          </span>
          <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-[clamp(1.75rem,4vw,2.75rem)] text-[var(--color-dark)] leading-tight mb-4">
            Обадете се <span className="text-[var(--color-gold)]">сега</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Безплатна консултация и оглед до 48 часа. Без ангажимент.
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <a
            href={PHONE_HREF}
            className="group block bg-[var(--color-gold)] rounded-3xl p-10 md:p-14 text-center shadow-[0_20px_60px_rgba(232,98,26,0.3)] hover:shadow-[0_25px_70px_rgba(232,98,26,0.4)] hover:-translate-y-1 transition-all duration-300"
            aria-label={`Обади се на ${PHONE_DISPLAY}`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-phone-alt text-white text-2xl" />
            </div>
            <p className="font-[family-name:var(--font-heading)] font-semibold text-white/80 text-sm tracking-[2px] uppercase mb-2">
              Обади се директно
            </p>
            <p className="font-[family-name:var(--font-heading)] font-black text-white text-[clamp(2rem,6vw,3.25rem)] leading-none mb-3">
              {PHONE_DISPLAY}
            </p>
            <p className="text-white/80 text-sm">
              Отговор до 1 час в работно време
            </p>
          </a>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {contactCards.map((card, i) => (
            <RevealOnScroll key={card.title} direction="up" delay={i * 100}>
              <div className="flex gap-4 items-center p-5 bg-gray-50 rounded-xl border border-gray-200 h-full hover:border-[var(--color-gold)] hover:shadow-lg transition-all duration-250">
                <div className="w-11 h-11 min-w-[44px] bg-[var(--color-gold)]/10 text-[var(--color-gold)] rounded-xl flex items-center justify-center text-lg">
                  <i className={card.icon} />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[0.85rem] text-[var(--color-dark)] mb-0.5">
                    {card.title}
                  </h3>
                  {card.href ? (
                    <a href={card.href} className="text-[var(--color-gold)] text-sm font-semibold hover:text-[var(--color-gold-dark)] transition-colors duration-250 break-all">
                      {card.content}
                    </a>
                  ) : (
                    <p className="text-xs text-gray-500">{card.content}</p>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll direction="up" delay={300}>
          <div className="mt-10 p-5 bg-[var(--color-gold)]/5 rounded-xl border border-[var(--color-gold)]/30 flex items-start gap-3">
            <i className="fas fa-leaf text-[var(--color-gold)] mt-0.5" />
            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--color-dark)] mb-1">
                Сертифицирани материали
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Работим само с Bramac, Tondach, Kebe, Bryza — получавате оригинална гаранция от производителя плюс нашата.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
