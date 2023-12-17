type SlideButtonProps = {
  variant: "prev" | "next";
  mode: "mobile" | "lightbox";
  onClick: () => void;
};

const SlideButton = ({ variant, mode, onClick }: SlideButtonProps) => {
  const pos =
    variant === "prev"
      ? mode === "mobile"
        ? "left-4"
        : "-left-6"
      : mode === "mobile"
      ? "right-4"
      : "-right-6";

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${pos} w-12 h-12 grid place-items-center rounded-full bg-neutral-white z-[60]`}
    >
      <img
        src={`${
          variant === "prev"
            ? `${import.meta.env.BASE_URL}/images/icon-previous.svg`
            : `${import.meta.env.BASE_URL}/images/icon-next.svg`
        } `}
        width={10}
      />
    </button>
  );
};

export default SlideButton;
