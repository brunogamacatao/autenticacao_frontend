import {useContext} from 'react'
import AppContext from '../../context/AppContext';

export default function SeUsuarioTemRole({ role, children }) {
  const {sessao} = useContext(AppContext);

  if (sessao.logado && sessao.role === role) {
    return children;
  } else {
    return '';
  }
}
