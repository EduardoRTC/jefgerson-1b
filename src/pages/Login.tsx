import { useState } from 'react';
import { auth } from '../firebaseConfig.ts';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isRegistrando, setIsRegistrando] = useState(false);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  const handleEmailSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar. Verifique os dados e tente novamente.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Erro ao fazer login com o Google.');
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistrando ? 'Cadastre-se' : 'Login'}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          isRegistrando ? handleEmailSignUp() : handleEmailLogin();
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
          required
        />
        <button type="submit">{isRegistrando ? 'Cadastrar' : 'Entrar'}</button>
      </form>
      <button onClick={handleGoogleLogin}>Entrar com Google</button>
      <p>
        {isRegistrando ? 'Já tem uma conta?' : 'Não tem uma conta?'}
        <span
          onClick={() => setIsRegistrando(!isRegistrando)}
          className="toggle-link"
        >
          {isRegistrando ? ' Faça login' : ' Cadastre-se'}
        </span>
      </p>
    </div>
  );
}

export default Login;
