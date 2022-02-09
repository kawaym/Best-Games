import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from 'react-dom';
import PageLogin from './pages/login';
import { AuthProvider } from "./providers/auth";

import './css/reset.css';
import './css/style.css';
import PageRegister from "./pages/register";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageLogin />} />
                <Route path='/' element={<PageRegister />} />

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