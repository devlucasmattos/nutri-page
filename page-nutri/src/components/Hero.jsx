import React from 'react';
import './Hero.css';

export default function Hero() {
  // Função para redirecionar para o WhatsApp
  const handleAgendarConsulta = () => {
    const phoneNumber = '5553991244320';
    const message = 'Olá Dra. Ana, gostaria de agendar uma consulta!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Função para rolar suavemente até a seção FAQ
  const handleSaibaMais = () => {
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const elementPosition = faqSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (headerHeight + 30);
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Nutrição Personalizada para <span>Sua Saúde</span></h1>
          <p>Planos alimentares individuais que se adaptam ao seu estilo de vida e objetivos.</p>
          <div className="hero-buttons">
            <button className="primary-button" onClick={handleAgendarConsulta}>Agendar Consulta</button>
            <button className="secondary-button" onClick={handleSaibaMais}>Saiba Mais</button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Nutrição saudável"
          />
        </div>
      </div>
    </section>
  );
}