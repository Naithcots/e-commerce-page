import { useState } from "react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const decrement = () => setQuantity(quantity - 1);
  const increment = () => setQuantity(quantity + 1);

  const inputRange = (
    <div className="h-12 mt-5 px-2 grid grid-cols-[32px_auto_32px] items-center rounded-md bg-neutral-light-grayish-blue">
      <button
        disabled={quantity === 0}
        onClick={decrement}
        className="justify-self-center"
      >
        <img src="/images/icon-minus.svg" alt="minus-quantity-icon" />
      </button>
      <span className="text-center font-bold">{quantity}</span>
      <button onClick={increment} className="justify-self-center">
        <img src="/images/icon-plus.svg" alt="plus-quantity-icon" />
      </button>
    </div>
  );

  return (
    <section>
      <div className="p-6">
        <h2 className="text-primary-orange font-bold uppercase">
          Sneaker Company
        </h2>
        <h1 className="my-2 text-3xl font-bold">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-neutral-dark-grayish-blue">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they{"’"}ll withstand
          everything the weather can offer.
        </p>
        <div className="mt-6 flex justify-between items-center">
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
        {inputRange}
        <div className="mt-4">
          <button className="p-4 w-full flex justify-center items-center gap-3 rounded-md font-bold text-neutral-white bg-primary-orange">
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
