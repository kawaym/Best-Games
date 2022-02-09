import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from 'react';

import './css/reset';
import './css/styles';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ } />
            </Routes>
        </BrowserRouter>
    );
}

render(
    <AuthProviders>
        <App />
    </AuthProviders>,
    document.querySelector('.root')
);