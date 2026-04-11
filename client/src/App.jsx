import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pags/Landing';
import LogIn from './pags/LogIn';
import LogOut from './pags/LogOut';
import Recuperar from './pags/Recuperar';
import Dashboard from './pags/Dashboard';
import Perfil from './pags/Perfil';
import Mentores from './pags/Mentores';
import Preguntas from './pags/Preguntas';
import Mapa from './pags/Mapa';
import Foro from './pags/Foro';
import Buscar from './pags/Buscar';
import Actividades from './pags/Actividades';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/Logout" element={ <LogOut /> } />
        <Route path="/Recuperar" element={ <Recuperar /> } />
        <Route path="/Dashboard" element={ <Dashboard /> } />
        <Route path="/Perfil" element={ <Perfil /> } />
        <Route path="/Mentores" element={ <Mentores /> } />
        <Route path="/Preguntas" element={ <Preguntas /> } />
        <Route path="/Mapa" element={ <Mapa /> } />
        <Route path="/Foro" element={ <Foro /> } />
        <Route path="/Buscar" element={ <Buscar /> } />
        <Route path="/Actividades" element={ <Actividades /> } />
      </Routes>
    </Router>
  );
}

export default App;