import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Campo from '../formulario/Campo';
import LoginService from '../services/LoginService';

export default function Registro() {
  return (
    <Formik 
    initialValues={{nome: '', email: '', senha: '', cofirmaSenha: ''}}
    validationSchema={yup.object({
      nome: yup.string().required('O campo nome é requerido'),
      email: yup.string().email('O valor digitado não é um email válido').required('O campo email é requerido'),
      senha: yup.string().required('O campo senha é requerido'),
      cofirmaSenha: yup.string().oneOf([yup.ref('senha'), null], 'As senhas devem ser iguais').required('A confirmação de senha é requerida')
    })}
    onSubmit={async (valores, { setSubmitting }) => {
      await LoginService.registro(valores);
      setSubmitting(false);
    }}
    >
      <Form>
        <Campo name="nome" label="Nome" type="text"/>
        <Campo name="email" label="Email" type="email"/>
        <Campo name="senha" label="Senha" type="password"/>
        <Campo name="cofirmaSenha" label="Confirmação da Senha" type="password"/>
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </Formik>
  )
}
