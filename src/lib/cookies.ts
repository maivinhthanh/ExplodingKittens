import Cookies from 'js-cookie';

export const getCookie = (name: string) => {
  return Cookies.get(name);
};

export const setCookie = (
  name: string,
  value: string,
  options: Cookies.CookieAttributes = {}
) => {
  return Cookies.set(name, value, {
    domain: import.meta.env.VITE_APP_DOMAIN,
    path: '/',
    ...options,
  });
};

export const removeCookie = (
  name: string,
  options: Cookies.CookieAttributes = {}
) => {
  return Cookies.remove(name, {
    domain: import.meta.env.VITE_APP_DOMAIN,
    path: '/',
    ...options,
  });
};
