import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/productsData';

function CardProducts() {
  const navigate = useNavigate();

  const cardProducts = products.filter((produto) =>
    produto.secoes.includes('card-products'),
  );

  return (
    <section className="products-alta">
      {cardProducts.map((produto) => (
        <div
          key={produto.id}
          className="card-alta"
          onClick={() => {
            navigate(`/produto/${produto.id}`, {
              state: produto,
            });

            window.scrollTo(0, 0);
          }}
        >
          <h1>{produto.categoria}</h1>

          <img src={produto.imagem} alt={produto.titulo} />

          <p className="product-description">
            {produto.descricao.slice(0, 80)}
          </p>
          <p className="card-price">{produto.preco}</p>
        </div>
      ))}
    </section>
  );
}

export default CardProducts;
