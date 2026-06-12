import React from 'react';

function CardProducts() {
  return (
    <section className="products-alta">
      <div className="card-alta">
        <h1>Mais vendidos</h1>
        <img
          src="../assets/images/maquina-de-lavar.png"
          alt="Máquina de lavar"
        />
        <p>
          Máquina de Lavar Brastemp 14kg com alta capacidade, painel moderno
          e...
        </p>
        <p className="card-price">R$ 2.399,90</p>
      </div>
      <div className="card-alta">
        <h1>Top da categoria</h1>
        <img src="../assets/images/monitor27-aoc.png" alt="Monitor 27p AOC" />
        <p>
          Monitor AOC 27” com tela ampla, imagens nítidas e excelente
          qualidade...
        </p>
        <p className="card-price">R$ 899,90</p>
      </div>
      <div className="card-alta">
        <h1>Destaques</h1>
        <img src="../assets/images/iphone17.png" alt="Iphone 17 Pro max" />
        <p>
          iPhone 17 Pro Max com <br></br> desempenho avançado, câmera <br></br>{' '}
          de alta qualidade, tela ampla e...
        </p>
        <p className="card-price">R$ 10.499,90</p>
      </div>
      <div className="card-alta">
        <h1>Melhores ofertas</h1>
        <img src="../assets/images/philips.png" alt="Tv Smart Philips" />
        <p>
          Smart TV com tela de alta <br></br> definição, imagem nítida e{' '}
          <br></br> acesso aos principais...
        </p>
        <p className="card-price">R$ 2.299,90</p>
      </div>
      <div className="card-alta">
        <h1>Promoções</h1>
        <img src="../assets/images/smartwatch.png" alt="Tv Smart Philips" />
        <p>
          Smartwatch com design <br></br> moderno, monitoramento de <br></br>{' '}
          saúde, notificações...
        </p>
        <p className="card-price">R$ 559,90</p>
      </div>
    </section>
  );
}

export default CardProducts;
