import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Principal from "./componentes/Principal";
import PaginaNaoEncontrada from './componentes/PaginaNaoEncontrada';
import Login from './componentes/Login';
import Interna from './componentes/Interna';
import RotaPrivada from "./componentes/RotaPrivada";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from './componentes/Rodape';
import { AppProvider } from "./context/AppContext";
import Registro from './componentes/Registro';


function App() {
  return (
    <div className="container flex">
      <AppProvider>
        <Router>
          <Cabecalho/>
          <Switch>
            <Route path="/" exact={true}> <Principal/> </Route>
            <Route path="/login"> <Login/> </Route>
            <Route path="/registro"> <Registro/> </Route>
            <RotaPrivada path="/interna" redirectTo="/login"> <Interna/> </RotaPrivada>
            <Route path="*"> <PaginaNaoEncontrada/> </Route>
          </Switch>
          <Rodape/>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
