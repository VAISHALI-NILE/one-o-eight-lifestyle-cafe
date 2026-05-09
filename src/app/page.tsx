import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedDishes } from "@/components/sections/FeaturedDishes";
import { Menu } from "@/components/sections/Menu";
import { Gallery } from "@/components/sections/Gallery";
import { Wellness } from "@/components/sections/Wellness";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <FeaturedDishes />
        <Menu />
        <Gallery />
        <Wellness />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
