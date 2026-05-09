import { BUSINESS_INFO } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: BUSINESS_INFO.name,
    description:
      "A curated sanctuary cafe offering artisan coffee, nourishing cuisine, and a premium workspace environment in Koregaon Park, Pune.",
    url: "https://oneoheight.com",
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "108 Serenity Lane",
      addressLocality: "London",
      addressRegion: "South Kensington",
      postalCode: "SW7 2AS",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.4977,
      longitude: -0.1745,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "21:00",
      },
    ],
    servesCuisine: ["Italian", "British", "International"],
    priceRange: "££",
    hasMap: "https://maps.google.com/?q=South+Kensington+London",
    image: "https://oneoheight.com/og-image.jpg",
    sameAs: ["https://instagram.com/oneoheight"],
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS_INFO.name,
    url: "https://oneoheight.com",
    logo: "https://oneoheight.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS_INFO.phone,
      contactType: "reservations",
      availableLanguage: "English",
    },
  };
}
