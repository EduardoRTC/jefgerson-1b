import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/login">LogOut</Link>
        </nav>
      </header>
      <main className="container">
        {children}
      </main>
      <footer>
        <p>&copy; 2023 MyFinance</p>
      </footer>
    </div>
  );
}

export default Layout;
