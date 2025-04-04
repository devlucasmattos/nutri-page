import React from 'react';
import './Plans.css';

const Plans = () => {
  return (
    <section id="plans" className="plans-section">
      <div className="plans-header">
        <h2>Escolha o plano ideal para você</h2>
        <p>O plano ideal é aquele que se encaixa perfeitamente na sua rotina.</p>
      </div>

      <div className="plans-container">
        {/* Plano Gold */}
        <div className="plan-card gold">
          <div className="plan-header">
            <h3>Plano Gold</h3>
            <p className="duration">12 Meses de Consultoria Online</p>
          </div>
          <ul className="plan-features">
            <li>✅ Consultas: 6 teleconsultas ou presenciais em Vila Velha-ES para esclarecer dúvidas e planejamento.</li>
            <li>✅ Bônus de Consultas: +6 teleconsultas ou presenciais em Vila Velha-ES, como bônus ao aceitar durante a sessão estratégica gratuita</li>
            <li>✅ Materiais de Suporte: E-books como bônus ao aceitar durante a sessão estratégica gratuita.</li>
            <li>✅ Orientações: Ajuda com protocolos hormonais, fitoterápicos e suplementação como bônus ao aceitar a proposta.</li>
            <li>✅ Check-ins: Acompanhamento semanal para ajustes e suporte.</li>
            <li>✅ Plano Alimentar: Prescrição entregue na primeira consulta.</li>
            <li>✅ Treinos Personalizados: 6 treinos adaptados às suas necessidades.</li>
            <li>✅ Aplicativos: Apps de dieta e treino com vídeos explicativos e espaço para anotações.</li>
            <li>✅ Correção de Exercícios: Suporte dedicado para correção e orientações.</li>
            <li>✅ WhatsApp: Suporte 24h, todos os dias.</li>
          </ul>
          <button className="plan-button gold-btn">Quero começar</button>
        </div>

        {/* Plano Silver */}
        <div className="plan-card silver">
          <div className="plan-header">
            <h3>Plano Silver</h3>
            <p className="duration">6 Meses de Consultoria Online</p>
          </div>
          <ul className="plan-features">
            <li>✅ Consultas: 3 teleconsultas ou presenciais em Vila Velha-ES para esclarecer dúvidas e planejamento.</li>
            <li>✅ Bônus de Consultas: +3 teleconsultas ou presenciais como bônus ao aceitar durante a sessão estratégica gratuita.</li>
            <li>✅ Materiais de Suporte: E-books como bônus ao aceitar durante a sessão estratégica gratuita.</li>
            <li>✅ Orientações: Ajuda com protocolos hormonais, fitoterápicos e suplementação como bônus ao aceitar a proposta.</li>
            <li>✅ Check-ins: Acompanhamento semanal para ajustes e suporte.</li>
            <li>✅ Plano Alimentar: Prescrição entregue na primeira consulta.</li>
            <li>✅ Treinos Personalizados: 3 treinos adaptados às suas necessidades.</li>
            <li>✅ Aplicativos: Apps de dieta e treino com vídeos explicativos e espaço para anotações.</li>
            <li>✅ Correção de Exercícios: Suporte dedicado para correção e orientações.</li>
            <li>✅ WhatsApp: Suporte 24h, todos os dias.</li>
          </ul>
          <button className="plan-button silver-btn">Quero começar</button>
        </div>

        {/* Plano Econômico */}
        <div className="plan-card economy">
          <div className="plan-header">
            <h3>Plano Econômico somente dieta</h3>
            <p className="duration">3 Meses de Consultoria Online</p>
            <div className="exclusive-tag">exclusivo</div>
          </div>
          <ul className="plan-features">
            <li>✅ Consultas: 2 teleconsultas ou presenciais em Vila Velha-ES para esclarecer dúvidas e planejamento.</li>
            <li>✅ Materiais de Suporte: E-books como bônus ao aceitar durante a sessão estratégica gratuita.</li>
            <li>✅ Orientações: Ajuda com protocolos hormonais, fitoterápicos e suplementação como bônus ao aceitar a proposta.</li>
            <li>✅ Check-ins: Acompanhamento semanal para ajustes e suporte.</li>
            <li>✅ Plano Alimentar: Prescrição entregue na primeira consulta.</li>
            <li>✅ Apps de dieta com funcionalidades úteis.</li>
            <li>✅ WhatsApp: Suporte 24h, todos os dias.</li>
          </ul>
          <button className="plan-button economy-btn">Quero começar</button>
        </div>
      </div>
    </section>
  );
};

export default Plans;