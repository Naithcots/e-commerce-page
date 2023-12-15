import { useState } from "react";
import useCart from "../../hooks/useCart";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const decrement = () => setQuantity(quantity - 1);
  const increment = () => setQuantity(quantity + 1);

  const inputRange = (
    <div className="h-12 lg:h-full px-2 grid grid-cols-[32px_auto_32px] items-center rounded-md bg-neutral-light-grayish-blue">
      <button
        disabled={quantity === 1}
        onClick={decrement}
        className="w-full h-full grid place-items-center disabled:filter disabled:brightness-0 group"
      >
        <img
          src="/images/icon-minus.svg"
          alt="minus-quantity-icon"
          className="group-hover:filter group-hover:brightness-125"
        />
      </button>
      <span className="text-center font-bold">{quantity}</span>
      <button
        onClick={increment}
        className="w-full h-full grid place-items-center group"
      >
        <img
          src="/images/icon-plus.svg"
          alt="plus-quantity-icon"
          className="group-hover:filter group-hover:brightness-125"
        />
      </button>
    </div>
  );

  return (
    <section>
      <div>
        <h2 className="text-primary-orange font-bold uppercase">
          Sneaker Company
        </h2>
        <h1 className="my-2 text-3xl font-bold md:my-3 md:text-4xl lg:mt-5 lg:my-6 lg:text-5xl">
          Fall Limited Edition Sneakers
        </h1>
        <p className="lg:text-lg text-neutral-dark-grayish-blue">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they{"’"}ll withstand
          everything the weather can offer.
        </p>
        <div className="mt-6 flex justify-between items-center lg:flex-col lg:items-start lg:gap-y-2">
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold">$125.00</p>
            <span className="px-2 rounded-md text-lg font-bold text-primary-orange bg-primary-pale-orange">
              50%
            </span>
          </div>
          <p className="text-xl text-neutral-grayish-blue line-through">
            $250.00
          </p>
        </div>
        <div className="mt-4 lg:mt-6 grid gap-4 lg:grid-cols-[.6fr_1fr] lg:gap-6">
          {inputRange}
          <button
            onClick={() => addToCart({ id: 0, qty: quantity })}
            className="p-4 w-full flex justify-center items-center gap-3 rounded-md font-bold text-neutral-white bg-primary-orange hover:filter hover:brightness-110"
          >
            <img
              src="/images/icon-cart.svg"
              alt="add-to-cart-icon"
              className="filter brightness-0 invert"
            />
            <p className="text-lg">Add to cart</p>
          </button>
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;
