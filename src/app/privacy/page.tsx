import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Политика за поверителност",
  description: "Как Гео Строй обработва и защитава вашите лични данни.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-dvh bg-white py-32 px-6">
      <div className="max-w-[760px] mx-auto">
        <Link href="/" className="text-[var(--color-gold)] text-sm font-semibold mb-8 inline-flex items-center gap-2 hover:gap-3 transition-all">
          <i className="fas fa-arrow-left" />
          Към началната страница
        </Link>
        <h1 className="font-[family-name:var(--font-heading)] font-extrabold text-3xl md:text-4xl text-[var(--color-dark)] mb-6">
          Политика за поверителност
        </h1>
        <div className="prose text-gray-700 space-y-4 leading-relaxed">
          <p>
            Гео Строй ЕООД („ние“) уважава вашата поверителност. Тази политика обяснява какви данни събираме чрез този сайт и как ги използваме.
          </p>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl text-[var(--color-dark)] mt-8 mb-2">Какви данни събираме</h2>
          <p>
            Когато попълните формата за контакт, събираме името, телефона, имейл адреса (по желание), избраната услуга и съобщението ви. Тези данни се използват единствено за да ви върнем оферта.
          </p>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl text-[var(--color-dark)] mt-8 mb-2">Как ги съхраняваме</h2>
          <p>
            Данните се пазят до 12 месеца след последния ви контакт с нас и след това се изтриват. Не ги предоставяме на трети страни. Не ги използваме за маркетингови списъци.
          </p>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl text-[var(--color-dark)] mt-8 mb-2">Вашите права</h2>
          <p>
            Имате право да поискате достъп, корекция или изтриване на вашите данни. Свържете се с нас на info@geostroy.bg.
          </p>
        </div>
      </div>
    </main>
  );
}
