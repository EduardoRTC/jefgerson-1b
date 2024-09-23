import { db } from '../firebaseConfig';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';

interface Transacao {
  id: string;
  descricao: string;
  valor: number;
  tipo: 'receita' | 'despesa';
}

interface TransactionsListProps {
  transacoes: Transacao[];
}

function TransactionsList({ transacoes }: TransactionsListProps) {
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [descricao, setDescricao] = useState<string>('');
  const [valor, setValor] = useState<string>('');

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'transacoes', id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (transacao: Transacao) => {
    setIsEditing(transacao.id);
    setDescricao(transacao.descricao);
    setValor(transacao.valor.toString());
  };

  const handleUpdate = async (id: string) => {
    try {
      await updateDoc(doc(db, 'transacoes', id), {
        descricao,
        valor: parseFloat(valor),
      });
      setIsEditing(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Transações</h2>
      <ul>
        {transacoes.map((t: Transacao) => (
          <li key={t.id}>
            {isEditing === t.id ? (
              <>
                <input
                  type="text"
                  value={descricao}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescricao(e.target.value)}
                />
                <input
                  type="number"
                  value={valor}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValor(e.target.value)}
                />
                <button onClick={() => handleUpdate(t.id)}>Salvar</button>
                <button onClick={() => setIsEditing(null)}>Cancelar</button>
              </>
            ) : (
              <>
                {t.descricao}: {t.valor} ({t.tipo})
                <button onClick={() => handleEdit(t)}>Editar</button>
                <button onClick={() => handleDelete(t.id)}>Excluir</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionsList;
