import { useState, useEffect } from 'react';
import { db, auth } from '../firebaseConfig';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import IncomeForm from '../components/IncomeForm';
import ExpenseForm from '../components/ExpenseForm';
import TransactionsList from '../components/TransactionsList';
import Layout from '../components/Layout';

function Dashboard() {
  const [transacoes, setTransacoes] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, 'transacoes'),
        where('uid', '==', user.uid)
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const trans = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setTransacoes(trans);
      });
      return () => unsubscribe();
    }
  }, [user]);

  const totalReceitas = transacoes
    .filter((t) => t.tipo === 'receita')
    .reduce((acc, curr) => acc + curr.valor, 0);

  const totalDespesas = transacoes
    .filter((t) => t.tipo === 'despesa')
    .reduce((acc, curr) => acc + curr.valor, 0);

  const saldo = totalReceitas - totalDespesas;

  return (
    <Layout>
      <h1>Dashboard</h1>
      <div className="summary">
        <div>
          <h3>Total de Receitas</h3>
          <p>{totalReceitas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
        <div>
          <h3>Total de Despesas</h3>
          <p>{totalDespesas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
        <div>
          <h3>Saldo</h3>
          <p>{saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
      </div>

      <div className="forms">
        <IncomeForm />
        <ExpenseForm />
      </div>

      <TransactionsList transacoes={transacoes} />
    </Layout>
  );
}

export default Dashboard;
