import React from 'react';
import { useNavigate } from 'react-router-dom';
import maquinaDeLavar from '../assets/images/maquina-de-lavar.png';
import monitor from '../assets/images/monitor27-aoc.png';
import iphone from '../assets/images/iphone17.png';
import tv from '../assets/images/philips.png';
import smartwatch from '../assets/images/smartwatch.png';

function CardProducts() {
  const navigate = useNavigate();

  return (
    <section className="products-alta">
      <div
        className="card-alta"
        onClick={() => {
          navigate('/produto', {
            state: {
              titulo: 'Máquina de Lavar Brastemp 14kg',
              avaliacoes: '2.117',
              preco: 'R$ 2.399,90',
              juros: 'ou 12x de R$ 199,99 sem juros',
              descricao:
                'Máquina de Lavar Brastemp 14kg com alta capacidade, lavagem eficiente e diversos programas para cuidar das roupas com praticidade, economia e excelente desempenho no dia a dia.',
              imagem: maquinaDeLavar,
              features: [
                'Capacidade de 14kg',
                'Múltiplos ciclos de lavagem',
                'Economia de água e energia',
                'Painel digital intuitivo',
              ],
            },
          });
          window.scrollTo(0, 0);
        }}
      >
        <h1>Mais vendidos</h1>
        <img src={maquinaDeLavar} alt="Máquina de lavar" />
        <p>Máquina de Lavar Brastemp 14kg com alta capacidade...</p>
        <p className="card-price">R$ 2.399,90</p>
      </div>
      <div
        className="card-alta"
        onClick={() => {
          navigate('/produto', {
            state: {
              titulo: 'Monitor AOC 27" Full HD',
              avaliacoes: '3.572',
              preco: 'R$ 899,90',
              juros: 'ou 12x de R$ 74,99 sem juros',
              descricao:
                'Monitor AOC 27” com tela ampla, imagens nítidas e excelente qualidade visual, ideal para estudos, trabalho, games e entretenimento com maior conforto e imersão.',
              imagem: monitor,
              features: [
                'Tela Full HD de 27"',
                'Imagens nítidas e vibrantes',
                'Ideal para trabalho e games',
                'Design moderno e elegante',
              ],
            },
          });
          window.scrollTo(0, 0);
        }}
      >
        <h1>Top da categoria</h1>
        <img src={monitor} alt="Monitor 27p AOC" />
        <p>
          Monitor AOC 27” com tela ampla, imagens nítidas e excelente
          qualidade...
        </p>
        <p className="card-price">R$ 899,90</p>
      </div>
      <div
        className="card-alta"
        onClick={() => {
          navigate('/produto', {
            state: {
              titulo: 'iPhone 16 Pro Max',
              preco: 'R$ 10.499,90',
              avaliacoes: '5.286',
              descricao:
                'iPhone 16 Pro Max com desempenho avançado, câmera de alta qualidade, tela ampla e experiência premium.',
              imagem: iphone,
              features: [
                'Tela Super Retina XDR',
                'Câmera Pro de 48MP',
                'Resistência à água e poeira (IP68)',
                'Bateria de longa duração',
              ],
            },
          });

          window.scrollTo(0, 0);
        }}
      >
        <h1>Destaques</h1>
        <img src={iphone} alt="Iphone 17 Pro max" />
        <p>
          iPhone 17 Pro Max com <br></br> desempenho avançado, câmera <br></br>{' '}
          de alta qualidade, tela ampla e...
        </p>
        <p className="card-price">R$ 10.499,90</p>
      </div>
      <div
        className="card-alta"
        onClick={() => {
          navigate('/produto', {
            state: {
              titulo: 'Smart TV Philips 55" 4K',
              avaliacoes: '1.783',
              preco: 'R$ 2.299,90',
              juros: 'ou 12x de R$ 191,65 sem juros',
              descricao:
                'Smart TV Philips com tela de alta definição, imagem nítida, sistema inteligente e acesso aos principais aplicativos de streaming como Netflix, YouTube e Prime Video.',
              imagem: tv,
              features: [
                'Tela 4K Ultra HD',
                'Acesso aos principais apps de streaming',
                'Imagem nítida e cores vibrantes',
                'Som imersivo de alta qualidade',
              ],
            },
          });
          window.scrollTo(0, 0);
        }}
      >
        <h1>Melhores ofertas</h1>
        <img src={tv} alt="Tv Smart Philips" />
        <p>
          Smart TV com tela de alta <br></br> definição, imagem nítida e{' '}
          <br></br> acesso aos principais...
        </p>
        <p className="card-price">R$ 2.299,90</p>
      </div>
      <div
        className="card-alta"
        onClick={() => {
          navigate('/produto', {
            state: {
              titulo: 'Smartwatch Ultra Fit Pro',
              avaliacoes: '947',
              preco: 'R$ 559,90',
              juros: 'ou 12x de R$ 46,65 sem juros',
              descricao:
                'Smartwatch com design moderno, monitoramento de saúde, notificações inteligentes, resistência à água e bateria de longa duração para acompanhar sua rotina.',
              imagem: smartwatch,
              features: [
                'Monitoramento cardíaco',
                'Recebe notificações',
                'Resistente à água',
                'Bateria de longa duração',
              ],
            },
          });
          window.scrollTo(0, 0);
        }}
      >
        <h1>Promoções</h1>
        <img src={smartwatch} alt="Smartwatch" />
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
