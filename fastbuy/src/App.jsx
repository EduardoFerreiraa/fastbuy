import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/style.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CartProducts from './components/CartProducts';

function App() {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <>
      <Header cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route
          path="/produto"
          element={<CartProducts setCartCount={setCartCount} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
