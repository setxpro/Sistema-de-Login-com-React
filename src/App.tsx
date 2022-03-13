import * as C from './styles/App';

import Routers from './routes';
import Nav from './components/Nav';

export const App = () => {
  return(
    <C.Container> 
      <Nav/>
        <C.ContainerRoutes>
           <Routers/> 
        </C.ContainerRoutes>
    </C.Container>
  );
}