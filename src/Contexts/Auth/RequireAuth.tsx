import React, { useContext } from 'react';
import Login from '../../pages/Login';
import { AuthContext } from './AuthContext';

// import { Container } from './styles';

const RequireAuth = ({ children }: { children: JSX.Element }) => {

    // inpedindo o acesso 
    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <Login/>;
    }

  return children;
}

export default RequireAuth;