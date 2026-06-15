import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SkeletonProduct from './SkeletonProduct';
import '../styles/cartProducts.css';
import Header from './Header';

function CartProducts() {
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.add('cart-body');

    return () => {
      document.body.classList.remove('cart-body');
    };
  }, []);

  if (loading) {
    return <SkeletonProduct />;
  }

  return (
    <motion.section
      className="container-produto"
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
        ease: 'easeOut',
      }}
    >
      <div className="content-produto">
        <p>
          Home {'>'} Smartphones {'>'} Iphone {'>'} Iphone 16 PRO MAX 128GB
          Preto
        </p>
        <div className="info-product">
          <div className="detalhes-product">
            <div className="card-product">1</div>
            <div className="card-product">2</div>
            <div className="card-product">3</div>
            <div className="card-product">4</div>
            <div className="card-product">5</div>
          </div>
          <div className="image-product">
            <img src={state.imagem} alt={state.titulo} />
          </div>
        </div>
      </div>

      <div className="contentDescricao-product">
        <div className="desconto-product">
          <p className="novoProduto">Novo</p>
          <p className="novoProduto descontoAplicado">12% OFF</p>
        </div>
        <div className="descricaoProduct">
          <h1>{state.titulo}</h1>
          <p id="avaliacoes">
            ⭐ ⭐ ⭐ ⭐ ⭐{' '}
            <span id="avaliacoesProduct">({state.avaliacoes})</span>
          </p>
          <p id="descrevendoProduct">{state.descricao}</p>
          <div className="color-product">
            <p>Cor:</p> <span>Branca</span>
          </div>

          <div className="color-options">
            <button className="color black"></button>
            <button className="color white"></button>
            <button className="color blue"></button>
            <button className="color pink"></button>
            <button className="color green"></button>
          </div>
          <div className="features">
            {state.features.map((feature, index) => (
              <p key={index}>{feature}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="content-pagamento">
        <p className="estoqueImediato">Em estoque - Envio imediato</p>
        <div className="content-price">
          <p id="price">{state.preco}</p>
          <p id="jurosParcelados">{state.juros}</p>
          <button id="parcelas">Ver parcelas</button>
        </div>
        <div className="content-cart">
          <div className="parcelas-product">
            <p id="dozeVezes-juros">12x sem juros</p>
            <p>Parcele em até 12x sem juros no cartão de crédito.</p>
          </div>

          <div className="button-cart">
            <button className="add-cart">Adicionar no carrinho</button>
          </div>

          <div className="button-cart">
            <button className="add-cart buy-product">Comprar agora</button>
          </div>

          <div className="content-frete">
            <p>Calcule o frete e prazo da entrega</p>
            <div className="calcularFrete">
              <input type="text" id="frete" placeholder="Digite seu CEP" />
              <button id="calcular">Calcular</button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default CartProducts;
