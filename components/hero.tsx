"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { images } from "@/constants";

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative w-full bg-black">
      <div className="w-full h-[450px] sm:h-[400px] md:h-[600px] lg:h-[80vh] xl:h-[85vh] 2xl:h-[90vh]">
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
            <SwiperSlide key={index} className="w-full h-full">
              <div
                className="relative w-full h-full"
                onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay.start()}
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
