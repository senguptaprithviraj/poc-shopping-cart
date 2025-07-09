import "./Loader.css";
import { useCart } from "../../hooks/useCart";

const Loader = () => {
  const { isLoading } = useCart();

  return (
    <>
      {isLoading && (
        <>
          <div className="fixed flex left-0 top-0 w-full h-full justify-center items-center">
            <div className="loader "></div>
          </div>
        </>
      )}
    </>
  );
};

export default Loader;
