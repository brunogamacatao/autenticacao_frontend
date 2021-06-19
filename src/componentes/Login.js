import '../styles/login.scss';

import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

import { Formik, Form } from 'formik';
import * as yup from 'yup';
import CampoFlutuante from '../formulario/CampoFlutuante';
import BotaoFlutuante from '../formulario/BotaoFlutuante';

function Login() {
  const history = useHistory();
  const {login} = useContext(AppContext);

  return (
    <div className="login text-center">
      <div className="form-signin">
        <Formik 
        initialValues={{email: '', senha: ''}}
        validationSchema={yup.object({
          email: yup.string().email('O valor digitado não é um email válido').required('O campo email é requerido'),
          senha: yup.string().required('O campo senha é requerido')
        })}
        onSubmit={async (valores, { setSubmitting }) => {
          try {
            await login(valores);
            history.push('/interna');
          } catch (ex) {
            alert('Erro ao fazer login: ' + ex);
          }
          setSubmitting(false);
        }}
        >

        <Form>
          <h1 className="h3 mb-3 fw-normal">Identifique-se</h1>
          <CampoFlutuante name="email" label="Email" type="email"/>
          <CampoFlutuante name="senha" label="Senha" type="password"/>
          <BotaoFlutuante label="Entrar"/>
        </Form>

        </Formik>
      </div>
    </div>
  );
}

export default Login;
