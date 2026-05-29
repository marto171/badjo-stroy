import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Баджо Строй — Ремонт и изграждане на покриви",
    short_name: "Баджо Строй",
    description:
      "Ремонт и изграждане на покриви в цяла България. Договор, фиксирана цена, до 15 г. писмена гаранция.",
    start_url: "/",
    display: "standalone",
    background_color: "#0C1220",
    theme_color: "#E8621A",
    lang: "bg-BG",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
