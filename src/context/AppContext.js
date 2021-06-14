import React, {useState, useEffect} from 'react';
import LoginService from '../services/LoginService';
import SegurancaService from '../services/SegurancaService';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [logado, setLogado] = useState(false);

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

  return (
    <AppContext.Provider value={{logado, setLogado, login, logout}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;