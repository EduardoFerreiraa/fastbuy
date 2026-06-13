import './styles/style.css';
import './styles/cartProducts.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CardProducts from './components/CardProducts';
import CartProducts from './components/CartProducts';

function App() {
  return (
    <>
      <Header />
      <CartProducts />
      <Footer />
    </>
  );
}

export default App;
