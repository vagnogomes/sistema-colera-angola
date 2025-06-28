import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import CadastroFamilia from './CadastroFamilia';
import CadastroMembro from './CadastroMembro';
import Familias from './Familias';
import DetalhesFamilia from './DetalhesFamilia';
import SensibilizacaoForm from './SensibilizacaoForm';
import RastreioForm from './RastreioForm';
import Relatorios from './Relatorios';
import Calendario from './Calendario';
import Administracao from './Administracao';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/familias" element={<Familias />} />
        <Route path="/familias/cadastro" element={<CadastroFamilia />} />
        <Route path="/membros/cadastro" element={<CadastroMembro />} />
        <Route path="/familias/:id" element={<DetalhesFamilia />} />
        <Route path="/sensibilizacao" element={<SensibilizacaoForm />} />
        <Route path="/rastreio" element={<RastreioForm />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/admin" element={<Administracao />} />
      </Routes>
    </Router>
  );
}

export default App;