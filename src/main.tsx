import './style.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Pages/Home/home';
import Navigation from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Navigation />
      <Home />
      <Footer />
    </StrictMode>
  );
}