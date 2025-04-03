import React from 'react';
import './CtaBanner.css';

export default function CtaBanner() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Pronto para transformar sua saúde?</h2>
          <p>Agende sua consulta e dê o primeiro passo para uma vida mais saudável.</p>
          <div className="cta-buttons">
            <button className="cta-primary">Agendar Consulta</button>
            <button className="cta-secondary">Fale no WhatsApp</button>
          </div>
        </div>
      </div>
    </section>
  );
}