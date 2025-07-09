import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "./context/CartContext/CartProvider.tsx";
import Loader from "./components/Loader/Loader.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <App />
      <Loader />
    </CartProvider>
  </StrictMode>
);
