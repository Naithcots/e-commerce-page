import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";
import MobileMenu from "./mobile-menu";

const MobileHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="md:hidden px-5 py-3 flex items-center gap-x-4 bg-neutral-white">
      <button className="group" onClick={toggleMobileMenu}>
        <img
          src="/images/icon-menu.svg"
          alt="menu-icon"
          className="group-hover:filter group-hover:brightness-0"
        />
        {createPortal(
          <AnimatePresence mode="wait">
            {isMobileMenuOpen && (
              <MobileMenu
                isOpen={isMobileMenuOpen}
                closeMenu={closeMobileMenu}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
      </button>

      <div className="grow">
        <img src="/images/logo.svg" alt="logo" />
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
        width={28}
        className="rounded-full hover:border-2 border-primary-orange cursor-pointer"
      />
    </div>
  );
};
export default MobileHeader;
