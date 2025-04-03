// Testimonials.jsx
import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Perdi 12kg em 4 meses sem passar fome! A Dra. Ana mudou minha relação com a comida.",
      author: "Carlos M., 42 anos",
      role: "Paciente desde 2022"
    },
    {
      quote: "Finalmente entendi como me alimentar corretamente. Meus exames melhoraram significativamente.",
      author: "Mariana F., 35 anos",
      role: "Paciente desde 2023"
    },
    {
      quote: "O acompanhamento online foi perfeito para minha rotina. Super recomendo!",
      author: "Ricardo P., 28 anos",
      role: "Paciente desde 2023"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>Depoimentos</h2>
          <div className="section-divider"></div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.author}</p>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}