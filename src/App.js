import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { AppProvider } from "./context/AppContext";

import Principal from "./componentes/Principal";
import PaginaNaoEncontrada from './componentes/PaginaNaoEncontrada';
import Login from './componentes/Login';
import Interna from './componentes/Interna';
import Cabecalho from "./componentes/Cabecalho";
import Registro from './componentes/Registro';
import RotaPrivada from "./componentes/seguranca/RotaPrivada";
import WaitOverlay from './componentes/WaitOverlay';

function App() {
  return (
    <AppProvider>
      <WaitOverlay/>
      <Router>
        <Cabecalho/>
        <main className="container flex">
          <Switch>
            <Route path="/" exact={true}> <Principal/> </Route>
            <Route path="/login"> <Login/> </Route>
            <Route path="/registro"> <Registro/> </Route>
            <RotaPrivada path="/interna" redirectTo="/login"> <Interna/> </RotaPrivada>
            <Route path="*"> <PaginaNaoEncontrada/> </Route>
          </Switch>
        </main>
      </Router>
    </AppProvider>
  );
}

export default App;
