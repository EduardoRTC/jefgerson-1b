import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <h1>
        Bem-vindo ao <strong>MyFinance</strong>
      </h1>
      <p>
        O <strong>MyFinance</strong> é a sua plataforma online para gerenciamento
        financeiro pessoal. O objetivo é ajudar você a controlar suas finanças de maneira simples
        e eficaz, fornecendo as ferramentas necessárias para monitorar suas receitas, despesas e
        alcançar suas metas financeiras.
      </p>

      <h2>Como Funciona:</h2>
      <ul>
        <li>
          <strong>Registro de Transações:</strong> Adicione suas receitas e despesas com facilidade,
          mantendo um histórico atualizado de suas movimentações financeiras.
        </li>
        <li>
          <strong>Dashboard Intuitivo:</strong> Acompanhe seu saldo e visualize gráficos que mostram
          sua saúde financeira em tempo real.
        </li>
        <li>
          <strong>Segurança de Dados:</strong> Seus dados são protegidos com os mais altos padrões
          de segurança, garantindo confidencialidade e integridade das informações.
        </li>
      </ul>

      <h2>Por Que Usar o MyFinance?</h2>
      <ul>
        <li>
          <strong>Simplicidade:</strong> Interface amigável e fácil de usar, mesmo para quem não tem
          experiência em finanças.
        </li>
        <li>
          <strong>Acessibilidade:</strong> Acesse sua conta de qualquer lugar e a qualquer momento,
          seja pelo computador ou dispositivo móvel.
        </li>
        <li>
          <strong>Gratuito:</strong> Comece agora mesmo sem nenhum custo e aproveite todos os
          recursos disponíveis.
        </li>
      </ul>

      <h2>Comece Já!</h2>
      <p>
        Assuma o controle de suas finanças e construa um futuro financeiro mais sólido.{' '}
        <a href="/cadastro">Cadastre-se agora</a> e dê o primeiro passo rumo à sua independência
        financeira!
      </p>
    </Layout>
  );
};

export default Home;