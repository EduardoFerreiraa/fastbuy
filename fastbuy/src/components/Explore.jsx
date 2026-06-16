import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/productsData';

function Explore() {
  const navigate = useNavigate();

  const exploreProducts = products.filter((produto) =>
    produto.secoes.includes('explore'),
  );

  return (
    <section className="explore-content">
      <h2>Conheça mais</h2>
      <div className="explore">
        {exploreProducts.map((produto) => (
          <div
            key={produto.id}
            className="explore-card"
            onClick={() => {
              navigate('/produto', {
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

export default Explore;
