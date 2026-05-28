import Logo from "./Logo";

const navLinks = [
  { href: "#hero", label: "Начало" },
  { href: "#about", label: "За Нас" },
  { href: "#services", label: "Услуги" },
  { href: "#gallery", label: "Галерия" },
  { href: "#faq", label: "Въпроси" },
  { href: "#contact", label: "Контакти" },
];

const serviceLinks = [
  "Цялостно изграждане на покрив",
  "Ремонт на стар покрив",
  "Хидроизолация",
  "Дървени конструкции",
  "Улуци и водостоци",
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] pt-20" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/10">
          <div>
            <a href="#hero" className="flex items-center gap-3 mb-4">
              <Logo size={44} className="rounded-md" />
              <div className="flex flex-col leading-tight">
                <span className="font-[family-name:var(--font-heading)] font-extrabold text-white text-base tracking-[2px]">ГЕО</span>
                <span className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-gold)] text-[0.7rem] tracking-[4px]">СТРОЙ</span>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-[300px]">
              Ремонт и изграждане на покриви в цяла България от 2007 г. Договор, фиксирана цена, до 15 години писмена гаранция.
            </p>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-white mb-4">Навигация</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/50 text-sm hover:text-[var(--color-gold)] hover:translate-x-1 inline-flex transition-all duration-250">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-white mb-4">Услуги</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#services" className="text-white/50 text-sm hover:text-[var(--color-gold)] hover:translate-x-1 inline-flex transition-all duration-250">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-white mb-4">Контакти</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <i className="fas fa-phone-alt text-[var(--color-gold)] w-[18px] text-center" />
                <a href="tel:+359888123456" className="hover:text-[var(--color-gold)] transition-colors duration-250">+359 888 123 456</a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <i className="fas fa-envelope text-[var(--color-gold)] w-[18px] text-center" />
                <a href="mailto:info@geostroy.bg" className="hover:text-[var(--color-gold)] transition-colors duration-250">info@geostroy.bg</a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <i className="fas fa-clock text-[var(--color-gold)] w-[18px] text-center" />
                <span>Пон - Съб: 08:00 - 19:00</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <i className="fas fa-map-marker-alt text-[var(--color-gold)] w-[18px] text-center" />
                <span>Цяла България</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-5 text-center">
          <p className="text-white/30 text-[0.85rem]">
            &copy; {new Date().getFullYear()} Гео Строй ЕООД. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}
