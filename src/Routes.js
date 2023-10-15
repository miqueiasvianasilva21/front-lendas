import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import WelcomePage from './WelcomePage';
import CreateLegend from './CreateLegend';
import Image from './Image';

function AppRoutes() { // Renomeie a função para evitar o conflito de nomes
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/welcome/:nome" element={<WelcomePage />} />
        <Route path="/create_legend/:nome" element={<CreateLegend />} />
        <Route path="/image" element={<Image />} />
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;

