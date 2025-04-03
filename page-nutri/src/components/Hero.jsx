import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Nutrição Personalizada para <span>Sua Saúde</span></h1>
          <p>Planos alimentares individuais que se adaptam ao seu estilo de vida e objetivos.</p>
          <div className="hero-buttons">
            <button className="primary-button">Agendar Consulta</button>
            <button className="secondary-button">Saiba Mais</button>
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