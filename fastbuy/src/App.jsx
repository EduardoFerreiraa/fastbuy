import { Routes, Route } from 'react-router-dom';

import './styles/style.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CartProducts from './components/CartProducts';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/produto" element={<CartProducts />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
