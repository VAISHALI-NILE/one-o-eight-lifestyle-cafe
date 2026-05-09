"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.12 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-9NbVW5xNp3JhanWFqk0KXxUIyBS7NaFVr_m-tRUxp092BzggrjAqOM5OwicTt-Jn2rUQ2qNLcTj9zD1VGpWoPz3_Ocou5hugKbqAkGspJfAtaYHa7AA9nvCbY4AS-qtbupmQZDojGMGFLJ8SG4jmbXADHRYkaRrzebppflaQwJhuQOvZZaFt6G5hLFSnVWukxygPJuACdcvhbDGKXwo4NGrDS72S4B6IV_1dCIsRBZH_KpGcWW6YPRQD0LBL7bQpBgEiMjWDJ3j5"
            alt="One O Eight Lifestyle Cafe — sun-drenched interior with botanical details"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 cinematic-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <motion.p
          className="font-work text-[11px] font-semibold tracking-[0.3em] uppercase text-white/60 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Koregaon Park, Pune
        </motion.p>

        <motion.h1
          className="font-bodoni text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-10 max-w-4xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Calm Mornings.
          <br />
          <em className="italic">Meaningful Conversations.</em>
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <Link
            href="#visit"
            className="inline-block bg-white text-primary px-10 py-4 font-work text-[12px] font-semibold tracking-[0.1em] uppercase hover:bg-surface-container transition-colors active:scale-95"
          >
            Reserve a Table
          </Link>
          <Link
            href="#menu"
            className="inline-block border border-white/40 text-white px-10 py-4 font-work text-[12px] font-semibold tracking-[0.1em] uppercase hover:bg-white/10 transition-colors active:scale-95"
          >
            View Menu
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() =>
          document
            .getElementById("experience")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        aria-hidden="true"
      >
        <ChevronDown size={28} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
