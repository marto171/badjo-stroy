import RevealOnScroll from "./RevealOnScroll";

const services = [
  {
    icon: "fas fa-home",
    title: "Цялостно изграждане на покрив",
    desc: "Нов покрив „под ключ“ — конструкция, мембрана, керемиди и улуци. Един екип, един договор, една отговорност.",
    features: ["Дървена конструкция", "Паропропусклива мембрана", "Керемиди Bramac / Tondach"],
  },
  {
    icon: "fas fa-wrench",
    title: "Ремонт на стар покрив",
    desc: "Пренареждане на керемиди, подмяна на счупени, нова мушама под керемидите без пълен демонтаж.",
    features: ["Пренареждане на керемиди", "Подмяна на счупени плочи", "Локални течове"],
  },
  {
    icon: "fas fa-tint",
    title: "Хидроизолация на плосък покрив",
    desc: "Двупластова битумна хидроизолация с минерален посип. Решава проблеми с течове по тераси и плоски покриви.",
    features: ["Битумна мембрана", "Топло-хидроизолация", "Гаранция до 10 години"],
  },
  {
    icon: "fas fa-tree",
    title: "Дървена покривна конструкция",
    desc: "Изграждане на нова дървена конструкция за нискоетажни и многоетажни сгради. Импрегнирана дървесина срещу гниене и насекоми.",
    features: ["Греди и столици", "Импрегнация в завода", "OSB обшивка"],
  },
  {
    icon: "fas fa-water",
    title: "Улуци и водосточни системи",
    desc: "Хоризонтални и вертикални улуци, водосточни тръби, обшивки на капчуци и комини. Метални и PVC системи.",
    features: ["Улуци Bryza / Plastmo", "Челни и бордови обшивки", "Снегозадържатели"],
  },
  {
    icon: "fas fa-search",
    title: "Оглед и оценка на покрив",
    desc: "Безплатен оглед в рамките на 48 часа. Снимков отчет, точна оферта на хартия и препоръка какво наистина е спешно.",
    features: ["Безплатен оглед", "Снимков отчет", "Фиксирана оферта"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24 lg:py-32 bg-white" aria-label="Услуги">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll direction="up" className="text-center max-w-[640px] mx-auto mb-16">
          <span className="inline-block font-[family-name:var(--font-heading)] font-bold text-[0.8rem] tracking-[3px] uppercase text-[var(--color-gold)] mb-3">
            Какво предлагаме
          </span>
          <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-[clamp(1.75rem,4vw,2.75rem)] text-[var(--color-dark)] leading-tight mb-4">
            Услуги за <span className="text-[var(--color-gold)]">всеки покрив</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            От малък ремонт на 5 керемиди до изграждане на покрив върху нова къща — работим само едно и го знаем добре
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <RevealOnScroll key={service.title} direction="up" delay={i * 100}>
              <article className="group rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full">
                <div className="p-8 bg-white border border-gray-200 rounded-2xl h-full flex flex-col group-hover:border-[var(--color-gold)] transition-colors duration-250">
                  <div className="relative w-16 h-16 mb-6">
                    <div className="relative z-1 w-16 h-16 bg-[var(--color-gold)]/10 text-[var(--color-gold)] rounded-xl flex items-center justify-center text-2xl group-hover:text-white group-hover:scale-105 transition-all duration-250">
                      <i className={service.icon} />
                    </div>
                    <div className="absolute inset-0 bg-[var(--color-gold)] rounded-xl opacity-0 scale-[0.8] -rotate-6 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 transition-all duration-250" />
                  </div>

                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-xl text-[var(--color-dark)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[0.95rem] text-gray-500 leading-relaxed mb-5">{service.desc}</p>

                  <ul className="flex flex-col gap-2 mb-5 grow">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <i className="fas fa-check text-emerald-500 text-xs" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-200 pt-4">
                    <a
                      href="#contact"
                      className="font-[family-name:var(--font-heading)] font-semibold text-sm text-[var(--color-gold)] inline-flex items-center gap-2 hover:gap-3 hover:text-[var(--color-gold-dark)] transition-all duration-250"
                    >
                      Поискай оферта <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
