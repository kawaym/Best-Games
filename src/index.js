import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from 'react-dom';
import PageLogin from './pages/login';
import { AuthProvider } from "./providers/auth";
import PageRegister from "./pages/register";
import FavoritsPage from "./pages/Favorits";
import Home from "./pages/home";

import './css/reset.css';
import './css/style.css';


export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageLogin />} />
                <Route path='/' element={<PageRegister />} />
                <Route path="/home" element={<Home />} />
                <Route path="/consoles" element={<h1>teste</h1>} />
                <Route path="/collectibles" element={<h1>teste</h1>} />
                <Route path="/accessories" element={<h1>teste</h1>} />
                <Route path="/games" element={<h1>teste</h1>} />
                <Route path='/register' element={<PageRegister />} />
                <Route path='/favorits' element={<FavoritsPage />} />
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