import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
