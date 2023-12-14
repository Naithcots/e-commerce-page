import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import productImages from "../../../data/productImages";

const DesktopCarousel = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section>
      <Swiper
        onSwiper={(swiper) => {
          setSwiper(swiper);
          setActiveIdx(swiper.activeIndex);
        }}
        onSlideChange={(swiper) => setActiveIdx(swiper.activeIndex)}
      >
        {productImages.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={item.imageSrc} className="rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8 flex gap-x-8">
        {productImages.map((item, idx) => (
          <button
            onClick={() => swiper?.slideTo(idx)}
            key={idx}
            className={`rounded-xl border-primary-orange ${
              idx === activeIdx ? "border-2" : ""
            }`}
          >
            <img
              src={item.imageSrc}
              className={`rounded-lg transition-opacity ${
                idx === activeIdx ? "opacity-40" : ""
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};
export default DesktopCarousel;
