import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function About() {
  return (
    <section
      id="experience"
      className="py-28 md:py-36 px-6 md:px-16 max-w-[1280px] mx-auto overflow-hidden"
      aria-label="About One O Eight"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Text Column */}
        <div className="md:col-span-5 order-2 md:order-1">
          <FadeIn delay={0.1}>
            <span className="font-work text-[11px] font-semibold text-secondary mb-6 block uppercase tracking-[0.2em]">
              Our Philosophy
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="font-bodoni text-4xl md:text-5xl mb-8 text-on-surface leading-tight">
              A sanctuary for the senses.
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="font-work text-lg text-on-surface-variant mb-10 max-w-md leading-relaxed">
              One O Eight is more than a cafe; it is a curated environment
              designed for intentionality. We believe in the power of slow
              mornings, nourishing ingredients, and architectural beauty to
              elevate the daily ritual of living.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <a
              href="#"
              className="flex items-center gap-3 text-primary group w-fit"
              aria-label="Explore our story"
            >
              <span className="font-work text-[12px] font-semibold tracking-[0.1em] uppercase border-b border-primary pb-1 group-hover:mr-2 transition-all duration-300">
                Explore Our Story
              </span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>

        {/* Image Column */}
        <div className="md:col-span-7 order-1 md:order-2 relative">
          <FadeIn delay={0.1} direction="left">
            <div className="aspect-[4/5] overflow-hidden img-hover-zoom relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjTjl6R6fdLwE2XXfMGIXMitS5c5fm1NrxdzUojXDrpq0bAVtfyD3l12EnOcCgKcq1IgaI6AIehht5GGmogG0CDmK_JMwc98rlNpZL0u2gvJbd8HFLhnPtuAfAPvbEncjCon9PhBgFE2KYOT2LCuN4AmIHh4Qb-AZbQeXccZ0uv7KMxvfN_q-gKaBA_Jn-0YdVR13gHdubGdQZy_6Ec570VQLkCU96rSGyD6j4Fv1FOsmGeoYZij1Yc2Hue5z-0gkN4Lxt0PKCho0k"
                alt="Minimalist botanical interior at One O Eight cafe"
                fill
                quality={85}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>
          </FadeIn>

          {/* Pull Quote */}
          <FadeIn delay={0.5} direction="right">
            <div className="hidden md:block absolute -bottom-10 -left-10 w-64 bg-surface-container-low p-8 shadow-xl border border-outline-variant/10">
              <p className="font-bodoni italic text-xl text-primary leading-snug">
                &ldquo;Quiet is the new luxury.&rdquo;
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
