import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import SegurancaService from '../../services/SegurancaService';

const RotaPrivada = ({ children, redirectTo, ...rest }) => (
  <Route {...rest} render={props => {
    if (SegurancaService.isAutenticado()) {
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