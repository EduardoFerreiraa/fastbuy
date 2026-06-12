import React from 'react';

function Cozinha() {
  return (
    <section className="explore-content">
      <h2>Para sua cozinha</h2>
      <div className="explore">
        <div className="explore-card">
          <img src="../assets/images/geladeira.png" alt="Iphone 17 Pro max" />
          <div>
            <p>
              iPhone 17 Pro Max com desempenho avançado, câmera <br></br> de
              alta qualidade, tela ampla e...
            </p>
            <p className="card-price">R$ 10.499,90</p>
          </div>
        </div>
        <div className="explore-card">
          <img src="../assets/images/fogão.png" alt="Monitor 27p AOC" />
          <div>
            <p>
              Máquina de Lavar Brastemp 14kg com alta capacidade, painel moderno
              e...
            </p>
            <p className="card-price">R$ 899,90</p>
          </div>
        </div>
        <div className="explore-card">
          <img src="../assets/images/panela.png" alt="Tv Smart Philips" />
          <div>
            <p>
              Smart TV com tela de alta definição, imagem nítida e <br></br>{' '}
              acesso aos principais...
            </p>
            <p className="card-price">R$ 2.299,90</p>
          </div>
        </div>
        <div className="explore-card">
          <img src="../assets/images/geladeira.png" alt="Tv Smart Philips" />
          <div>
            <p>
              Smartwatch com design moderno, monitoramento de <br></br> saúde,
              notificações...
            </p>
            <p className="card-price">R$ 559,90</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cozinha;
