"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  MessageCircle,
  UtensilsCrossed,
  Bike,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { BUSINESS_INFO } from "@/lib/constants";

interface FormState {
  name: string;
  guests: string;
  date: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    guests: "2",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  return (
    <section
      id="visit"
      className="relative py-28 md:py-36 bg-surface-container overflow-hidden"
      aria-label="Visit and reservation"
    >
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto relative z-10">
        <div className="bg-white p-8 md:p-16 lg:p-20 shadow-2xl flex flex-col lg:flex-row gap-16">
          {/* Form */}
          <div className="w-full lg:w-1/2 space-y-10">
            <FadeIn>
              <div>
                <h2 className="font-bodoni text-4xl md:text-5xl mb-3">
                  Visit Our Sanctuary.
                </h2>
                <p className="font-work text-on-surface-variant text-sm leading-relaxed">
                  Reserve your table or reach out for inquiries. We look forward
                  to hosting you.
                </p>
              </div>
            </FadeIn>

            {status === "success" ? (
              <FadeIn>
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto">
                    <svg
                      className="w-8 h-8 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bodoni text-2xl">
                    Reservation Request Sent
                  </h3>
                  <p className="font-work text-on-surface-variant text-sm">
                    We&apos;ll confirm your table within 2 hours. See you soon.
                  </p>
                </div>
              </FadeIn>
            ) : (
              <FadeIn delay={0.1}>
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="font-work text-[10px] font-semibold text-on-surface-variant uppercase tracking-[0.12em]"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        required
                        className="w-full bg-surface-container border-0 border-b border-outline/30 focus:border-primary focus:ring-0 outline-none transition-colors py-3 font-work text-sm placeholder:text-outline"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="guests"
                        className="font-work text-[10px] font-semibold text-on-surface-variant uppercase tracking-[0.12em]"
                      >
                        Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className="w-full bg-surface-container border-0 border-b border-outline/30 focus:border-primary focus:ring-0 outline-none transition-colors py-3 font-work text-sm"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="4">4 People</option>
                        <option value="6+">6+ People</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="date"
                      className="font-work text-[10px] font-semibold text-on-surface-variant uppercase tracking-[0.12em]"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-surface-container border-0 border-b border-outline/30 focus:border-primary focus:ring-0 outline-none transition-colors py-3 font-work text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="font-work text-[10px] font-semibold text-on-surface-variant uppercase tracking-[0.12em]"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Special requests, dietary needs..."
                      className="w-full bg-surface-container border-0 border-b border-outline/30 focus:border-primary focus:ring-0 outline-none transition-colors py-3 font-work text-sm placeholder:text-outline resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-primary text-on-primary py-5 font-work text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-on-surface-variant transition-colors active:scale-[0.98] disabled:opacity-60"
                  >
                    {status === "submitting"
                      ? "Confirming..."
                      : "Confirm Availability"}
                  </button>
                </form>
              </FadeIn>
            )}

            {/* Quick Links */}
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-5 pt-8 border-t border-outline-variant/30">
                <a
                  href="https://wa.me/07071081080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group"
                  aria-label="Contact via WhatsApp"
                >
                  <span className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                    <MessageCircle size={16} className="text-green-600" />
                  </span>
                  <span className="font-work text-[11px] font-semibold tracking-widest uppercase group-hover:text-primary transition-colors">
                    WhatsApp
                  </span>
                </a>
                <a
                  href="https://www.zomato.com/pune/one-o-eight-cafe-koregaon-park"
                  className="flex items-center gap-2 group"
                  aria-label="Order on Zomato"
                >
                  <span className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                    <UtensilsCrossed size={16} className="text-red-500" />
                  </span>
                  <span className="font-work text-[11px] font-semibold tracking-widest uppercase group-hover:text-primary transition-colors">
                    Zomato
                  </span>
                </a>
                <a
                  href="https://www.swiggy.com/restaurants/one-o-eight-cafe-koregaon-park-kalyani-nagar-29143/dineout"
                  className="flex items-center gap-2 group"
                  aria-label="Order on Swiggy"
                >
                  <span className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                    <Bike size={16} className="text-orange-500" />
                  </span>
                  <span className="font-work text-[11px] font-semibold tracking-widest uppercase group-hover:text-primary transition-colors">
                    Swiggy
                  </span>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Map & Info */}
          <div className="w-full lg:w-1/2 space-y-10">
            <FadeIn delay={0.15} direction="left">
              <div className="relative aspect-square w-full overflow-hidden rounded-[32px] border border-outline-variant/20 group bg-surface-container-highest">
                {/* Google Map */}
                <iframe
                  title="One O Eight Cafe Location"
                  src="https://www.google.com/maps?q=Pingale+Farms,+Koregaon+Park,+Pune&z=15&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full grayscale-[0.2] contrast-[1.05] transition-transform duration-[5s] group-hover:scale-[1.03]"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                {/* Floating card */}
                <div className="absolute left-6 bottom-6 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 max-w-[280px]">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    </div>

                    <div>
                      <h3 className="font-bodoni text-xl text-white mb-1">
                        One O Eight Cafe
                      </h3>

                      <p className="font-work text-xs leading-relaxed text-white/80">
                        Pingale Farms, Koregaon Park,
                        <br />
                        Pune, Maharashtra 411001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-10">
                <address className="space-y-3 not-italic">
                  <h3 className="font-work text-[10px] font-semibold text-secondary uppercase tracking-[0.15em] border-b border-outline-variant/30 pb-2 flex items-center gap-2">
                    <MapPin size={12} />
                    Location
                  </h3>
                  <p className="font-work text-sm leading-relaxed text-on-surface">
                    Pingale Farms, S Main Rd,
                    <br />
                  Koregaon Park, Pune, Maharashtra
                    411001
                  </p>
                </address>
                <div className="space-y-3">
                  <h3 className="font-work text-[10px] font-semibold text-secondary uppercase tracking-[0.15em] border-b border-outline-variant/30 pb-2 flex items-center gap-2">
                    <Clock size={12} />
                    Hours
                  </h3>
                  <p className="font-work text-sm leading-relaxed text-on-surface">
                    {BUSINESS_INFO.hours}
                    <br />
                    <span className="text-on-surface-variant text-xs">
                      {BUSINESS_INFO.kitchenCloses}
                    </span>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
