import DesktopCarousel from "./desktop-carousel";
import MobileCarousel from "./mobile-carousel";

const Carousel = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileCarousel />
      </div>
      <div className="hidden md:block">
        <DesktopCarousel />
      </div>
    </>
  );
};
export default Carousel;
