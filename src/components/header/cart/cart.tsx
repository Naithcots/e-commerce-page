import { motion } from "framer-motion";

const Cart = () => {
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0, opacity: 0 }}
      className="rounded-md shadow-md bg-neutral-white"
    >
      <div className="border-b">
        <p className="p-5 font-bold">Cart</p>
      </div>
      <div>
        <div className="min-h-[200px] grid place-items-center">
          <p className="text-neutral-dark-grayish-blue font-bold">
            Your cart is empty.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default Cart;
