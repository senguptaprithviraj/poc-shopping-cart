import { useState, type ReactNode } from "react";
import type { Product } from "../../assets/type/type";
import { CartContext } from "./CartContext";
import { client } from "../../sanity/client";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [allItems, setAllItems] = useState<Product[]>([]);
  const [isLoading, toggleLoader] = useState<boolean>(false);

  const setItems = (allProducts: Product[]) => {
    setAllItems(allProducts);
  };

  const addToCart = async (item: Product) => {
    toggleLoader(true);
    try {
      await client.patch(item._id).set({ inCart: true }).commit();
      console.log("Product marked as added to cart in Sanity!");
      toggleLoader(false);
      setAllItems((prevItems) => {
        return prevItems.map((prevItem) => {
          if (prevItem.inCart) {
            return prevItem;
          }
          return prevItem._id === item._id
            ? { ...prevItem, inCart: true }
            : prevItem;
        });
      });
    } catch (error) {
      toggleLoader(false);
      console.error("Sanity update failed", error);
    }
  };

  const removeFromCart = async (item: Product) => {
    toggleLoader(true);
    try {
      await client.patch(item._id).set({ inCart: true }).commit();
      console.log("Product marked as removed from cart in Sanity!");
      toggleLoader(false);
      setAllItems((prevItems) => {
        return prevItems.map((prevItem) => {
          return prevItem._id === item._id
            ? { ...prevItem, inCart: false, quantity: 1 }
            : prevItem;
        });
      });
    } catch (error) {
      toggleLoader(false);
      console.error("Sanity update failed", error);
    }
  };

  const updateQuantity = async (cartItem: Product, amount: number) => {
    toggleLoader(true);
    try {
      await client
        .patch(cartItem._id)
        .set({ quantity: cartItem.quantity + amount })
        .commit();
      console.log("Product marked as updated quantity in Sanity!");
      toggleLoader(false);
      setAllItems((prevItems) => {
        return prevItems.map((item) => {
          return item._id === cartItem._id
            ? { ...item, quantity: item.quantity + amount }
            : item;
        });
      });
    } catch (error) {
      toggleLoader(false);
      console.error("Sanity update failed", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        isLoading,
        allItems,
        setItems,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
