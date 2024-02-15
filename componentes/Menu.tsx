
import Link from 'next/link';
import React from 'react';

export const Menu: React.FC = () => { 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link className="nav-link" href="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" href="/LivroLista">Catálogo</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" href="/LivroDados">Novo</Link>
        </li>
        </ul>
    </nav>
  );
};

