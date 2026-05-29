"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#hero", label: "Начало" },
  { href: "#about", label: "За Нас" },
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Процес" },
  { href: "#gallery", label: "Галерия" },
  { href: "#faq", label: "Въпроси" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 120;
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(el.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] h-[72px] transition-all duration-500 ${
        scrolled ? "bg-[var(--color-dark)]/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.2)]" : ""
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        <a href="#hero" className="flex items-center gap-3 z-[1001]" aria-label="Начало">
          <Logo
            size={44}
            title="Баджо Строй"
            className="rounded-md shadow-[0_4px_12px_rgba(232,98,26,0.3)] hover:rotate-[-6deg] hover:scale-105 transition-transform duration-250"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-[family-name:var(--font-heading)] font-extrabold text-white text-base tracking-[2px]">
              БАДЖО
            </span>
            <span className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-gold)] text-[0.7rem] tracking-[4px]">
              СТРОЙ
            </span>
          </div>
        </a>

        <button
          className="flex items-center justify-center w-11 h-11 z-[1001] md:hidden"
          onClick={toggleMenu}
          aria-label="Отвори менюто"
          aria-expanded={menuOpen}
        >
          <span className={`w-6 h-[18px] relative flex flex-col justify-between ${menuOpen ? "hamburger-active" : ""}`}>
            <span className="block w-full h-0.5 bg-white rounded transition-all duration-250 origin-center" />
            <span className="block w-full h-0.5 bg-white rounded transition-all duration-250 origin-center" />
            <span className="block w-full h-0.5 bg-white rounded transition-all duration-250 origin-center" />
          </span>
        </button>

        <ul
          className={`fixed top-0 ${menuOpen ? "right-0" : "right-[-100%]"} w-full h-dvh bg-[var(--color-dark)] flex flex-col items-center justify-center gap-8 transition-[right] duration-500 md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:gap-2 md:right-0`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className={`font-[family-name:var(--font-heading)] font-semibold text-xl md:text-[0.9rem] px-4 py-2 relative transition-colors duration-250 ${
                  activeSection === link.href.slice(1)
                    ? "text-[var(--color-gold)]"
                    : "text-white/80 hover:text-[var(--color-gold)]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="font-[family-name:var(--font-heading)] font-semibold text-[0.95rem] md:text-[0.85rem] bg-[var(--color-gold)] text-white px-6 py-3 rounded-full hover:bg-[var(--color-gold-dark)] transition-colors duration-250"
            >
              Безплатна оферта
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
