import { AUTH_TOKEN_KEY_NAME } from '../consts';

type Token =string;

const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

const saveToken = (token: Token) => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

const dropToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};

export {
  getToken,
  saveToken,
  dropToken
};