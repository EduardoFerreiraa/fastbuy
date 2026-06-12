import React from 'react';
import logo from '../assets/logo/logo-fast.png';
import pix from "../assets/images/pix.png"
import visa from "../assets/images/visa.png"
import boleto from "../assets/images/boleto.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-actions">
        <div className="footer-logo">
          <img id="header-logo" src={logo} alt="Logo" />{' '}
          <p>
            Tecnologia, inovação e os melhores <br></br> produtos para você
            comprar com <br></br> segurança e rapidez.
          </p>
          <p id="siga-nos">Siga-nos</p>
          <div>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
        <div className="atendimento">
          <h3>Links rápidos</h3>
          <div className="links-content">
            <a href="#">Home</a>
            <a href="#">Produtos</a>
            <a href="#">Categorias</a>
            <a href="#">Ofertas</a>
            <a href="#">Lançamentos</a>
            <a href="#">Meus pedidos</a>
            <a href="#">Contato</a>
          </div>
        </div>

        <div className="atendimento">
          <h3>Atendimento</h3>
          <div className="atendimento-content">
            <div className="contact">
              <img src="" alt="" />
              <div>
                <p>(11) 99999-9999</p>
                <p className="contact-text">Seg à Sex - 08 às 18h</p>
              </div>
            </div>
            <div className="contact">
              <img src="" alt="" />
              <div className="contact-text">
                <p>contato@fastbuy.com</p>
                <p className="contact-text">Respondemos em breve</p>
              </div>
            </div>
            <div className="contact">
              <img src="" alt="" />
              <div className="contact-text">
                <p>(11) 99999-9999</p>
                <p className="contact-text">Fale conosco no WhatsApp</p>
              </div>
            </div>
            <div className="contact">
              <img src="" alt="" />
              <div className="contact-text">
                <p>Central de ajuda</p>
                <p className="contact-text">Tire suas dúvidas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pagamento-content">
          <h3>Formas de pagamento</h3>
          <div className="pagamento">
            <div className="card-pagamento">
              <img src={pix} alt="Pix" />
            </div>
            <div className="card-pagamento">
              <img src={boleto} alt="Boleto" />
            </div>
            <div className="card-pagamento">
              <img src={visa} alt="Visa" />
            </div>
            <div className="card-pagamento">
              <img src={pix} alt="Pix" />
            </div>
            <div className="card-pagamento">
              <img src={boleto} alt="Boleto" />
            </div>
            <div className="card-pagamento">
              <img src={visa} alt="Visa" />
            </div>
            <div className="card-pagamento">
              <img src={pix} alt="Pix" />
            </div>
            <div className="card-pagamento">
              <img src={boleto} alt="Boleto" />
            </div>
            <div className="card-pagamento">
              <img src={visa} alt="Visa" />
            </div>
          </div>
        </div>
      </div>
      <div className="beneficios-footer">
        <div className="beneficios-footer-content">
          <p className="beneficios-destaque">Loja confiável</p>
          <p>Compra 100% segura</p>
        </div>
        <div className="beneficios-footer-content">
          <p className="beneficios-destaque">Envio rápido</p>
          <p>Para todo o Brasil</p>
        </div>
        <div className="beneficios-footer-content">
          <p className="beneficios-destaque">Produtos originais</p>
          <p>Garantia de fábrica</p>
        </div>
        <div className="beneficios-footer-content">
          <p className="beneficios-destaque">Parcele em até 12x</p>
          <p>No cartão de crédito</p>
        </div>
      </div>
      <div className="direitos-reservados">
        <p>@ 2026 Fastbuy. Todos os direitos reservados</p>
        <a href="#">Política de privacidade</a>
        <a href="#">Termos de uso</a>
        <a href="#">Trocas e devoluções</a>
      </div>
    </footer>
  );
}

export default Footer;
