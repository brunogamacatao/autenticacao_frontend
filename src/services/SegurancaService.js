const TOKEN = 'token';

const getToken = () => {
  return sessionStorage.getItem(TOKEN);
};

const setToken = (token) => {
  sessionStorage.setItem(TOKEN, token);
};

const removerToken = () => {
  sessionStorage.removeItem(TOKEN);
};

const isAutenticado = () => {
  return getToken() ? true : false;
};

const SegurancaService = {
  getToken,
  setToken,
  removerToken,
  isAutenticado
};

export default SegurancaService;