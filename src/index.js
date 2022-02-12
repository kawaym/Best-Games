import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import PageLogin from "./pages/login";
import { AuthProvider } from "./providers/auth";
import { PurchaseProvider } from "./providers/purchase";
import PageRegister from "./pages/register";
import Home from "./pages/home";
import ProductsPage from "./pages/products";
import CartPage from "./pages/cart";
import FavoritesPage from "./pages/favorites";

import "./css/reset.css";
import "./css/style.css";
import Checkout from "./pages/checkout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/" element={<PageRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/:productType" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

render(
  <PurchaseProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </PurchaseProvider>,
  document.querySelector(".root")
);
