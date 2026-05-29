type LogoProps = {
  size?: number;
  className?: string;
  title?: string;
};

export default function Logo({ size = 44, className = "", title }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <defs>
        <linearGradient id="gs-logo-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F08947" />
          <stop offset="100%" stopColor="#C74E0E" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#gs-logo-grad)" />
      <path
        d="M12 26 L32 11 L52 26"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M20 31 H44 V36 H27 V40 H44 V52 H20 Z" fill="white" />
    </svg>
  );
}
