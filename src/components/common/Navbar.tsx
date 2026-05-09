"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-surface/95 backdrop-blur-md border-b border-outline-variant/20 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav
          className="flex justify-between items-center w-full px-6 md:px-16 py-5 max-w-[1280px] mx-auto"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-bodoni text-2xl tracking-tighter text-primary hover:opacity-80 transition-opacity"
            aria-label="One O Eight — Home"
          >
            <span className={isScrolled ? "text-primary" : "text-white"}>
              One O Eight
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-work text-[12px] font-semibold tracking-[0.1em] uppercase transition-all duration-200 pb-1 ${
                    isActive
                      ? isScrolled
                        ? "border-b-2 border-primary text-on-surface"
                        : "border-b-2 border-white text-white"
                      : isScrolled
                        ? "text-on-surface-variant hover:text-primary"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="#visit"
              className={`hidden sm:block px-7 py-3 font-work text-[12px] font-semibold tracking-[0.1em] uppercase transition-all duration-200 active:scale-95 ${
                isScrolled
                  ? "bg-primary text-on-primary hover:bg-on-surface-variant"
                  : "bg-white text-primary hover:bg-surface-container"
              }`}
            >
              Reserve
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-surface flex flex-col pt-24 px-8"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex flex-col gap-8 mt-8">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="font-bodoni text-3xl text-on-surface hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto pb-16">
              <Link
                href="#visit"
                onClick={() => setIsMobileOpen(false)}
                className="block w-full bg-primary text-on-primary text-center py-5 font-work text-xs font-semibold tracking-widest uppercase hover:bg-on-surface-variant transition-colors"
              >
                Reserve a Table
              </Link>
              <p className="text-on-surface-variant text-sm mt-8 font-work">
                Pingale Farms, S Main Rd, behind Blossom Boulevard, Ashok Chakra
                Society, Iricen Railway Colony, Koregaon Park, Pune, Maharashtra
                411001
                <br />
                Daily 8:00 AM – 9:30 PM
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
