import DesktopCarousel from "./desktop-carousel";

type LightboxProps = {
  onClose: () => void;
};

const Lightbox = ({ onClose }: LightboxProps) => {
  const overlay = (
    <div className="absolute top-0 left-0 w-full h-full bg-neutral-black/50 z-40" />
  );

  const closeBtn = (
    <div className="w-full flex justify-end">
      <button onClick={onClose} className="group">
        <img
          src={`${import.meta.env.BASE_URL}/images/icon-close.svg`}
          alt="close-lightbox-icon"
          width={20}
          className="filter brightness-0 invert transition-transform hover:scale-90"
        />
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 z-40 hidden md:block">
      {overlay}
      <div className="relative w-full h-full flex justify-center items-center z-50">
        <div className="max-w-xl">
          {closeBtn}
          <div className="mt-5">
            <DesktopCarousel mode="lightbox" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Lightbox;
