"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS, MENU_TABS } from "@/lib/constants";
import type { MenuCategory } from "@/types";
import { formatPrice } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("pasta");

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  const handleCategoryChange = useCallback((category: MenuCategory) => {
    setActiveCategory(category);
  }, []);

  return (
    <section
      id="menu"
      className="py-28 md:py-36 bg-surface"
      aria-label="Full menu"
    >
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="font-bodoni text-4xl md:text-5xl mb-4">
            The Culinary Collection
          </h2>
          <p className="font-work text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Explore our diverse selections, from artisanal brews to gourmet
            bowls.
          </p>
        </FadeIn>

        {/* Filter Tabs */}
        <div
          className="flex overflow-x-auto gap-8 pb-6 mb-14 border-b border-outline-variant/30 hide-scrollbar"
          role="tablist"
          aria-label="Menu categories"
        >
          {MENU_TABS.map((tab) => {
            const isActive = activeCategory === tab.value;
            return (
              <button
                key={tab.value}
                role="tab"
                aria-selected={isActive}
                aria-controls={`menu-panel-${tab.value}`}
                onClick={() => handleCategoryChange(tab.value)}
                className={`whitespace-nowrap font-work text-[11px] font-semibold tracking-[0.12em] uppercase pb-2 transition-all duration-200 shrink-0 ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div
          id={`menu-panel-${activeCategory}`}
          role="tabpanel"
          aria-label={`${activeCategory} menu items`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14"
            >
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.07,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="group"
                  >
                    <div className="flex justify-between items-baseline mb-3">
                      <h3 className="font-bodoni text-xl text-on-surface">
                        {item.name}
                      </h3>
                      <span className="font-work text-base text-secondary shrink-0 ml-4">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    <p className="font-work text-sm text-on-surface-variant mb-5 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="w-12 h-px bg-outline-variant group-hover:w-20 transition-all duration-300" />
                  </motion.article>
                ))
              ) : (
                <div className="col-span-3 text-center py-16 text-on-surface-variant font-work">
                  Menu items coming soon.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
