// Process.jsx
import React from 'react';
import './Process.css';

export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Agendamento",
      description: "Escolha o tipo de consulta (presencial ou online) e agende seu horário."
    },
    {
      number: "2",
      title: "Análise Completa",
      description: "Avaliação de hábitos alimentares, exames e objetivos durante a consulta."
    },
    {
      number: "3",
      title: "Plano Personalizado",
      description: "Receba um plano alimentar feito especialmente para suas necessidades."
    },
    {
      number: "4",
      title: "Acompanhamento",
      description: "Ajustes periódicos para garantir os melhores resultados."
    }
  ];

  return (
    <section id="process"  className="process-section">
      <div className="process-container">
        <div className="section-header">
          <h2>Como Funciona</h2>
          <div className="section-divider"></div>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}