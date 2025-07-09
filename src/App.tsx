import { useEffect } from "react";
import type { Product } from "./assets/type/type";
import CartItem from "./components/CartItem";
import { useCart } from "./hooks/useCart";
import ShoppingCart from "./components/ShoppingCart";
import { client } from "./sanity/client";
import { ProductQuery } from "./sanity/productGroqQuery";

const App = () => {
  const { allItems, setItems, isLoading } = useCart();

  useEffect(() => {
    const getPosts = async () => {
      const responseProduct: Product[] = await client.fetch(ProductQuery);
      setItems(responseProduct);
    };
    getPosts();
  }, []);

  return (
    <div
      className={`grid place-items-center py-20 ${isLoading && "opacity-30"}`}
    >
      <h1 className="lg:text-5xl md:text-4xl sm:text-3xl italic text-gray-500 mb-16 px-10 text-center">
        Season’s Essentials: Outfits You Need Right Now
      </h1>

      <ShoppingCart />

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 place-items-start gap-10 xl:px-6 px-10">
        {allItems?.map((item: Product) => {
          return <CartItem key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default App;
