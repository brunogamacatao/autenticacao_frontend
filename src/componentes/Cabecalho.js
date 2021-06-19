import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext';

import SeAutenticado from './seguranca/SeAutenticado';


export default function Cabecalho() {
  const {logout} = useContext(AppContext);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Minha Aplicação</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/interna">Interna</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/registro">Registrar</Link>
              </li>
              <SeAutenticado>
                <li className="nav-item">
                  <Link className="nav-link active" to="/" onClick={() => logout()}>Sair</Link>
                </li>
              </SeAutenticado>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
