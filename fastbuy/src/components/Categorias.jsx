import React from 'react';
import smartphone from '../assets/images/smartphone-categoria.png';
import notebook from '../assets/images/notebook-categoria.png';
import smartwatch from '../assets/images/smartwatch-categoria.png';
import controle from '../assets/images/controle-categoria.png';
import tv from '../assets/images/tv-categoria.png';

function Categorias() {
  return (
    <section className="categoria-content">
      <h2>Escolha sua categoria</h2>
      <div className="categoria">
        <div className="card-categoria">
          <img src={smartphone} alt="Smartphone" />
          <p>Smartphones</p>
          <div className="arrow">➜</div>
        </div>
        <div className="card-categoria">
          <img src={notebook} alt="Notebook" />
          <p>Notebooks</p>
          <div className="arrow">➜</div>
        </div>
        <div className="card-categoria">
          <img src={tv} alt="Tv Smart" />
          <p>TVs</p>
          <div className="arrow">➜</div>
        </div>
        <div className="card-categoria">
          <img src={smartwatch} alt="Smartwatch" />
          <p>Smartwatch</p>
          <div className="arrow">➜</div>
        </div>

        <div className="card-categoria">
          <img src={controle} alt="Controle" />
          <p>Games</p>
          <div className="arrow">➜</div>
        </div>
        <div className="card-categoria">
          <img src={tv} alt="Monitores" />
          <p>Monitores</p>
          <div className="arrow">➜</div>
        </div>
      </div>
    </section>
  );
}

export default Categorias;
