import { useState } from 'react';
import { db, auth } from '../firebaseConfig.js';
import { addDoc, collection } from 'firebase/firestore';

function ExpenseForm() {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (parseFloat(valor) <= 0 || !descricao) return;

    try {
      await addDoc(collection(db, 'transacoes'), {
        uid: auth.currentUser.uid,
        descricao,
        valor: parseFloat(valor),
        tipo: 'despesa',
      });
      setDescricao('');
      setValor('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Despesa</h2>
      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição"
        required
      />
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Valor"
        required
      />
      <button type="submit">Adicionar Despesa</button>
    </form>
  );
}

export default ExpenseForm;
