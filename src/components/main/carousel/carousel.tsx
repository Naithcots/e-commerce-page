import DesktopCarousel from "./desktop-carousel";
import MobileCarousel from "./mobile-carousel";

const Carousel = () => {
  return (
    <section>
      <div className="md:hidden">
        <MobileCarousel />
      </div>
      <div className="hidden md:block">
        <DesktopCarousel mode="desktop" />
      </div>
    </section>
  );
};
export default Carousel;
