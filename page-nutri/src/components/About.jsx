import React from 'react';
import './About.css';

export default function About() {
  // Função para redirecionar para a seção de credenciais
  const handleVerCredenciais = () => {
    const credentialsSection = document.getElementById('credentials');
    if (credentialsSection) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const elementPosition = credentialsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (headerHeight + 30);
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2>Sobre a Dra. Ana Souza</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>CRN-3 12345 | Especialista em Nutrição Clínica</h3>
            <p>
              Formada pela Universidade de São Paulo (USP) com especialização em Nutrição 
              Clínica Funcional e pós-graduação em Obesidade e Emagrecimento. Atuo há mais 
              de 10 anos ajudando pacientes a alcançarem seus objetivos de saúde através de 
              uma abordagem humanizada e baseada em evidências científicas.
            </p>
            
            <ul className="about-features">
              <li>Atendimento personalizado</li>
              <li>Sem dietas restritivas</li>
              <li>Acompanhamento contínuo</li>
              <li>Foco em saúde integral</li>
            </ul>
            
            
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              alt="Dra. Ana Souza"
            />
          </div>
        </div>
      </div>
    </section>
  );
}