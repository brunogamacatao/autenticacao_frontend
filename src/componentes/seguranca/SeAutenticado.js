import {useContext} from 'react'
import AppContext from '../../context/AppContext';

export default function SeAutenticado({ children }) {
  const {logado} = useContext(AppContext);

  if (logado) {
    return children;
  } else {
    return '';
  }
}
