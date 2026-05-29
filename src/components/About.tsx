import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const features = [
  {
    icon: "fas fa-handshake",
    title: "Работа с договор",
    desc: "Фиксирана цена и срок предварително. Без скрити такси и без изненади след старта.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "До 15 години гаранция",
    desc: "Писмена гаранция за всеки нов покрив — конструкция, мембрана и керемиди.",
  },
  {
    icon: "fas fa-clock",
    title: "Спазваме сроковете",
    desc: "Започваме до 7 дни от подписване на договора. Един покрив — една седмица на обект.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 lg:py-32 bg-gray-50" aria-label="За нас">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealOnScroll direction="left">
            <div className="relative max-w-[460px] mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/07-new-tile-roof.jpg"
                    alt="Завършен керемиден покрив — Баджо Строй"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 460px"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 w-40 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="relative h-[120px] rounded-xl overflow-hidden">
                  <Image
                    src="/02-team-chimney-mountains.jpg"
                    alt="Екип на Баджо Строй по време на работа"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-[100px] h-[100px] bg-[var(--color-gold)] rounded-full flex flex-col items-center justify-center shadow-[0_10px_40px_rgba(232,98,26,0.3)] animate-[badgePulse_3s_ease_infinite]">
                <span className="font-[family-name:var(--font-heading)] font-black text-3xl text-white leading-none">18+</span>
                <span className="text-[0.65rem] text-white/90 font-semibold text-center leading-tight">Години<br />Опит</span>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <div>
              <span className="inline-block font-[family-name:var(--font-heading)] font-bold text-[0.8rem] tracking-[3px] uppercase text-[var(--color-gold)] mb-3">
                За Нас
              </span>
              <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-[clamp(1.75rem,4vw,2.75rem)] text-[var(--color-dark)] leading-tight mb-4">
                Покривът на дома ви е{" "}
                <span className="text-[var(--color-gold)]">в надеждни ръце</span>
              </h2>
              <p className="text-gray-500 mb-4 leading-relaxed">
                От 2007 г. в <strong className="text-[var(--color-dark)] font-semibold">Баджо Строй</strong> работим само едно нещо — покриви. Над 850 завършени обекта в цяла България, без рекламации и без съдебни дела с клиенти. Това не е реклама — това е резултатът от качествени материали Bramac, Tondach и Kebe плюс екип, който познава всеки сантиметър от покривната конструкция.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Подписваме договор с фиксирана цена преди да започнем. Получавате писмена гаранция до 15 години, протокол с използваните материали и фактура. Ако нещо не е както трябва — идваме и оправяме за наша сметка.
              </p>

              <div className="flex flex-col gap-6">
                {features.map((f) => (
                  <div key={f.title} className="group flex gap-4 items-start">
                    <div className="w-12 h-12 min-w-[48px] bg-[var(--color-gold)]/10 text-[var(--color-gold)] rounded-xl flex items-center justify-center text-lg group-hover:bg-[var(--color-gold)] group-hover:text-white group-hover:scale-110 transition-all duration-250">
                      <i className={f.icon} />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-dark)] mb-1">{f.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
