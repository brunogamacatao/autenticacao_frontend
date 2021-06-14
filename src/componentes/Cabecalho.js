import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import LinkAutenticado from './LinkAutenticado';
import AppContext from '../context/AppContext';

export default function Cabecalho() {
  const {logout} = useContext(AppContext);

  return (
    <div>
      <h1>Cabeçalho</h1>
      <nav>
        <Link to="/">Principal</Link>
        <Link to="/interna">Interna</Link>
        <Link to="/registro">Registrar</Link>
        <LinkAutenticado to="/" onClick={() => logout()}>Sair</LinkAutenticado>
      </nav>
      <hr/>
    </div>
  )
}
