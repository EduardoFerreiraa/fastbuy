import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/productsData';

function Destaques() {
  const navigate = useNavigate();

  const destaquesProducts = products.filter((produto) =>
    produto.secoes.includes('destaques'),
  );

  return (
    <section className="explore-content">
      <h2>Destaques da semana</h2>
      <div className="explore">
        {destaquesProducts.map((produto) => (
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

export default Destaques;
