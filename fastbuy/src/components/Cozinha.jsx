import React from 'react';
import geladeira from '../assets/images/geladeira.png';
import fogao from '../assets/images/fogão.png';
import panela from '../assets/images/panela.png';

function Cozinha() {
  return (
    <section className="explore-content">
      <h2>Para sua cozinha</h2>
      <div className="explore">
        <div className="explore-card">
          <img src={geladeira} alt="Geladeira" />
          <div>
            <p>
              Geladeira Frost Free com design moderno e ótimo espaço interno...
            </p>
            <p className="card-price">R$ 10.499,90</p>
          </div>
        </div>
        <div className="explore-card">
          <img src={fogao} alt="Fogão" />
          <div>
            <p>
              Máquina de Lavar Brastemp 14kg com alta capacidade, painel moderno
              e...
            </p>
            <p className="card-price">R$ 899,90</p>
          </div>
        </div>
        <div className="explore-card">
          <img src={panela} alt="Tv Smart Philips" />
          <div>
            <p>
              Fogão 5 bocas com design moderno, forno amplo e ótimo
              desempenho...
            </p>
            <p className="card-price">R$ 2.299,90</p>
          </div>
        </div>
        <div className="explore-card">
          <img src={geladeira} alt="Tv Smart Philips" />
          <div>
            <p>
              Geladeira Frost Free com design moderno e ótimo espaço interno...
            </p>
            <p className="card-price">R$ 559,90</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cozinha;
