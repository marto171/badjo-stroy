import RevealOnScroll from "./RevealOnScroll";

const steps = [
  { num: "01", icon: "fas fa-phone-alt", title: "Обаждане и оглед", desc: "Получаваме обаждането ви, идваме на безплатен оглед до 48 часа. Снимаме и оценяваме." },
  { num: "02", icon: "fas fa-file-signature", title: "Оферта и договор", desc: "Изпращаме писмена оферта с разбити позиции. Подписваме договор с фиксирана цена." },
  { num: "03", icon: "fas fa-truck", title: "Доставка на материали", desc: "Доставяме керемиди, мембрана и греди директно от складовете на производителя — без надценка." },
  { num: "04", icon: "fas fa-hammer", title: "Демонтаж на старо", desc: "Сваляме старите керемиди, мушама и счупени греди. Изхвърляме строителните отпадъци." },
  { num: "05", icon: "fas fa-drafting-compass", title: "Нова конструкция", desc: "Изграждаме дървената конструкция или ремонтираме съществуващата с импрегнирана дървесина." },
  { num: "06", icon: "fas fa-layer-group", title: "Мембрана и летвена скара", desc: "Полагаме паропропусклива мембрана и летвена скара. Тук се решава дали покривът ще тече." },
  { num: "07", icon: "fas fa-check-circle", title: "Керемиди и предаване", desc: "Полагаме керемиди, монтираме улуци, чистим обекта и предаваме готовия покрив с гаранция." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[var(--color-dark)] overflow-hidden" aria-label="Процес на работа">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(232,98,26,0.08)_0%,transparent_40%),radial-gradient(circle_at_90%_80%,rgba(30,58,95,0.3)_0%,transparent_40%)]" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <RevealOnScroll direction="up" className="text-center max-w-[640px] mx-auto mb-16">
          <span className="inline-block font-[family-name:var(--font-heading)] font-bold text-[0.8rem] tracking-[3px] uppercase text-[var(--color-gold-light)] mb-3">
            Как работим
          </span>
          <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-[clamp(1.75rem,4vw,2.75rem)] text-white leading-tight mb-4">
            7 стъпки до <span className="text-[var(--color-gold)]">сух покрив</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Знаете точно какво се случва на всеки етап. Без сюрпризи, без „допълнителни разходи“ в средата.
          </p>
        </RevealOnScroll>

        <div className="max-w-[700px] mx-auto">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.num} direction="up" delay={i * 100}>
              <div className="flex gap-6 items-start mb-10 last:mb-0 relative group">
                <div className="w-14 h-14 min-w-[56px] rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center font-[family-name:var(--font-heading)] font-extrabold text-[var(--color-gold)] relative z-1 group-hover:bg-[var(--color-gold)] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_10px_40px_rgba(232,98,26,0.3)] transition-all duration-250">
                  {step.num}
                </div>
                <div className="bg-white/5 border border-white/8 rounded-xl p-5 grow group-hover:bg-white/8 group-hover:border-[var(--color-gold)]/30 group-hover:translate-x-2 transition-all duration-250">
                  <div className="text-[var(--color-gold)] text-xl mb-2">
                    <i className={step.icon} />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
