import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Como funciona a consulta nutricional online?",
      answer: "As consultas online são realizadas por videochamada em horário agendado. Antes da consulta, você receberá um formulário para preencher com suas informações de saúde, hábitos alimentares e objetivos. Durante a sessão, analisaremos esses dados juntos e criaremos um plano alimentar personalizado."
    },
    {
      question: "Quanto tempo dura o processo de acompanhamento nutricional?",
      answer: "O tempo varia conforme seus objetivos. Para mudanças de hábitos e manutenção da saúde, recomendamos no mínimo 3 meses. Para casos específicos como emagrecimento ou ganho de massa muscular, o acompanhamento pode durar de 6 meses a 1 ano. Oferecemos planos mensais, trimestrais e semestrais."
    },
    {
      question: "Você atende casos específicos como diabetes ou hipertensão?",
      answer: "Sim, sou especializada em nutrição clínica e atendo casos de diabetes, hipertensão, dislipidemias, síndrome metabólica e outras condições. Nesses casos, trabalhamos em conjunto com seu médico para otimizar seus resultados."
    },
    {
      question: "Os planos alimentares são muito restritivos?",
      answer: "Não acredito em dietas restritivas. Meu foco é na reeducação alimentar, adaptando o plano à sua rotina, preferências e cultura alimentar. A ideia é que você consiga manter as mudanças a longo prazo, sem sofrimento."
    },
    {
      question: "Como é feito o acompanhamento entre as consultas?",
      answer: "Ofereço suporte contínuo via WhatsApp para tirar dúvidas e ajustar o plano quando necessário. Também realizamos check-ins semanais para monitorar sua evolução e fazer os ajustes necessários no seu plano alimentar."
    }
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Perguntas Frequentes</h2>
        <p className="faq-subtitle">Tire suas dúvidas sobre nutrição e meu método de trabalho</p>
        
        <div className="faq-items">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;