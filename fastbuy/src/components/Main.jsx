import React from 'react';
import Carousel from './Carousel';
import CardProducts from './CardProducts';
import Beneficios from './Beneficios';
import Categorias from './Categorias';
import Explore from './Explore';
import Destaques from './Destaques';
import Cozinha from './Cozinha';

function Main() {
  return (
    <main id="main">
      <Carousel />
      <CardProducts />
      <Beneficios />
      <Categorias />
      <Explore />
      <Destaques />
      <Cozinha />
    </main>
  );
}

export default Main;
