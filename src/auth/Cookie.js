/**
 * 작성자 : 박찬우
 * 목적 : universal-cookie 모듈 추가
 * 작성날짜 : 2023.03.22
 */

import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name, option) => {
  return cookies.remove(name, { ...option });
};
