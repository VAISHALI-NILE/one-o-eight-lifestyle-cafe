// Menu Types
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
}

export type MenuCategory =
  | "pasta"
  | "coffee"
  | "veg-breakfast"
  | "cold-coffee"
  | "loose-leaf-tea"
  | "juice"
  | "smoothie"
  | "h20"
  | "egg-breakfast"
  | "salad-bowls"
  | "starter"
  | "pizza"
  | "sandwich"
  | "baked"
  | "tea"
  | "retail";

export interface MenuTabItem {
  label: string;
  value: MenuCategory;
}

// Featured Dish Types
export interface FeaturedDish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  alt: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
}

// Amenity Types
export interface Amenity {
  id: string;
  icon: string;
  label: string;
}

// Gallery Image Types
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
}

// Navigation Types
export interface NavLink {
  href: string;
  label: string;
}
