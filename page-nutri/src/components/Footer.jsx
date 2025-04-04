import React from 'react';
import './Footer.css';

export default function Footer() {
  // Função para scroll suave igual ao Header
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (headerHeight + 30);
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Função para redirecionar para o WhatsApp
  const handleAgendarConsulta = () => {
    const phoneNumber = '5553991244320';
    const message = 'Olá Dra. Ana, gostaria de agendar uma consulta!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">Dra. Ana Souza</h3>
            <p className="footer-subtitle">Nutricionista Especialista</p>
            <p className="footer-crn">CRN-3 12345</p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Links Rápidos</h4>
            <ul>
              <li><a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>Início</a></li>
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>Sobre</a></li>
              <li><a href="#process" onClick={(e) => handleSmoothScroll(e, 'process')}>Processo</a></li>
              <li><a href="#plans" onClick={(e) => handleSmoothScroll(e, 'plans')}>Planos</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')}>Serviços</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contato</a></li>
            </ul>
          </div>

          <div className="footer-hours">
            <h4 className="footer-heading">Horário de Atendimento</h4>
            <ul>
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 8h às 12h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Agendar Consulta</h4>
            <button 
              className="footer-cta-button"
              onClick={handleAgendarConsulta}
            >
              <i className="whatsapp-icon"></i> Via WhatsApp
            </button>
            <p className="footer-text">Ou ligue: (53) 99124-4320</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dra. Ana Souza. Todos os direitos reservados.</p>
          <div className="footer-legal">
            <a href="#" className="legal-link">Política de Privacidade</a>
            <a href="#" className="legal-link">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}