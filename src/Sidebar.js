import React from 'react';

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/familias">Famílias</a></li>
        <li><a href="/administracao">Administração</a></li>
      </ul>
    </nav>
  );
}
