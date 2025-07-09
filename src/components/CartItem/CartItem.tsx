import type { Product } from "../../assets/type/type";
import CartButton from "../CartButton";

type CartItemProps = {
  item: Product;
  fromCart?: boolean;
};

const CartItem = ({ item, fromCart = false }: CartItemProps) => {
  const { _id, name, image, price } = item;
  return (
    <div
      key={_id}
      className="group relative flex flex-col gap-y-2 border border-zinc-200 rounded-md bg-white p-24 h-[500px]"
    >
      <img
        src={image?.asset?.url}
        alt="Product Image"
        className={`${
          !fromCart && "group-hover:-translate-y-2 transition-all"
        } duration-500 w-[250px]`}
      />
      <div className="absolute bottom-5 left-5">
        <h1 className={`text-zinc-700 ${fromCart && "text-sm"}`}>{name}</h1>
        <span className={`text-pink-400 ${fromCart && "text-sm"}`}>
          ${price}
        </span>
      </div>
      <CartButton item={item} fromCart={fromCart} />
    </div>
  );
};

export default CartItem;
