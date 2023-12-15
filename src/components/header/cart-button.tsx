import { AnimatePresence } from "framer-motion";
import useCart from "../../hooks/useCart";
import { motion } from "framer-motion";

type CartButtonProps = {
  isCartOpen: boolean;
  onClick: () => void;
};

const CartButton = ({ isCartOpen, onClick }: CartButtonProps) => {
  const cart = useCart((state) => state.cart);
  const quantity = cart.reduce((prev, curr) => prev + curr.qty, 0);

  return (
    <button onClick={onClick} className="relative group">
      <AnimatePresence>
        {quantity > 0 && (
          <motion.span
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="absolute -top-1/2 -right-1/3 px-2 text-xs font-bold rounded-full text-neutral-white bg-primary-orange"
          >
            {quantity}
          </motion.span>
        )}
      </AnimatePresence>
      <img
        src="/images/icon-cart.svg"
        alt="cart-icon"
        className={`filter group-hover:brightness-0 ${
          isCartOpen ? "brightness-0" : ""
        }`}
      />
    </button>
  );
};
export default CartButton;
