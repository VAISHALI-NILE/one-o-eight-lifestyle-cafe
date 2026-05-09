import Image from "next/image";
import { Wifi, Armchair, VolumeX, Plug2, Accessibility, Heart, TreePine, Package } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const AMENITIES = [
  { icon: Accessibility, label: "Wheelchair Accessible" },
  { icon: Heart, label: "LGBTQ+ Friendly" },
  { icon: TreePine, label: "Outdoor Seating" },
  { icon: Package, label: "No-Contact Delivery" },
];

const FOCUS_FEATURES = [
  { icon: Wifi, label: "Gigabit Fiber" },
  { icon: Armchair, label: "Ergonomic Seating" },
  { icon: VolumeX, label: "Quiet Zones" },
  { icon: Plug2, label: "Universal Ports" },
];

export function Wellness() {
  return (
    <section
      id="wellness"
      className="bg-primary text-on-primary py-28 md:py-36 overflow-hidden"
      aria-label="Wellness and workspace amenities"
    >
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        {/* Focus Studio */}
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 mb-24">
          {/* Video / Image */}
          <FadeIn className="w-full md:w-1/2" direction="right">
            <div className="aspect-video bg-white/5 relative overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfU7KqYG2zjQ_8J2q2bkOg8TDZRkOlfyLRsMN3W4OAGNDO_VZs-sSzT3Q2v_Sc86xvZEzXpLCGBcVlTe4NdVElrvO9VzpKn69y459VgN45lFT7GmSj2xMbogPQtke_TM87RgRFO2b6H306TFtACpxvdyX-1BoytYqs_hwVrqTxCMwoMsVnEgdrO_Pdv04CegCQ3ZCLLIVPr089wfofQbV1lQ-83RDGxXsUX9oTV3Jq0-GZq-bVSvnfp4vEQxf-_5cey5kTTFUnMQcS"
                alt="The Focus Studio at One O Eight — premium workspace environment"
                fill
                quality={80}
                className="object-cover opacity-60"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Play Button */}
              <button
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play Focus Studio video"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/20">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </FadeIn>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-8">
            <FadeIn delay={0.1}>
              <span className="font-work text-[11px] font-semibold text-on-primary-container tracking-[0.2em] uppercase">
                The Focus Studio
              </span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="font-bodoni text-4xl md:text-5xl leading-tight">
                Designed for the modern creative.
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="font-work text-lg text-primary-fixed-dim leading-relaxed">
                Meticulously crafted to support both deep work and complete
                disconnection. High-speed connectivity meets acoustic dampening
                and ergonomic beauty.
              </p>
            </FadeIn>

            {/* Feature Grid */}
            <StaggerContainer
              className="grid grid-cols-2 gap-8"
              staggerDelay={0.1}
            >
              {FOCUS_FEATURES.map(({ icon: Icon, label }) => (
                <StaggerItem key={label} className="space-y-3">
                  <Icon size={28} className="text-secondary-fixed" strokeWidth={1.5} />
                  <h3 className="font-work text-[11px] font-semibold tracking-[0.1em] uppercase">
                    {label}
                  </h3>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Amenities Grid */}
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10">
            {AMENITIES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="text-center space-y-4 group"
              >
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto group-hover:bg-white/10 transition-colors">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-work text-[11px] font-semibold tracking-[0.08em] uppercase leading-tight">
                  {label}
                </h3>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
