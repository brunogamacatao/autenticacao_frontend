import {useContext} from 'react'
import AppContext from '../../context/AppContext';

export default function SeNaoAutenticado({ children }) {
  const {sessao} = useContext(AppContext);

  if (!sessao.logado) {
    return children;
  } else {
    return '';
  }
}
