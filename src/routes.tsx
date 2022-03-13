import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Contexts/Auth/RequireAuth';
import Home from './pages/Home';
import Private from './pages/Private';

// import { Container } from './styles';

const Routers: React.FC = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/private" element={<RequireAuth><Private/></RequireAuth>}/>
      </Routes>
  );
}

export default Routers;