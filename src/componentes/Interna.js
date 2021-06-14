import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function Interna() {
  const history = useHistory();
  const {logout} = useContext(AppContext);

  const onLogout = () => {
    logout();
    history.push('/');
  };

  return (
    <div>
      <h3>Página Interna</h3>
      <p>Só entra aqui se fizer login</p>
      <button onClick={() => onLogout()}>Logout</button>
    </div>
  )
}
