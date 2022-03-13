import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Auth/AuthContext';

import * as C from './styles';

const Login: React.FC = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const handleLogin = async() => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/');
            }
            else {
                alert('Não foi possivel!');
            }
        }
    }
    return (
      <C.Container>
          <h2>Faça Login para acessar</h2>
          
          <input 
            type="email" 
            value={email}  
            onChange={e => setEmail(e.target.value)}
            placeholder="Digite o sei E-mail..."
        />
          <input 
            type="password" 
            value={password}  
            onChange={e => setPassword(e.target.value)}
            placeholder="Digite a sua Senha..."
            
        />

        <button onClick={handleLogin}>Logar</button>
      </C.Container>
    );
}

export default Login;