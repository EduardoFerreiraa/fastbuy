import React from 'react';
import { useNavigate } from 'react-router-dom';
import iphone from '../assets/images/iphone17.png';
import monitor from '../assets/images/monitor27-aoc.png';
import tv from '../assets/images/philips.png';
import smartwatch from '../assets/images/smartwatch.png';
import marquinaDeLavar from '../assets/images/maquina-de-lavar.png';

function Explore() {
  const navigate = useNavigate();

  return (
    <section className="explore-content">
      <h2>Conheça mais</h2>
      <div className="explore">
        <div className="explore-card">
          <img src={iphone} alt="Iphone 16 Pro max" />
          <div>
            <p>
              iPhone 16 Pro Max com desempenho avançado, câmera <br></br> de
              alta qualidade, tela ampla e...
            </p>
            <p className="card-price">R$ 10.499,90</p>
          </div>
        </div>
        <div className="explore-card">
          <img src={monitor} alt="Monitor 27p AOC" />
          <div>
            <p>
              Monitor AOC 27” com tela ampla, imagens nítidas e excelente
              qualidade...
            </p>
            <p className="card-price">R$ 899,90</p>
          </div>
        </div>
        <div className="explore-card">
          <img src={tv} alt="Tv Smart Philips" />
          <div>
            <p>
              Smart TV com tela de alta definição, imagem nítida e <br></br>{' '}
              acesso aos principais...
            </p>
            <p className="card-price">R$ 2.299,90</p>
          </div>
        </div>
        <div className="explore-card">
          <img src={smartwatch} alt="Tv Smart Philips" />
          <div>
            <p>
              Smartwatch com design moderno, monitoramento de <br></br> saúde,
              notificações...
            </p>
            <p className="card-price">R$ 559,90</p>
          </div>
        </div>
        <div className="explore-card">
          <img src={marquinaDeLavar} alt="Máquina de lavar" />
          <div>
            <p>
              Máquina de Lavar Brastemp 14kg com alta capacidade, painel moderno
              e...
            </p>
            <p className="card-price">R$ 2.399,90</p>
          </div>
        </div>
        <div className="explore-card">
          <img src={smartwatch} alt="Tv Smart Philips" />
          <div>
            <p>
              Smartwatch com design moderno, monitoramento de <br></br> saúde,
              notificações...
            </p>
            <p className="card-price">R$ 559,90</p>
          </div>
        </div>
        <div className="explore-card">
          <img src={iphone} alt="Iphone 16 Pro max" />{' '}
          <div>
            <p>
              iPhone 16 Pro Max com desempenho avançado, câmera <br></br> de
              alta qualidade, tela ampla e...
            </p>
            <p className="card-price">R$ 10.499,90</p>
          </div>
        </div>
        <div className="explore-card">
          <img src={tv} alt="Tv Smart Philips" />
          <div>
            <p>
              Smart TV com tela de alta definição, imagem nítida e <br></br>{' '}
              acesso aos principais...
            </p>
            <p className="card-price">R$ 2.299,90</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
