import api from '../backend';

const getUsuarios = async () => {
  const {data} = await api.get('/usuarios');

  if (data.erro) {
    throw data.erro;
  } else {
    return data;
  }
};

const UsuariosService = {
  getUsuarios
};

export default UsuariosService;