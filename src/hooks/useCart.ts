import { create } from "zustand";

type Item = {
  id: number;
  qty: number;
};

type Cart = Item[];

interface CartState {
  cart: Cart;
  addToCart: (item: Item) => void;
  deleteFromCart: (itemId: number) => void;
}

const useCart = create<CartState>((set) => ({
  cart: [],
  addToCart: ({ id, qty }) =>
    set((state) => ({
      cart: state.cart.find((item) => item.id === id)
        ? state.cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + qty } : item
          )
        : [...state.cart, { id, qty }],
    })),
  deleteFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
}));

export default useCart;
