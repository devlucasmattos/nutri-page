import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Verifica o tamanho da tela ao carregar e redimensionar
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const closeMenuAndScroll = (e, id) => {
    e.preventDefault();
    if (isMobile) {
      setMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
    
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  const handleAgendarConsulta = () => {
    const phoneNumber = '5553991244320';
    const message = 'Olá Dra. Ana, gostaria de agendar uma consulta! Poderia me informar sobre disponibilidade?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Fecha o menu se estiver em mobile
    if (isMobile) {
      setMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-content">
            <div className="logo-name">Dra. Ana Souza</div>
            <div className="logo-title">Nutricionista Especialista</div>
          </div>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={(e) => closeMenuAndScroll(e, 'home')}>Início</a>
          <a href="#about" onClick={(e) => closeMenuAndScroll(e, 'about')}>Sobre</a>
          <a href="#process" onClick={(e) => closeMenuAndScroll(e, 'process')}>Processo</a>
          <a href="#plans" onClick={(e) => closeMenuAndScroll(e, 'plans')}>Planos</a>
          <a href="#services" onClick={(e) => closeMenuAndScroll(e, 'services')}>Serviços</a>
          <a href="#contact" onClick={(e) => closeMenuAndScroll(e, 'contact')}>Contato</a>
          <button 
            className="cta-button" 
            onClick={handleAgendarConsulta}
          >
            Agendar Consulta
          </button>
        </nav>

        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </div>
    </header>
  );
}