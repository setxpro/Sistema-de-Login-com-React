import React, { useContext } from 'react';

import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Contexts/Auth/AuthContext';



import * as C from './styles';

const Nav: React.FC = () => {

  const aut = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await aut.sinout();
    navigate('/');
  }

  return (
    <C.Container>
        <header>
            <h1>Sistema de Login</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/private">Página privada</Link>
                {aut.user && `Bem-Vindo ${aut.user?.name}`}
                {aut.user && <a href="#!" onClick={handleLogout}>Sair</a>}
            </nav>
        </header>
    </C.Container>
  );
}

export default Nav;