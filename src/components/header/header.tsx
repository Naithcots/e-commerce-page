import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const Header = () => {
  return (
    <header>
      <MobileHeader />
      <DesktopHeader />
    </header>
  );
};
export default Header;
