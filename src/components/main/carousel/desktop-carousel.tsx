import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";
import "swiper/css";
import "swiper/css/thumbs";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import productImages from "../../../data/productImages";
import Lightbox from "./lightbox";
import SlideButton from "./slide-button";

type DesktopCarouselProps = {
  mode: "desktop" | "lightbox";
};

const DesktopCarousel = ({ mode }: DesktopCarouselProps) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activeSlideIdx, setActiveSlideIdx] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <section>
      <div className="relative">
        <Swiper
          onSwiper={(swiper) => {
            setSwiper(swiper);
            setActiveSlideIdx(swiper.activeIndex);
          }}
          onSlideChange={(swiper) => setActiveSlideIdx(swiper.activeIndex)}
        >
          {productImages.map((item, idx) => (
            <SwiperSlide
              onClick={() => mode === "desktop" && openLightbox()}
              key={idx}
            >
              <img src={item.imageSrc} className="rounded-xl" />
            </SwiperSlide>
          ))}
        </Swiper>
        {mode === "lightbox" && (
          <>
            <SlideButton
              mode="lightbox"
              variant="prev"
              onClick={() => swiper?.slidePrev()}
            />
            <SlideButton
              mode="lightbox"
              variant="next"
              onClick={() => swiper?.slideNext()}
            />
          </>
        )}
      </div>

      <div className="mt-8 flex gap-x-8">
        {productImages.map((item, idx) => (
          <button
            onClick={() => swiper?.slideTo(idx)}
            key={idx}
            className={`rounded-xl border-primary-orange ${
              idx === activeSlideIdx ? "border-2" : ""
            }`}
          >
            <img
              src={item.imageSrc}
              className={`rounded-lg transition-opacity ${
                idx === activeSlideIdx ? "opacity-40" : ""
              }`}
            />
          </button>
        ))}
      </div>

      {createPortal(
        <AnimatePresence mode="wait">
          {isLightboxOpen && <Lightbox onClose={closeLightbox} />}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};
export default DesktopCarousel;
