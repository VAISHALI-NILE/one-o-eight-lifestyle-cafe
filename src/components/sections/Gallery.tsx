import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";

export function Gallery() {
  return (
    <section
      id="atmosphere"
      className="py-28 md:py-36 overflow-hidden bg-surface-container-low"
      aria-label="Cafe atmosphere gallery"
    >
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        {/* Header */}
        <FadeIn className="mb-16 md:mb-20 text-center">
          <span className="font-work text-[11px] font-semibold text-secondary mb-4 block uppercase tracking-[0.2em]">
            Atmosphere
          </span>
          <h2 className="font-bodoni text-4xl md:text-5xl">
            Where Sunlight Dwells
          </h2>
        </FadeIn>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Large featured image */}
          <FadeIn
            className="md:col-span-8 group overflow-hidden aspect-video md:aspect-[16/9] relative"
            direction="right"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ7ZslFB5V-DWkHs8iGNrsTWufaRyq8D2_MNTFWXUc1QgAo-2gUF2fLDqpTe-TYQT5YnbORMYyYLC33BLEMfsdLfTx7iNRBZHP9_L9qoGnTrYXcFQrKXMmjT4oxQYrmMF6yQKzgbVGwYOYWtbZjS6FaTwl185xNltpAdstq0v5mQNjm5VqnaDX-fxu-KN92WS-R71OnXk6m-OhJmWtw1q_ocUNZDswHip_0a_MjMt2x4rX9CGZCG9fJuE-E90ZwG2pNh8DrYdKKyAh"
              alt="Sunlit cafe interior with natural light flooding through tall windows"
              fill
              quality={85}
              className="object-cover transition-transform duration-[3s] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </FadeIn>

          {/* Side column */}
          <div className="md:col-span-4 md:mt-24 space-y-8">
            <FadeIn direction="left" delay={0.2}>
              <div className="group overflow-hidden aspect-square relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzzPs_KlV3ZjlXQkJcYdA_HKhVr-BUfnmWvup6HvTt0OxfFOC0IxUr75kexU90DGDxSpRM_vzY53iiJw1XuA1clCFEBIiLzLfIJrWJSiGP4Q35sfiJIHdjokV0MSirI-YK4SMbc3j-Dx8XjmCWQlF5EaTRKRbK1ohLtm2qgI7A-X7ftwSAArTC5Sf6MY8K5PZlFCjjrsuhLNDIZU4QJHOAlN_Oy6w3NIlAzIE45_yXyb6bY2dkdPpZukrh60j8iRVzLql_cPhk-pE5"
                  alt="Artisan coffee with perfect latte art on marble surface"
                  fill
                  quality={80}
                  className="object-cover transition-transform duration-[3s] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <blockquote className="pl-8 border-l-2 border-secondary/20">
                <p className="font-work text-lg italic text-secondary leading-relaxed">
                  The interplay of organic shadows and natural textures creates
                  a living canvas for your morning.
                </p>
              </blockquote>
            </FadeIn>
          </div>

          {/* Bottom row */}
          <FadeIn
            className="md:col-span-5 md:-mt-32"
            direction="up"
            delay={0.15}
          >
            <div className="group overflow-hidden aspect-[4/5] relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJwkwhsa-_Ywf99vK5lk0D7G-bUlIk014ryCMl1uKAGN1mcJGCOvGznsZ5-TT2ym6W_TpnvcJC6wa8RGqRQSTemg3XkNAdGYBVF2E_46o1vD_y-LguPCghKQ3hRfcrm_lZ_yhmURRqy_6lArqGPX4m2oKM30Alu6khidFteF1redKjaprJ_P4jmDcgXNJCbr_E1NJjVRWMr3pzYIwomSspzaTZLvdmGlcMBfagOVblwH9-KtQkAfjJhias7A-Sz0UM2p2BFRXDHBig"
                alt="Creator working at a serene cafe table — remote work sanctuary"
                fill
                quality={80}
                className="object-cover transition-transform duration-[3s] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 41vw"
              />
            </div>
          </FadeIn>

          <FadeIn
            className="md:col-span-7 group overflow-hidden aspect-[3/2] md:mt-8 relative"
            direction="up"
            delay={0.25}
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfU7KqYG2zjQ_8J2q2bkOg8TDZRkOlfyLRsMN3W4OAGNDO_VZs-sSzT3Q2v_Sc86xvZEzXpLCGBcVlTe4NdVElrvO9VzpKn69y459VgN45lFT7GmSj2xMbogPQtke_TM87RgRFO2b6H306TFtACpxvdyX-1BoytYqs_hwVrqTxCMwoMsVnEgdrO_Pdv04CegCQ3ZCLLIVPr089wfofQbV1lQ-83RDGxXsUX9oTV3Jq0-GZq-bVSvnfp4vEQxf-_5cey5kTTFUnMQcS"
              alt="Cosy corner nook — warm light and botanical textures at One O Eight"
              fill
              quality={80}
              className="object-cover transition-transform duration-[3s] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
