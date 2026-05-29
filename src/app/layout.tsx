import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { faqs } from "@/lib/faqs";
import { testimonials } from "@/lib/testimonials";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://badjostroy.bg";
const BUSINESS_NAME = "Баджо Строй";

export const viewport: Viewport = {
  themeColor: "#E8621A",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Баджо Строй | Ремонт и изграждане на покриви с до 15 г. гаранция",
    template: "%s | Баджо Строй",
  },
  description:
    "Баджо Строй — ремонт и изграждане на покриви в София и цяла България. Керемиди Bramac, Tondach, Kebe, хидроизолация, дървени конструкции, улуци. Договор, фиксирана цена, до 15 години писмена гаранция. Безплатен оглед до 48 часа.",
  applicationName: BUSINESS_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Строителство",
  keywords: [
    "Баджо Строй",
    "Баджо Строй ЕООД",
    "Badjo Stroy",
    "Баджо",
    "покриви",
    "ремонт на покрив",
    "изграждане на покрив",
    "майстори покриви",
    "ново строителство покрив",
    "керемиди",
    "Bramac",
    "Tondach",
    "Kebe",
    "хидроизолация",
    "хидроизолация плосък покрив",
    "тенекеджийски услуги",
    "дървена покривна конструкция",
    "улуци и водостоци",
    "покривни услуги България",
    "покриви София",
    "ремонт покрив Пловдив",
    "ремонт покрив Варна",
    "ремонт покрив Бургас",
    "течащ покрив",
    "оглед на покрив",
    "гаранция покрив",
  ],
  authors: [{ name: "Баджо Строй ЕООД", url: SITE_URL }],
  creator: "Баджо Строй ЕООД",
  publisher: "Баджо Строй ЕООД",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Баджо Строй — Ремонт и изграждане на покриви в цяла България",
    description:
      "18+ години опит, 850+ завършени покрива. Договор, фиксирана цена, до 15 г. писмена гаранция. Безплатен оглед в рамките на 48 часа.",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    locale: "bg_BG",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/07-new-tile-roof.jpg`,
        width: 1200,
        height: 630,
        alt: "Завършен керемиден покрив — Баджо Строй",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Баджо Строй — Ремонт и изграждане на покриви",
    description:
      "18+ години опит. Договор, фиксирана цена, до 15 г. гаранция. Безплатен оглед до 48 часа в цяла България.",
    images: [`${SITE_URL}/07-new-tile-roof.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: {
      "bg-BG": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const services = [
    {
      name: "Цялостно изграждане на покрив „под ключ“",
      description:
        "Нов покрив от нулата — дървена конструкция, OSB, хидроизолационна мембрана, керемиди Bramac/Tondach/Kebe, улуци. Договор и до 15 г. писмена гаранция.",
    },
    {
      name: "Ремонт на покрив",
      description:
        "Локален или цялостен ремонт на стар покрив — смяна на летви, повредени керемиди, обшивки и хидроизолация. Без скрити такси.",
    },
    {
      name: "Хидроизолация на плосък покрив",
      description:
        "Двупластова битумна хидроизолация с минерален посип за тераси и плоски покриви. Решава трайно проблеми с течове.",
    },
    {
      name: "Дървена покривна конструкция",
      description:
        "Изграждане и подмяна на дървени конструкции и ферми. Импрегниран материал, точна геометрия, дълга експлоатация.",
    },
    {
      name: "Улуци и водосточни системи",
      description:
        "Монтаж на улуци Bryza и водосточни системи. Защита на фасадата и основите от вода.",
    },
    {
      name: "Тенекеджийски услуги и обшивки",
      description:
        "Поцинковани обшивки на комини, бордове и капандури. Прецизен монтаж за дълготрайна защита от течове.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "RoofingContractor", "GeneralContractor"],
        "@id": `${SITE_URL}#business`,
        name: "Баджо Строй ЕООД",
        alternateName: ["Баджо Строй", "Badjo Stroy", "Badjostroy"],
        description:
          "Баджо Строй ЕООД — ремонт и изграждане на покриви в цяла България. Керемиди, дървени конструкции, хидроизолация, улуци. Договор, фиксирана цена, до 15 години писмена гаранция.",
        slogan: "Покриви без компромис — договор, фиксирана цена, до 15 г. гаранция",
        url: SITE_URL,
        telephone: "+359888996917",
        email: "info@badjostroy.bg",
        priceRange: "$$",
        image: [
          `${SITE_URL}/07-new-tile-roof.jpg`,
          `${SITE_URL}/01-master-roof-view.jpg`,
          `${SITE_URL}/05-finished-roof-vista.jpg`,
        ],
        logo: `${SITE_URL}/logo.svg`,
        foundingDate: "2007",
        address: {
          "@type": "PostalAddress",
          addressCountry: "BG",
          addressRegion: "София-град",
          addressLocality: "София",
        },
        areaServed: [
          { "@type": "Country", name: "България" },
          { "@type": "City", name: "София" },
          { "@type": "City", name: "Пловдив" },
          { "@type": "City", name: "Варна" },
          { "@type": "City", name: "Бургас" },
          { "@type": "City", name: "Стара Загора" },
          { "@type": "City", name: "Русе" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "19:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Покривни услуги",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
              areaServed: { "@type": "Country", name: "България" },
              provider: { "@id": `${SITE_URL}#business` },
            },
          })),
        },
        knowsAbout: [
          "ремонт на покрив",
          "изграждане на покрив",
          "керемиди",
          "хидроизолация",
          "дървени конструкции",
          "улуци",
          "тенекеджийски услуги",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: (
            testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
          ).toFixed(1),
          reviewCount: testimonials.length,
          bestRating: 5,
          worstRating: 1,
        },
        review: testimonials.map((t) => ({
          "@type": "Review",
          author: { "@type": "Person", name: t.name },
          datePublished: t.date,
          reviewBody: t.quote,
          reviewRating: {
            "@type": "Rating",
            ratingValue: t.rating,
            bestRating: 5,
            worstRating: 1,
          },
          itemReviewed: { "@id": `${SITE_URL}#business` },
          locationCreated: { "@type": "Place", name: t.location },
        })),
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#org`,
        name: "Баджо Строй ЕООД",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.svg`,
          width: 64,
          height: 64,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+359888996917",
          contactType: "customer service",
          areaServed: "BG",
          availableLanguage: ["Bulgarian"],
          email: "info@badjostroy.bg",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: BUSINESS_NAME,
        inLanguage: "bg-BG",
        publisher: { "@id": `${SITE_URL}#org` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <html
      lang="bg"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
