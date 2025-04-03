import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Entre em Contato</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-content">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Seu nome completo" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="seu@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" rows="5" placeholder="Como posso te ajudar?"></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar Mensagem</button>
          </form>

          <div className="contact-info">
            <h3>Informações de Contato</h3>
            
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <p className="info-label">Telefone</p>
                <p className="info-text">(11) 99999-9999</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <p className="info-label">E-mail</p>
                <p className="info-text">contato@dranasouza.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <p className="info-label">Endereço</p>
                <p className="info-text">Av. Paulista, 1000 - São Paulo/SP</p>
              </div>
            </div>
            
            <div className="contact-social">
              <h4>Redes Sociais</h4>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Instagram">📱</a>
                <a href="#" className="social-icon" aria-label="Facebook">📷</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}