import type { ReactNode } from "react";
import "./globals.css";
import { siteMetadata } from "@/lib/seo";
import { getLocalBusinessSchema, getOrganizationSchema } from "@/lib/schema";

export const metadata = siteMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  const localBusinessSchema = getLocalBusinessSchema();
  const organizationSchema = getOrganizationSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..700&family=Work+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="bg-background text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
