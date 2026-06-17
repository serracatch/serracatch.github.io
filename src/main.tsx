import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import ThankyouPage from './pages/Thankyou';

const container = document.getElementById('root')!;
const hash = window.location.hash;
const isHomeRoute = hash === '' || hash === '#' || hash === '#/';

const app = (
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/thankyou' element={<ThankyouPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);

if (isHomeRoute) {
  hydrateRoot(container, app);
} else {
  container.innerHTML = '';
  createRoot(container).render(app);
}
