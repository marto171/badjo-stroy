import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Общи условия",
  description: "Общи условия за ползване на сайта на Гео Строй.",
};

export default function TermsPage() {
  return (
    <main className="min-h-dvh bg-white py-32 px-6">
      <div className="max-w-[760px] mx-auto">
        <Link href="/" className="text-[var(--color-gold)] text-sm font-semibold mb-8 inline-flex items-center gap-2 hover:gap-3 transition-all">
          <i className="fas fa-arrow-left" />
          Към началната страница
        </Link>
        <h1 className="font-[family-name:var(--font-heading)] font-extrabold text-3xl md:text-4xl text-[var(--color-dark)] mb-6">
          Общи условия
        </h1>
        <div className="prose text-gray-700 space-y-4 leading-relaxed">
          <p>
            С използването на този сайт се съгласявате със следните условия.
          </p>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl text-[var(--color-dark)] mt-8 mb-2">Информация на сайта</h2>
          <p>
            Информацията на сайта е с информационна цел. Снимките показват реални обекти, изпълнени от нашия екип. Конкретните цени и срокове се определят след оглед и подписване на договор.
          </p>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl text-[var(--color-dark)] mt-8 mb-2">Договор и гаранция</h2>
          <p>
            Всеки наш проект се извършва срещу подписан договор по ЗЗД с фиксирана цена и срок. Писмената гаранция е приложение към договора и протокола за предаване.
          </p>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl text-[var(--color-dark)] mt-8 mb-2">Контакти</h2>
          <p>
            За въпроси: info@geostroy.bg или +359 888 123 456.
          </p>
        </div>
      </div>
    </main>
  );
}
