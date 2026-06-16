import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoFast from '../assets/logo/logo-fast.png';
import heartIcon from '../assets/icons/heart.png';
import shoppingBagIcon from '../assets/icons/shopping-bag.png';

function Header({ cartCount }) {
  const [openMenu, setOpenMenu] = React.useState(null);
  const menuRef = React.useRef(null);

  function toggleOpenMenu(menu) {
    setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
  }

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const location = useLocation();

  return (
    <motion.header
      key={location.pathname}
      id="header"
      initial={{
        opacity: 1,
        y: -12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.54,
        ease: 'easeOut',
      }}
    >
      <div id="header-content">
        <div id="logo-content">
          <a href="index.html">
            <img id="header-logo" src={logoFast} alt="Logo" />
          </a>
          <button id="buscar-cep">Digite o seu CEP</button>
        </div>
        <input type="text" id="busca" placeholder="Busque na Fastbuy" />
        <div className="header-actions">
          <a className="header-actions-item" href="#">
            <img src={heartIcon} alt="Favoritos" />
          </a>

          <a className="header-actions-item cart-item" href="#">
            <img src={shoppingBagIcon} alt="Carrinho" />

            <div className="addCarrinho">
              <p>{cartCount}</p>
            </div>
          </a>
        </div>
      </div>
      <nav className="header-nav">
        <ul ref={menuRef} className="header-ul">
          <li
            onClick={() => toggleOpenMenu('categoria')}
            className={`header-ul-item ${
              openMenu === 'categoria' ? 'active' : ''
            }`}
          >
            Categorias <span>⌄</span>
            {openMenu === 'categoria' && (
              <ul className="dropdown-menu">
                <li>Smartphones</li>
                <li>Informática</li>
                <li>Games</li>
                <li>TV e Áudio</li>
                <li>Eletrodomésticos</li>
                <li>Cozinha</li>
                <li>Quarto</li>
              </ul>
            )}
          </li>

          <li
            onClick={() => toggleOpenMenu('smartphones')}
            className={`header-ul-item ${
              openMenu === 'smartphones' ? 'active' : ''
            }`}
          >
            Smartphones <span>⌄</span>
            {openMenu === 'smartphones' && (
              <ul className="dropdown-menu">
                <li>iPhone</li>
                <li>Samsung</li>
                <li>Xiaomi</li>
                <li>Motorola</li>
              </ul>
            )}
          </li>
          <li
            onClick={() => toggleOpenMenu('informatica')}
            className={`header-ul-item ${
              openMenu === 'informatica' ? 'active' : ''
            }`}
          >
            Informática <span>⌄</span>
            {openMenu === 'informatica' && (
              <ul className="dropdown-menu">
                <li>Notebooks</li>
                <li>Monitores</li>
                <li>Teclados</li>
                <li>Mouse</li>
                <li>Headsets</li>
                <li>Impressoras</li>
                <li>Gabinetes</li>
                <li>SSD e HD</li>
                <li>Memória RAM</li>
                <li>Placa de Vídeo</li>
              </ul>
            )}
          </li>
          <li
            onClick={() => toggleOpenMenu('games')}
            className={`header-ul-item ${openMenu === 'games' ? 'active' : ''}`}
          >
            Games <span>⌄</span>
            {openMenu === 'games' && (
              <ul className="dropdown-menu">
                <li>Consoles</li>
                <li>Jogos</li>
                <li>Controles</li>
                <li>Headsets Gamer</li>
                <li>Cadeiras Gamer</li>
                <li>Teclados Gamer</li>
                <li>Mouse Gamer</li>
                <li>Monitores Gamer</li>
                <li>PlayStation</li>
                <li>Xbox</li>
              </ul>
            )}
          </li>
          <li
            onClick={() => toggleOpenMenu('tv-audio')}
            className={`header-ul-item ${
              openMenu === 'tv-audio' ? 'active' : ''
            }`}
          >
            TV e Áudio <span>⌄</span>
            {openMenu === 'tv-audio' && (
              <ul className="dropdown-menu">
                <li>Smart TVs</li>
                <li>Caixas de Som</li>
                <li>Soundbar</li>
                <li>Fones de Ouvido</li>
                <li>Home Theater</li>
                <li>Projetores</li>
                <li>TV 4K</li>
                <li>TV OLED</li>
                <li>TV QLED</li>
                <li>Acessórios de Áudio</li>
              </ul>
            )}
          </li>
          <li
            onClick={() => toggleOpenMenu('eletrodomesticos')}
            className={`header-ul-item ${
              openMenu === 'eletrodomesticos' ? 'active' : ''
            }`}
          >
            Eletrodomésticos <span>⌄</span>
            {openMenu === 'eletrodomesticos' && (
              <ul className="dropdown-menu">
                <li>Geladeiras</li>
                <li>Micro-ondas</li>
                <li>Máquinas de Lavar</li>
                <li>Fogões</li>
                <li>Cooktops</li>
                <li>Air Fryers</li>
                <li>Liquidificadores</li>
                <li>Cafeteiras</li>
                <li>Ventiladores</li>
                <li>Aspiradores</li>
              </ul>
            )}
          </li>
          <li
            onClick={() => toggleOpenMenu('moveis')}
            className={`header-ul-item ${
              openMenu === 'moveis' ? 'active' : ''
            }`}
          >
            Móveis <span>⌄</span>
            {openMenu === 'moveis' && (
              <ul className="dropdown-menu">
                <li>Sofás</li>
                <li>Guarda-Roupas</li>
                <li>Camas</li>
                <li>Mesas</li>
                <li>Cadeiras</li>
                <li>Painéis para TV</li>
                <li>Escrivaninhas</li>
                <li>Poltronas</li>
                <li>Estantes</li>
                <li>Móveis para Escritório</li>
              </ul>
            )}
          </li>
          <li
            onClick={() => toggleOpenMenu('eletronicos')}
            className={`header-ul-item ${
              openMenu === 'eletronicos' ? 'active' : ''
            }`}
          >
            Eletrônicos <span>⌄</span>
            {openMenu === 'eletronicos' && (
              <ul className="dropdown-menu">
                <li>Smartphones</li>
                <li>Smartwatch</li>
                <li>Tablets</li>
                <li>Fones Bluetooth</li>
                <li>Caixas de Som</li>
                <li>Câmeras</li>
                <li>Drones</li>
                <li>Carregadores</li>
                <li>Cabos e Adaptadores</li>
                <li>Acessórios Tech</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;
