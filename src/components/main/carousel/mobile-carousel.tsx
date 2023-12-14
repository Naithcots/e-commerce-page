import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import productImages from "../../../data/productImages";

const MobileCarousel = () => {
  return (
    <Swiper loop={true}>
      {productImages.map((item, idx) => (
        <SwiperSlide key={idx}>
          <img src={item.imageSrc} />
        </SwiperSlide>
      ))}
      <SlideButton type="prev" />
      <SlideButton type="next" />
    </Swiper>
  );
};

const SlideButton = ({ type }: { type: "prev" | "next" }) => {
  const swiper = useSwiper();

  const onClick = () =>
    type === "prev" ? swiper.slidePrev() : swiper.slideNext();

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${
        type === "prev" ? "left-4" : "right-4"
      } w-12 h-12 grid place-items-center rounded-full bg-neutral-white z-40`}
    >
      <img
        src={`${
          type === "prev"
            ? "/images/icon-previous.svg"
            : "/images/icon-next.svg"
        } `}
        width={10}
      />
    </button>
  );
};

export default MobileCarousel;
