import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">Dra. Ana Souza</h3>
            <p className="footer-subtitle">Nutricionista Clínica</p>
            <p className="footer-crn">CRN-3 12345</p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Links Rápidos</h4>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact">Contato</a></li>
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

          <div className="footer-newsletter">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="footer-text">Receba dicas de nutrição no seu e-mail.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Seu e-mail" aria-label="Seu e-mail" />
              <button type="submit">Enviar</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dra. Ana Souza. Todos os direitos reservados.</p>
          <div className="footer-legal">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}