import { motion } from "framer-motion";
import products from "../../../data/products";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const { cart, deleteFromCart } = useCart();
  const cartNotEmpty = cart.length > 0;
  const cartWithProducts = cart.map((cartItem) => ({
    cartItem,
    data: products.find((item) => item.id === cartItem.id)!,
  }));

  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0, opacity: 0 }}
      className="relative rounded-md shadow-md bg-neutral-white z-10"
    >
      <div className="border-b">
        <p className="p-5 font-bold">Cart</p>
      </div>
      <div>
        {cartNotEmpty ? (
          <div className="p-6">
            {cartWithProducts.map((product) => (
              <div
                key={product.cartItem.id}
                className="flex items-center gap-4"
              >
                <img
                  src={product.data.image}
                  alt="product-image"
                  width={56}
                  height={56}
                  className="rounded-md"
                />
                <div className="grow">
                  <p className="text-neutral-dark-grayish-blue line-clamp-1">
                    {product.data.name}
                  </p>
                  <p className="text-neutral-dark-grayish-blue">
                    ${product.data.priceUsd.toFixed(2)} x {product.cartItem.qty}
                    <span className="ml-3 text-neutral-black font-bold">
                      $
                      {(product.cartItem.qty * product.data.priceUsd).toFixed(
                        2
                      )}
                    </span>
                  </p>
                </div>
                <button onClick={() => deleteFromCart(product.cartItem.id)}>
                  <img
                    src="/images/icon-delete.svg"
                    alt="delete-from-cart-icon"
                  />
                </button>
              </div>
            ))}
            <button className="mt-5 mb-2 py-4 w-full text-center rounded-lg font-bold text-neutral-white bg-primary-orange">
              Checkout
            </button>
          </div>
        ) : (
          <div className="min-h-[200px] grid place-items-center">
            <p className="text-neutral-dark-grayish-blue font-bold">
              Your cart is empty.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
export default Cart;
