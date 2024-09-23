import { db } from '../firebaseConfig';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';

function TransactionsList({ transacoes }) {
  const [isEditing, setIsEditing] = useState(null);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'transacoes', id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (transacao) => {
    setIsEditing(transacao.id);
    setDescricao(transacao.descricao);
    setValor(transacao.valor);
  };

  const handleUpdate = async (id) => {
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
        {transacoes.map((t) => (
          <li key={t.id}>
            {isEditing === t.id ? (
              <>
                <input
                  type="text"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
                <input
                  type="number"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
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
