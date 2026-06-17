import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/productsData';

function Cozinha() {
  const navigate = useNavigate();

  const cozinhaProducts = products.filter((produto) =>
    produto.secoes.includes('cozinha'),
  );

  return (
    <section className="explore-content">
      <h2>Para sua cozinha</h2>
      <div className="explore">
        {cozinhaProducts.map((produto) => (
          <div
            key={produto.id}
            className="explore-card"
            onClick={() => {
              navigate(`/produto/${produto.id}`, {
                state: produto,
              });

              window.scrollTo(0, 0);
            }}
          >
            <img src={produto.imagem} alt={produto.titulo} />
            <div>
              <p>{produto.descricao}</p>
              <p className="card-price">{produto.preco}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cozinha;
