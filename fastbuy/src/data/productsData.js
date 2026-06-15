import maquinaDeLavar from '../assets/images/maquina-de-lavar.png';
import monitor from '../assets/images/monitor27-aoc.png';
import iphone from '../assets/images/iphone17.png';
import tv from '../assets/images/philips.png';
import smartwatch from '../assets/images/smartwatch.png';

export const products = [
  {
    id: 1,
    categoria: 'Mais vendidos',
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

  {
    id: 2,
    categoria: 'Top da categoria',
    titulo: 'Monitor AOC 27" Full HD',
    avaliacoes: '3.572',
    preco: 'R$ 899,90',
    juros: 'ou 12x de R$ 74,99 sem juros',
    descricao:
      'Monitor AOC 27” com tela ampla, imagens nítidas e excelente qualidade visual para trabalho, estudos e games.',
    imagem: monitor,
    features: [
      'Tela Full HD de 27"',
      'Imagens nítidas e vibrantes',
      'Ideal para trabalho e games',
      'Design moderno e elegante',
    ],
  },

  {
    id: 3,
    categoria: 'Destaques',
    titulo: 'iPhone 16 Pro Max',
    avaliacoes: '5.286',
    preco: 'R$ 10.499,90',
    juros: 'ou 12x de R$ 874,99 sem juros',
    descricao:
      'iPhone 16 Pro Max com desempenho avançado, câmera de alta qualidade, tela ampla e experiência premium.',
    imagem: iphone,
    features: [
      'Tela Super Retina XDR',
      'Câmera Pro de 48MP',
      'Chip A17 de alto desempenho',
      'Bateria de longa duração',
    ],
  },

  {
    id: 4,
    categoria: 'Melhores ofertas',
    titulo: 'Smart TV Philips 55" 4K',
    avaliacoes: '1.783',
    preco: 'R$ 2.299,90',
    juros: 'ou 12x de R$ 191,65 sem juros',
    descricao:
      'Smart TV com imagem 4K, sistema inteligente e acesso a Netflix, YouTube e mais.',
    imagem: tv,
    features: [
      'Tela 4K Ultra HD',
      'Apps de streaming',
      'Cores vibrantes',
      'Som imersivo',
    ],
  },

  {
    id: 5,
    categoria: 'Promoções',
    titulo: 'Smartwatch Ultra Fit Pro',
    avaliacoes: '947',
    preco: 'R$ 559,90',
    juros: 'ou 12x de R$ 46,65 sem juros',
    descricao:
      'Smartwatch com monitoramento de saúde, notificações e bateria de longa duração.',
    imagem: smartwatch,
    features: [
      'Monitoramento cardíaco',
      'Notificações inteligentes',
      'Resistência à água',
      'Bateria duradoura',
    ],
  },
];
