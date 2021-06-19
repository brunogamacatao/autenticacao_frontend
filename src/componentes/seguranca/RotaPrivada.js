import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import SegurancaService from '../../services/SegurancaService';

const RotaPrivada = ({ children, role, redirectTo, ...rest }) => (
  <Route {...rest} render={props => {
    let podeAcessar = SegurancaService.isAutenticado();

    if (podeAcessar && role) {
      podeAcessar = SegurancaService.getRole() === role;
    }

    if (podeAcessar) {
      // se estou autenticado, mostra os componentes filhos
      return children;
    } else {
      // se não está autenticado, redireciona para o login
      return <Redirect to={{ pathname: redirectTo, 
                       state: { from: props.location } }} />
    }
  }}/>
);

export default RotaPrivada;