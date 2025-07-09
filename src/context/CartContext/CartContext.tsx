import { createContext } from "react";
import type { Product } from "../../assets/type/type";

type CartContextType = {
  isLoading: boolean;
  allItems: Product[];
  setItems: (allProducts: Product[]) => void;
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
  updateQuantity: (item: Product, amount: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
