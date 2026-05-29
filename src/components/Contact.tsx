"use client";

import { useState, type FormEvent } from "react";
import RevealOnScroll from "./RevealOnScroll";

const contactCards = [
  { icon: "fas fa-phone-alt", title: "Телефон", content: "+359 88 8996917", href: "tel:+359888996917" },
  { icon: "fas fa-envelope", title: "Имейл", content: "info@badjostroy.bg", href: "mailto:info@badjostroy.bg" },
  { icon: "fas fa-clock", title: "Работно време", content: "Пон - Съб: 08:00 - 19:00" },
  { icon: "fas fa-map-marker-alt", title: "Обслужваме", content: "Цяла България" },
];

const PHONE_REGEX = /^(\+359|359|0)[\s\-]?[0-9]{8,9}$/;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, boolean> = {};

    if (!data.get("name")?.toString().trim()) newErrors.name = true;

    const phone = (data.get("phone")?.toString() || "").replace(/[\s\-]/g, "");
    if (!phone || !PHONE_REGEX.test(phone)) newErrors.phone = true;

    const email = data.get("email")?.toString() || "";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = true;

    if (!data.get("gdpr")) newErrors.gdpr = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 1200);
  };

  const clearError = (field: string) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  return (
    <section id="contact" className="py-20 md:py-24 lg:py-32 bg-white" aria-label="Контакти">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll direction="up" className="text-center max-w-[640px] mx-auto mb-16">
          <span className="inline-block font-[family-name:var(--font-heading)] font-bold text-[0.8rem] tracking-[3px] uppercase text-[var(--color-gold)] mb-3">
            Контакти
          </span>
          <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-[clamp(1.75rem,4vw,2.75rem)] text-[var(--color-dark)] leading-tight mb-4">
            Свържете се <span className="text-[var(--color-gold)]">с нас</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Безплатна оферта до 48 часа. Без ангажимент.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16">
          <RevealOnScroll direction="left">
            <div className="flex flex-col gap-5">
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="group flex gap-4 items-center p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-[var(--color-gold)] hover:translate-x-2 hover:shadow-lg transition-all duration-250"
                >
                  <div className="w-12 h-12 min-w-[48px] bg-[var(--color-gold)]/10 text-[var(--color-gold)] rounded-xl flex items-center justify-center text-lg">
                    <i className={card.icon} />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[0.95rem] text-[var(--color-dark)] mb-0.5">
                      {card.title}
                    </h3>
                    {card.href ? (
                      <a href={card.href} className="text-[var(--color-gold)] font-semibold hover:text-[var(--color-gold-dark)] transition-colors duration-250">
                        {card.content}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-500">{card.content}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="p-5 bg-[var(--color-gold)]/5 rounded-xl border border-[var(--color-gold)]/30">
                <div className="flex items-center gap-3 mb-2">
                  <i className="fas fa-leaf text-[var(--color-gold)]" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--color-dark)]">
                    Сертифицирани материали
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Работим само с Bramac, Tondach, Kebe, Bryza — получавате оригинална гаранция от производителя плюс нашата.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <div className="relative">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl border border-gray-200" noValidate>
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="font-[family-name:var(--font-heading)] font-semibold text-sm text-[var(--color-dark)] mb-2">
                        Име *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Вашето име"
                        className={`px-4 py-3 border-2 rounded-md bg-white text-gray-800 min-h-[48px] transition-all duration-250 focus:outline-none focus:border-[var(--color-gold)] focus:shadow-[0_0_0_4px_rgba(232,98,26,0.15)] ${errors.name ? "border-red-500" : "border-gray-200"}`}
                        onInput={() => clearError("name")}
                      />
                      {errors.name && <span className="text-xs text-red-500 mt-1">Моля, въведете вашето име</span>}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="font-[family-name:var(--font-heading)] font-semibold text-sm text-[var(--color-dark)] mb-2">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="0888 996 917"
                        className={`px-4 py-3 border-2 rounded-md bg-white text-gray-800 min-h-[48px] transition-all duration-250 focus:outline-none focus:border-[var(--color-gold)] focus:shadow-[0_0_0_4px_rgba(232,98,26,0.15)] ${errors.phone ? "border-red-500" : "border-gray-200"}`}
                        onInput={() => clearError("phone")}
                      />
                      {errors.phone && <span className="text-xs text-red-500 mt-1">Моля, въведете валиден телефонен номер</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col">
                      <label htmlFor="email" className="font-[family-name:var(--font-heading)] font-semibold text-sm text-[var(--color-dark)] mb-2">
                        Имейл
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email@example.com"
                        className={`px-4 py-3 border-2 rounded-md bg-white text-gray-800 min-h-[48px] transition-all duration-250 focus:outline-none focus:border-[var(--color-gold)] focus:shadow-[0_0_0_4px_rgba(232,98,26,0.15)] ${errors.email ? "border-red-500" : "border-gray-200"}`}
                        onInput={() => clearError("email")}
                      />
                      {errors.email && <span className="text-xs text-red-500 mt-1">Моля, въведете валиден имейл</span>}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="service" className="font-[family-name:var(--font-heading)] font-semibold text-sm text-[var(--color-dark)] mb-2">
                        Тип услуга
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="px-4 py-3 border-2 border-gray-200 rounded-md bg-white text-gray-800 min-h-[48px] transition-all duration-250 focus:outline-none focus:border-[var(--color-gold)] focus:shadow-[0_0_0_4px_rgba(232,98,26,0.15)]"
                      >
                        <option value="">Изберете услуга</option>
                        <option value="new-roof">Нов покрив „под ключ“</option>
                        <option value="roof-repair">Ремонт на покрив</option>
                        <option value="leak">Течащ покрив (спешно)</option>
                        <option value="flat-roof">Хидроизолация (плосък покрив)</option>
                        <option value="gutters">Улуци и обшивки</option>
                        <option value="inspection">Само оглед / консултация</option>
                        <option value="other">Друго</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col mb-5">
                    <label htmlFor="message" className="font-[family-name:var(--font-heading)] font-semibold text-sm text-[var(--color-dark)] mb-2">
                      Съобщение (по желание)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Опишете накратко обекта — площ, населено място, какъв е проблемът..."
                      className="px-4 py-3 border-2 border-gray-200 rounded-md bg-white text-gray-800 min-h-[110px] resize-y transition-all duration-250 focus:outline-none focus:border-[var(--color-gold)] focus:shadow-[0_0_0_4px_rgba(232,98,26,0.15)]"
                    />
                  </div>

                  <label className="flex items-start gap-3 mb-6 cursor-pointer">
                    <input
                      type="checkbox"
                      name="gdpr"
                      className="mt-1 w-4 h-4 accent-[var(--color-gold)]"
                      onChange={() => clearError("gdpr")}
                    />
                    <span className="text-xs text-gray-600 leading-relaxed">
                      Съгласен съм с обработката на лични данни съгласно{" "}
                      <a href="/privacy" className="text-[var(--color-gold)] underline">Политика за поверителност</a> и{" "}
                      <a href="/terms" className="text-[var(--color-gold)] underline">Общи условия</a>.
                      {errors.gdpr && <span className="block text-red-500 mt-1">Моля, потвърдете съгласието</span>}
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 font-[family-name:var(--font-heading)] font-semibold bg-[var(--color-gold)] text-white px-8 py-4 rounded-full shadow-[0_10px_40px_rgba(232,98,26,0.3)] hover:bg-[var(--color-gold-dark)] hover:-translate-y-0.5 transition-all duration-250 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin" />
                        <span>Изпращане...</span>
                      </>
                    ) : (
                      <>
                        <span>Искам безплатна оферта</span>
                        <i className="fas fa-arrow-right" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-4">
                    Без ангажимент &middot; Отговор до 1 час в работно време
                  </p>
                </form>
              ) : (
                <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-200 flex flex-col items-center justify-center text-center min-h-[400px]" style={{ animation: "fadeScale 0.5s ease forwards" }}>
                  <i className="fas fa-check-circle text-5xl text-emerald-500 mb-4" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-2xl text-[var(--color-dark)] mb-2">Благодарим ви!</h3>
                  <p className="text-gray-600 mb-4">Вашето запитване е получено. Ще се свържем с вас до 1 час в работно време.</p>
                  <p className="text-sm text-gray-500">
                    Спешно? Обадете се на{" "}
                    <a href="tel:+359888996917" className="text-[var(--color-gold)] font-semibold">+359 88 8996917</a>
                  </p>
                </div>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
