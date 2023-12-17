import { motion } from "framer-motion";
import navLinks from "../../data/navLinks";

type MobileMenuProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  const MobileMenuOverlay = () => {
    return (
      <motion.div
        onClick={closeMenu}
        initial={{ opacity: 0 }}
        animate={isOpen && { opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full bg-neutral-black/50 backdrop-brightness-75 cursor-pointer"
      />
    );
  };

  return (
    <div className="fixed inset-0 z-50">
      <MobileMenuOverlay />
      <motion.div
        initial={{ x: "-100%" }}
        animate={isOpen && { x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "keyframes" }}
        className="fixed top-0 w-2/3 h-full p-6 bg-neutral-white"
      >
        <button className="group" onClick={closeMenu}>
          <img
            src={`${import.meta.env.BASE_URL}/images/icon-close.svg`}
            alt="close-mobile-menu-icon"
            className="group-hover:filter group-hover:brightness-0"
          />
        </button>
        <nav>
          <ul className="mt-10">
            {navLinks.map((e, idx) => (
              <li key={idx} className="mb-4">
                <a
                  href={e.href}
                  className="text-xl font-bold hover:underline decoration-primary-orange underline-offset-2"
                >
                  {e.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </div>
  );
};
export default MobileMenu;
