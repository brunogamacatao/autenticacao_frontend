import React, {useState, useEffect} from 'react';
import LoginService from '../services/LoginService';
import SegurancaService from '../services/SegurancaService';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [logado, setLogado] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [textoOverlay, setTextoOverlay] = useState('Aguarde ...');

  useEffect(() => {
    setLogado(SegurancaService.isAutenticado());
  }, []);

  const login = async (formLogin) => {
    await LoginService.login(formLogin);
    setLogado(true);
  };

  const logout = () => {
    LoginService.logout();
    setLogado(false);
  };

  const exibirMensagem = (msg) => {
    setTextoOverlay(msg);
    setOverlay(true);
  };

  const esconderMensagem = () => {
    setOverlay(false);
  };

  return (
    <AppContext.Provider value={{
      logado, setLogado, login, logout, 
      overlay: {
        show: overlay, setShow: setOverlay, textoOverlay, setTextoOverlay, exibirMensagem, esconderMensagem
      }
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;