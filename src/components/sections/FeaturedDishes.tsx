import { FeaturedDishCard } from "@/components/ui/FeaturedDishCard";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { FadeIn } from "@/components/animations/FadeIn";
import { FEATURED_DISHES } from "@/lib/constants";

export function FeaturedDishes() {
  return (
    <section
      className="py-28 md:py-36 bg-surface-container-low overflow-hidden"
      aria-label="Guest favorite dishes"
    >
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <FadeIn delay={0.1}>
            <span className="font-work text-[11px] font-semibold text-secondary mb-4 block uppercase tracking-[0.2em]">
              Guest Favorites
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="font-bodoni text-4xl md:text-6xl leading-tight">
              Most Loved Delights
            </h2>
          </FadeIn>
        </div>

        {/* Dishes Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          staggerDelay={0.15}
        >
          {FEATURED_DISHES.map((dish, index) => (
            <StaggerItem key={dish.id}>
              <FeaturedDishCard dish={dish} offset={index === 1} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
