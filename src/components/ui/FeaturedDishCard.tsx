"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { FeaturedDish } from "@/types";
import { formatPrice } from "@/lib/utils";

interface FeaturedDishCardProps {
  dish: FeaturedDish;
  offset?: boolean;
}

export function FeaturedDishCard({ dish, offset = false }: FeaturedDishCardProps) {
  return (
    <motion.article
      className={`group relative overflow-hidden bg-white ${offset ? "md:mt-12" : ""}`}
      whileHover="hover"
      initial="rest"
      animate="rest"
      aria-label={`Featured dish: ${dish.name}`}
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden relative">
        <motion.div
          className="w-full h-full"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.08 },
          }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={dish.image}
            alt={dish.alt}
            fill
            quality={80}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
      </div>

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-primary/25 flex flex-col justify-end p-8 text-white pointer-events-none"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="font-bodoni text-2xl mb-2">{dish.name}</h3>
        <p className="font-work text-sm opacity-90 mb-5 leading-relaxed">
          {dish.description}
        </p>
        {/* <span className="font-work text-[11px] font-semibold tracking-widest uppercase border-b border-white w-fit pb-1">
          View Ingredients
        </span> */}
      </motion.div>

      {/* Default Label */}
      <motion.div
        className="p-6 bg-white flex justify-between items-center"
        variants={{
          rest: { opacity: 1, y: 0 },
          hover: { opacity: 0, y: 12 },
        }}
        transition={{ duration: 0.3 }}
      >
        <span className="font-bodoni text-xl">{dish.name}</span>
        {/* <span className="font-work text-sm font-medium text-secondary">
          {formatPrice(dish.price)}
        </span> */}
      </motion.div>
    </motion.article>
  );
}
