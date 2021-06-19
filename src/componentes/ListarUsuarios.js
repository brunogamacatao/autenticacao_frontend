import React, {useEffect, useState} from 'react'
import UsuariosService from '../services/UsuariosService';

export default function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const carregarUsuarios = async () => setUsuarios(await UsuariosService.getUsuarios());
    carregarUsuarios();
  }, []);

  const renderUsuario = (usuario) => {
    return (
      <tr key={usuario._id}>
        <td>{usuario.email}</td>
        <td>{usuario.role}</td>
        <td>Sim</td>
        <td>Não</td>
        <td>
          <button type="button" className="btn btn-primary btn-sm me-1">Editar</button>
          <button type="button" className="btn btn-warning btn-sm me-1">Bloquear</button>
          <button type="button" className="btn btn-danger btn-sm">Remover</button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <h3 className="text-center">Usuários Cadastrados</h3>
      <table className="table table-striped table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Validado</th>
            <th>Bloqueado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(renderUsuario)}
        </tbody>
      </table>
    </div>
  )
}
