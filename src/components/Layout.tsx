import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <main className="container">
        {children}
      </main>
      <footer>
        <p>&copy; 2023 Gerenciador de Orçamento Pessoal</p>
      </footer>
    </div>
  );
}

export default Layout;
