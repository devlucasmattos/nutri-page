import React from 'react';
import './Services.css';

export default function Services() {
  const services = [
    {
      icon: "🏥",
      title: "Consulta Presencial",
      description: "Avaliação completa com análise de exames e elaboração de plano alimentar individualizado.",
      whatsappMessage: "Olá Dra. Ana, gostaria de saber mais sobre a Consulta Presencial!"
    },
    {
      icon: "💻",
      title: "Consulta Online",
      description: "Atendimento via videoconferência com a mesma qualidade da consulta presencial.",
      whatsappMessage: "Olá Dra. Ana, tenho interesse na Consulta Online, pode me informar mais detalhes?"
    },
    {
      icon: "🍎",
      title: "Plano Alimentar",
      description: "Elaboração de cardápios personalizados considerando suas preferências e rotina.",
      whatsappMessage: "Dra. Ana, gostaria de conhecer melhor seu serviço de Plano Alimentar Personalizado"
    },
    {
      icon: "📊",
      title: "Acompanhamento Mensal",
      description: "Monitoramento contínuo com ajustes periódicos do plano nutricional.",
      whatsappMessage: "Oi Dra. Ana, quero informações sobre o Acompanhamento Mensal de nutrição"
    }
  ];

  const handleWhatsAppClick = (message) => {
    const phoneNumber = '5553991244320';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="section-header">
          <h2>Nossos Serviços</h2>
          <div className="section-divider"></div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button 
                className="text-button"
                onClick={() => handleWhatsAppClick(service.whatsappMessage)}
              >
                Saiba mais →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}