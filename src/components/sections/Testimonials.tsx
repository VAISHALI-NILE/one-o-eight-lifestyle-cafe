import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  // Duplicate for infinite loop
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      className="py-24 bg-surface overflow-hidden"
      aria-label="Customer testimonials"
    >
      <div className="mb-12 text-center">
        <div className="text-4xl text-outline mb-4" aria-hidden="true">
          &ldquo;
        </div>
        <h2 className="font-work text-[11px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant">
          Voices of the Sanctuary
        </h2>
      </div>

      {/* Marquee */}
      <div
        className="relative flex overflow-hidden group"
        aria-label="Scrolling testimonials"
      >
        <div className="flex gap-8 animate-marquee group-hover:[animation-play-state:paused] marquee-content">
          {doubled.map((testimonial, index) => (
            <figure
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[340px] md:w-[420px] bg-surface-container-low p-8 md:p-10 border border-outline-variant/20"
            >
              <blockquote>
                <p className="font-bodoni text-xl italic mb-6 text-on-surface leading-snug text-wrap">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div
                  className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center font-work text-xs font-semibold text-secondary shrink-0"
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
                <cite className="font-work text-[10px] font-semibold uppercase tracking-[0.12em] not-italic text-on-surface-variant">
                  {testimonial.author} — {testimonial.role}
                </cite>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
