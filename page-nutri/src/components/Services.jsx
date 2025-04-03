// Services.jsx
import React from 'react';
import './Services.css';

export default function Services() {
  const services = [
    {
      icon: "🏥",
      title: "Consulta Presencial",
      description: "Avaliação completa com análise de exames e elaboração de plano alimentar individualizado.",
      price: "R$ 250,00"
    },
    {
      icon: "💻",
      title: "Consulta Online",
      description: "Atendimento via videoconferência com a mesma qualidade da consulta presencial.",
      price: "R$ 200,00"
    },
    {
      icon: "🍎",
      title: "Plano Alimentar",
      description: "Elaboração de cardápios personalizados considerando suas preferências e rotina.",
      price: "R$ 180,00"
    },
    {
      icon: "📊",
      title: "Acompanhamento Mensal",
      description: "Monitoramento contínuo com ajustes periódicos do plano nutricional.",
      price: "R$ 150,00/mês"
    }
  ];

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
              <div className="service-price">{service.price}</div>
              <button className="text-button">Saiba mais →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}