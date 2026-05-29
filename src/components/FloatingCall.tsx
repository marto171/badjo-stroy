export default function FloatingCall() {
  return (
    <a
      href="tel:+359888996917"
      className="hidden md:flex fixed bottom-6 right-6 z-[999] w-14 h-14 bg-[var(--color-gold)] text-white rounded-full items-center justify-center text-xl shadow-[0_10px_40px_rgba(232,98,26,0.4)] hover:scale-110 hover:bg-[var(--color-gold-dark)] transition-transform duration-250"
      aria-label="Обадете се сега"
    >
      <i className="fas fa-phone-alt" />
      <span className="pulse-ring" />
    </a>
  );
}
