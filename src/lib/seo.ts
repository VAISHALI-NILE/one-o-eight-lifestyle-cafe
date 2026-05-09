import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://oneoheight.com";

export const siteMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "One O Eight | Lifestyle Cafe & Sanctuary — London",
    template: "%s | One O Eight",
  },
  description:
    "One O Eight is a curated sanctuary cafe in Koregaon Park, Pune. Experience slow mornings, nourishing cuisine, artisan coffee, and architectural beauty. Reserve your table today.",
  keywords: [
    "one o eight cafe",
    "lifestyle cafe london",
    "sanctuary cafe south kensington",
    "artisan coffee london",
    "brunch london",
    "quiet cafe london",
    "remote work cafe london",
    "luxury cafe london",
    "sourdough pizza london",
    "organic food cafe",
  ],
  authors: [{ name: "One O Eight" }],
  creator: "One O Eight",
  publisher: "One O Eight",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "One O Eight",
    title: "One O Eight | Lifestyle Cafe & Sanctuary — London",
    description:
      "A curated environment for intentionality, nourishment, and architectural beauty in Koregaon Park, Pune.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "One O Eight Lifestyle Cafe interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One O Eight | Lifestyle Cafe & Sanctuary",
    description:
      "A curated sanctuary for calm mornings and meaningful conversations. Koregaon Park, Pune.",
    images: ["/og-image.jpg"],
    creator: "@oneoheight",
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
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
