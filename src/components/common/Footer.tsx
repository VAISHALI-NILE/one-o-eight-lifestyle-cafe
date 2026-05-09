import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

const FOOTER_LINKS = {
  Sitemap: [
    { label: "Philosophy", href: "#experience" },
    { label: "The Menu", href: "#menu" },
    { label: "Gallery", href: "#atmosphere" },
    { label: "Wellness", href: "#wellness" },
  ],
  Contact: [
    { label: "Journal", href: "#" },
    { label: "Inquiries", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer
      className="bg-surface-container border-t border-outline-variant/30"
      role="contentinfo"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 pt-20 pb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6 max-w-xs">
            <Link
              href="/"
              className="font-bodoni text-3xl text-primary tracking-tighter hover:opacity-80 transition-opacity"
              aria-label="One O Eight home"
            >
              One O Eight
            </Link>
            <p className="font-work text-on-surface-variant text-sm leading-relaxed">
              A curated environment for intentionality, nourishment, and
              architectural beauty in Koregaon Park, Pune.
            </p>
            <div className="flex items-center gap-4">
              <address className="not-italic">
                <p className="font-work text-sm text-on-surface-variant">
                  {BUSINESS_INFO.address}
                </p>
                <p className="font-work text-sm text-on-surface-variant mt-1">
                  {BUSINESS_INFO.hours}
                </p>
              </address>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-outline-variant/30 text-primary hover:bg-secondary-container transition-colors"
                aria-label="One O Eight on Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="p-2.5 border border-outline-variant/30 text-primary hover:bg-secondary-container transition-colors"
                aria-label="Email One O Eight"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full lg:w-auto">
            {Object.entries(FOOTER_LINKS).map(([section, links]) => (
              <div key={section} className="space-y-5">
                <h3 className="font-work text-[11px] font-semibold text-primary uppercase tracking-[0.2em]">
                  {section}
                </h3>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-work text-sm text-on-surface-variant hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-outline-variant/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-work text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">
            © {new Date().getFullYear()} One O Eight Lifestyle Cafe. All Rights
            Reserved.
          </p>
          <p className="font-work text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">
            Crafted with intention in India
          </p>
        </div>
      </div>
    </footer>
  );
}
