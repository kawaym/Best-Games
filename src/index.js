import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from 'react-dom';
import PageLogin from './pages/login';
import { AuthProvider } from "./providers/auth";

import './css/reset.css';
import './css/style.css';
import PageRegister from "./pages/register";
import Home from "./pages/home";
import Product from "./pages/product";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageLogin />} />
                <Route path='/' element={<PageRegister />} />
                <Route path="/home" element={<Home />} />
                <Route path="/consoles" element={<Product />} />
                <Route path="/collectibles" element={<h1>teste</h1>} />
                <Route path="/accessories" element={<h1>teste</h1>} />
                <Route path="/games" element={<h1>teste</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.querySelector('.root')
);