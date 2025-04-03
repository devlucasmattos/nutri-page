import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-name">Dra. Ana Souza</span>
          <span className="logo-title">Nutricionista</span>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Início</a>
          <a href="#about" onClick={closeMenu}>Sobre</a>
          <a href="#services" onClick={closeMenu}>Serviços</a>
          <a href="#contact" onClick={closeMenu}>Contato</a>
          <button className="cta-button">Agendar Consulta</button>
        </nav>

        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
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