import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import productImages from "../../../data/productImages";
import SlideButton from "./slide-button";
import { useState } from "react";

const MobileCarousel = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="relative z-0">
      <Swiper loop={true} onSwiper={setSwiper}>
        {productImages.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={`${import.meta.env.BASE_URL}${item.imageSrc}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SlideButton
        variant="prev"
        mode="mobile"
        onClick={() => swiper?.slidePrev()}
      />
      <SlideButton
        variant="next"
        mode="mobile"
        onClick={() => swiper?.slideNext()}
      />
    </div>
  );
};

export default MobileCarousel;
