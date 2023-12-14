import navLinks from "../../data/navLinks";
import Container from "../container";

const DesktopHeader = () => {
  return (
    <Container>
      <div className="hidden md:flex py-6 items-center gap-x-10 border-b bg-neutral-white">
        <div>
          <img src="/images/logo.svg" alt="logo" />
        </div>

        <div className="grow">
          <nav>
            <ul className="flex gap-x-6">
              {navLinks.map((e, idx) => (
                <li key={idx}>
                  <a
                    href={e.href}
                    className="text-neutral-dark-grayish-blue hover:text-neutral-black decoration-4 decoration-primary-orange hover:underline underline-offset-[32px]"
                  >
                    {e.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <button className="group">
          <img
            src="/images/icon-cart.svg"
            alt="cart-icon"
            className="filter group-hover:brightness-0"
          />
        </button>

        <img
          src="/images/image-avatar.png"
          alt="user-avatar"
          width={36}
          className="rounded-full hover:border-2 border-primary-orange cursor-pointer"
        />
      </div>
    </Container>
  );
};
export default DesktopHeader;
