import React from 'react';

function Beneficios() {
  return (
    <section className="beneficios-content">
      <h1>
        Benefícios que <span>fazem a diferença</span>
      </h1>
      <p>Aqui você compra com segurança, comodidade e as melhores condições</p>
      <div className="beneficios">
        <div className="cards-b">
          <h2>Frete grátis</h2>
          <p>
            Entrega para todo o Brasil <br></br> sem custo adicional.
          </p>
          <div className="arrow">➜</div>
        </div>
        <div className="cards-b">
          <h2>Compra segura</h2>
          <p>
            Seus dados protegidos com <br></br> tecnologia pronta.
          </p>
          <div className="arrow">➜</div>
        </div>
        <div className="cards-b">
          <h2>Parcele em até 12x</h2>
          <p>
            No cartão de crédito <br></br> sem juros.
          </p>
          <div className="arrow">➜</div>
        </div>
        <div className="cards-b">
          <h2>Entrega rápida</h2>
          <p>
            Produtos à pronta entrega <br></br> e envio em até 24h
          </p>
          <div className="arrow">➜</div>
        </div>
      </div>
    </section>
  );
}

export default Beneficios;
