import React, {useContext, useState} from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Campo from '../formulario/Campo';
import LoginService from '../services/LoginService';
import AppContext from '../context/AppContext';

const criaFormVazio = () => {
  return {nome: '', email: '', senha: '', cofirmaSenha: ''};
};

export default function Registro() {
  const {overlay} = useContext(AppContext);
  const [mostraAlerta, setMostraAlerta] = useState(false);

  return (
    <>
    <h3 className="text-center">Novo Usuário</h3>
    { mostraAlerta ? (
      <div class="alert alert-success alert-dismissible" role="alert">
        Registro realizado com sucesso !
        <button type="button" onClick={() => setMostraAlerta(false)} class="btn-close" aria-label="Close"></button>
      </div>
    ) : null }
    <Formik 
    initialValues={criaFormVazio()}
    enableReinitialize
    validationSchema={yup.object({
      nome: yup.string().required('O campo nome é requerido'),
      email: yup.string().email('O valor digitado não é um email válido').required('O campo email é requerido'),
      senha: yup.string().required('O campo senha é requerido'),
      cofirmaSenha: yup.string().oneOf([yup.ref('senha'), null], 'As senhas devem ser iguais').required('A confirmação de senha é requerida')
    })}
    onSubmit={async (valores, { setSubmitting, resetForm }) => {
      overlay.exibirMensagem('Registrando ...');
      await LoginService.registro(valores);
      setSubmitting(false);
      resetForm();
      setMostraAlerta(true);
      overlay.esconderMensagem();
    }}
    >
      <Form>
        <Campo name="nome" label="Nome" type="text"/>
        <Campo name="email" label="Email" type="email"/>
        <Campo name="senha" label="Senha" type="password"/>
        <Campo name="cofirmaSenha" label="Confirmação da Senha" type="password"/>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </Form>
    </Formik>
    </>
  )
}
