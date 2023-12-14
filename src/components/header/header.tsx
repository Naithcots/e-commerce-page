import { useState } from "react";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <header>
      <MobileHeader isCartOpen={isCartOpen} toggleCartOpen={toggleCartOpen} />
      <DesktopHeader isCartOpen={isCartOpen} toggleCartOpen={toggleCartOpen} />
    </header>
  );
};
export default Header;
