import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig.ts';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
