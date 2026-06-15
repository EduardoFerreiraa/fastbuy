import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/productsData';

function CardProducts() {
  const navigate = useNavigate();

  return (
    <section className="products-alta">
      {products.map((product) => (
        <div
          key={product.id}
          className="card-alta"
          onClick={() => {
            navigate('/produto', {
              state: product,
            });

            window.scrollTo(0, 0);
          }}
        >
          <h1>{product.categoria}</h1>

          <img src={product.imagem} alt={product.titulo} />

          <p className="product-description">
            {product.descricao.slice(0, 80)}
          </p>
          <p className="card-price">{product.preco}</p>
        </div>
      ))}
    </section>
  );
}

export default CardProducts;
