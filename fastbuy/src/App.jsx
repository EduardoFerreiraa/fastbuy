import { Routes, Route, useLocation } from 'react-router-dom';

import './styles/style.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CartProducts from './components/CartProducts';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/produto" element={<CartProducts />} />
        <Route path="/conheca-mais" element={<CartProducts />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
