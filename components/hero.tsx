"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  "/images/slider1.png",
  "/images/slider2.png",
  "/images/2c5d7d0cd0b9d88f45dbb197f4b63fbf0f6fc1ad.png",
];

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative w-full h-[calc(100vh-80px)] md:h-[80vh] sm:h-[60vh] overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        speed={2000}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full"
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
            >
              <Image src={src} alt={`Slide ${index + 1}`} fill priority />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
