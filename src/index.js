import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import PageLogin from "./pages/login";
import { AuthProvider } from "./providers/auth";
import PageRegister from "./pages/register";
import FavoritsPage from "./pages/Favorits";
import Home from "./pages/home";
import ProductPage from "./pages/ProductPage";

import "./css/reset.css";
import "./css/style.css";
import { FavoriteProvider } from "./providers/favorites";
import { ShoppingProvider } from "./providers/shopping";
import ShoppingPage from "./pages/ShoppingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/" element={<PageRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products-:category" element={<ProductPage />} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="/favorites" element={<FavoritsPage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

render(
  <AuthProvider>
    <FavoriteProvider>
      <ShoppingProvider>
        <App />
      </ShoppingProvider>
    </FavoriteProvider>
  </AuthProvider>,
  document.querySelector(".root")
);
