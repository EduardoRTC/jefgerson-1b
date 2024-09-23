
import React from 'react';
import Layout from '../components/Layout';

const Sobre: React.FC = () => {
  return (
    <Layout>
      <h1>Sobre Nós</h1>
      <p>
        O <strong>MyFinance</strong> nasceu da visão de que todos merecem ter
        controle total sobre suas finanças pessoais.
      </p>

      <h2>Nossa Missão</h2>
      <p>
        Ajudar as pessoas a tomarem decisões financeiras informadas, proporcionando uma plataforma
        que:
      </p>
      <ul>
        <li>Facilite o acompanhamento de receitas e despesas.</li>
        <li>Promova hábitos financeiros saudáveis.</li>
        <li>Ajude na realização de objetivos financeiros pessoais.</li>
      </ul>

      <h2>Quem Somos</h2>
      <ul>
        <li>
          <strong>Eduardo Carvalho:</strong> Engenheiro de software.
        </li>
      </ul>

      <p>
        <em>
          Obrigado por escolher o MyFinance. Juntos, vamos construir um futuro
          financeiro melhor!
        </em>
      </p>
    </Layout>
  );
};

export default Sobre;
