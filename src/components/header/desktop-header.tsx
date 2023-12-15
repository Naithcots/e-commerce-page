import { AnimatePresence } from "framer-motion";
import navLinks from "../../data/navLinks";
import Container from "../container";
import CartButton from "./cart-button";
import Cart from "./cart/cart";

type DesktopHeaderProps = {
  isCartOpen: boolean;
  toggleCartOpen: () => void;
};

const DesktopHeader = ({ isCartOpen, toggleCartOpen }: DesktopHeaderProps) => {
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

        <div className="relative">
          <CartButton isCartOpen={isCartOpen} onClick={toggleCartOpen} />
          <AnimatePresence>
            {isCartOpen && (
              <div className="absolute right-0 mt-2 min-w-[400px]">
                <Cart />
              </div>
            )}
          </AnimatePresence>
        </div>

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
