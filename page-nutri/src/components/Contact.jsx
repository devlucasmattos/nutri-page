import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = '5553991244320';
    const whatsappMessage = `Olá Dra. Ana, gostaria de entrar em contato!
    
Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone}
Mensagem: ${formData.message}

Aguardo seu retorno!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset do formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2>Entre em Contato</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Estou disponível para tirar suas dúvidas e agendar consultas</p>
        </div>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="Seu nome completo" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="seu@email.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                placeholder="(00) 00000-0000" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea 
                id="message" 
                name="message"
                rows="5" 
                placeholder="Como posso te ajudar?"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="primary-button">
              Enviar Mensagem
            </button>
          </form>

          <div className="contact-info">
            <h3>Informações de Contato</h3>
            
            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"/>
                </svg>
              </div>
              <div>
                <p className="info-label">E-mail</p>
                <p className="info-text">contato@dranasouza.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 16.42v3.536a1 1 0 01-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 015.044 3h3.536a1 1 0 011 .898c.027.295.045.592.045.89C9.625 8.849 11.711 11 14.5 11c.278 0 .558.015.835.045a1 1 0 01.898 1l-.027 3.536a1 1 0 01-.68.939l-2.669.89a1 1 0 01-1.262-1.262l.89-2.669a1 1 0 01.939-.68c.311-.02.625-.034.939-.034 1.855 0 3.6.707 4.914 1.992A6.921 6.921 0 0121 16.42z"/>
                </svg>
              </div>
              <div>
                <p className="info-label">Telefone</p>
                <p className="info-text">(53) 99124-4320</p>
                <p className="info-text">Atendimento por WhatsApp</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 20.9l4.95-4.95a7 7 0 10-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1112.728 0L12 23.728zM12 13a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z"/>
                </svg>
              </div>
              <div>
                <p className="info-label">Endereço</p>
                <p className="info-text">Av. Paulista, 1000</p>
                <p className="info-text">São Paulo/SP - 01310-100</p>
              </div>
            </div>
            
            <div className="contact-social">
              <h4>Redes Sociais</h4>
              <div className="social-icons">
                <a 
                  href="https://www.instagram.com/draanasouza.nutri" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon" 
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/draanasouza.nutricionista" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon" 
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}