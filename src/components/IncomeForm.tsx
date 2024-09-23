import { useState } from 'react';
import { db, auth } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

function IncomeForm() {
  const [descricao, setDescricao] = useState<string>('');
  const [valor, setValor] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseFloat(valor) <= 0 || !descricao) return;

    try {
      if (auth.currentUser) {
        await addDoc(collection(db, 'transacoes'), {
          uid: auth.currentUser.uid,
          descricao,
          valor: parseFloat(valor),
          tipo: 'receita',
        });
        setDescricao('');
        setValor('');
      } else {
        console.error('Usuário não autenticado');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Receita</h2>
      <input
        type="text"
        value={descricao}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescricao(e.target.value)}
        placeholder="Descrição"
        required
      />
      <input
        type="number"
        value={valor}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValor(e.target.value)}
        placeholder="Valor"
        required
      />
      <button type="submit">Adicionar Receita</button>
    </form>
  );
}

export default IncomeForm;
