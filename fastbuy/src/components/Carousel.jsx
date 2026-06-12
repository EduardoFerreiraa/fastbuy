import React from 'react';
import banner1 from '../assets/images/banner.png';
import banner2 from '../assets/images/banner2.png';
import banner3 from '../assets/images/banner3.png';
import banner4 from '../assets/images/banner4.png';

function Carousel() {
  const imagens = [banner1, banner2, banner3, banner4];

  const [index, setIndex] = React.useState(0);

  function nextImage() {
    setIndex((prevIndex) =>
      prevIndex === imagens.length - 1 ? 0 : prevIndex + 1,
    );
  }

  function prevImage() {
    setIndex((prevIndex) =>
      prevIndex === 0 ? imagens.length - 1 : prevIndex - 1,
    );
  }

  return (
    <section className="carousel">
      <img
        key={index}
        className="carousel-image"
        src={imagens[index]}
        alt="Banner"
      />

      <button className="arrow-left" onClick={prevImage}>
        ❮
      </button>

      <button className="arrow-right" onClick={nextImage}>
        ❯
      </button>
    </section>
  );
}

export default Carousel;
