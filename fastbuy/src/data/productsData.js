import maquinaDeLavar from '../assets/images/maquina-de-lavar.png';
import monitor from '../assets/images/monitor27-aoc.png';
import iphone from '../assets/images/iphone17.png';
import tv from '../assets/images/philips.png';
import smartwatch from '../assets/images/smartwatch.png';
import painelTv from '../assets/images/painel.png';
import poltronas from '../assets/images/poltronas.png';
import tablet from '../assets/images/tablet.png';
import notebook from '../assets/images/notebook.png';
import fone from '../assets/images/fone.png';
import travesseiro from '../assets/images/travesseiro.png';
import controlePs5 from '../assets/images/controle.png';

export const products = [
  {
    id: 1,
    categoria: 'Mais vendidos',
    secoes: ['card-products', 'explore'],
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
    secoes: ['card-products', 'explore'],
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
    categoria: 'smartphones',
    secoes: ['card-products', 'explore'],
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
    secoes: ['card-products', 'explore'],
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
    secoes: ['card-products', 'explore'],
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

  {
    id: 6,
    categoria: 'Tablets',
    secoes: ['explore', 'tecnologia'],
    titulo: 'Tablet Samsung Galaxy Tab S10 Lite 128GB',
    avaliacoes: '2.843',
    preco: 'R$ 2.199,90',
    juros: 'ou 12x de R$ 183,32 sem juros',
    descricao:
      'Tablet Samsung Galaxy Tab S10 Lite com tela ampla de 10.9”, desempenho rápido, caneta inclusa e capa protetora para produtividade, estudos e entretenimento.',
    imagem: tablet,
    features: [
      'Tela de 10.9" Full HD',
      '6GB RAM + 128GB',
      'Caneta S Pen inclusa',
      'Processador Exynos 1380',
    ],
  },

  {
    id: 7,
    categoria: 'Sala de estar',
    secoes: ['explore', 'moveis'],
    titulo: 'Painel para TV até 55" Caemmun Black 19 SE',
    avaliacoes: '1.284',
    preco: 'R$ 489,90',
    juros: 'ou 12x de R$ 40,82 sem juros',
    descricao:
      'Painel moderno para TV de até 55 polegadas com design elegante, acabamento sofisticado e nichos para decoração e eletrônicos.',
    imagem: painelTv,
    features: [
      'Compatível com TV até 55"',
      'Design moderno e elegante',
      'Espaço para eletrônicos',
      'Acabamento resistente',
    ],
  },

  {
    id: 8,
    categoria: 'Decoração',
    secoes: ['explore', 'casa'],
    titulo: 'Kit 2 Poltronas Decorativas Alice Suede',
    avaliacoes: '3.192',
    preco: 'R$ 799,90',
    juros: 'ou 12x de R$ 66,65 sem juros',
    descricao:
      'Kit com 2 poltronas decorativas confortáveis em tecido suede, ideais para sala, recepção, consultório, salão de beleza e escritório.',
    imagem: poltronas,
    features: [
      'Tecido suede macio',
      'Design elegante e confortável',
      'Ideal para sala e escritório',
      'Estrutura resistente',
    ],
  },

  {
    id: 9,
    categoria: 'Tecnologia',
    secoes: ['destaques'],
    titulo: 'Notebook Lenovo IdeaPad 15.6" Ryzen 7',
    avaliacoes: '4.731',
    preco: 'R$ 3.899,90',
    juros: 'ou 12x de R$ 324,99 sem juros',
    descricao:
      'Notebook Lenovo IdeaPad com processador Ryzen 7, tela Full HD de 15.6 polegadas, SSD rápido e excelente desempenho para trabalho, estudos e entretenimento.',
    imagem: notebook,
    features: [
      'Processador Ryzen 7',
      'Tela Full HD 15.6"',
      'SSD de alta velocidade',
      'Ideal para estudos e trabalho',
    ],
  },

  {
    id: 10,
    categoria: 'Tecnologia',
    secoes: ['destaques'],
    titulo: 'Fone Bluetooth JBL Wave Buds',
    avaliacoes: '5.128',
    preco: 'R$ 289,90',
    juros: 'ou 12x de R$ 24,15 sem juros',
    descricao:
      'Fone Bluetooth JBL Wave Buds com som potente, bateria de longa duração, conexão rápida e encaixe confortável para o dia a dia.',
    imagem: fone,
    features: [
      'Som JBL Pure Bass',
      'Bluetooth de conexão rápida',
      'Bateria duradoura',
      'Design confortável e leve',
    ],
  },

  {
    id: 11,
    categoria: 'Casa',
    secoes: ['destaques'],
    titulo: 'Travesseiro Ortobom Toque Macio',
    avaliacoes: '2.914',
    preco: 'R$ 79,90',
    juros: 'ou 12x de R$ 6,65 sem juros',
    descricao:
      'Travesseiro Ortobom com toque macio e confortável, ideal para noites de sono mais relaxantes e suporte adequado para a cabeça e pescoço.',
    imagem: travesseiro,
    features: [
      'Toque extremamente macio',
      'Conforto para o pescoço',
      'Material respirável',
      'Ideal para uso diário',
    ],
  },

  {
    id: 12,
    categoria: 'Games',
    secoes: ['destaques'],
    titulo: 'Controle Sem Fio DualSense PS5 Branco',
    avaliacoes: '6.482',
    preco: 'R$ 429,90',
    juros: 'ou 12x de R$ 35,82 sem juros',
    descricao:
      'Controle sem fio DualSense para PS5 com resposta tátil imersiva, gatilhos adaptáveis e design ergonômico para uma experiência de jogo mais realista.',
    imagem: controlePs5,
    features: [
      'Resposta tátil imersiva',
      'Gatilhos adaptáveis',
      'Conexão sem fio Bluetooth',
      'Design ergonômico confortável',
    ],
  },
];
