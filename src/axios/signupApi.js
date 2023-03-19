/**
 * 작성자 : 박찬우
 * 목적 : 회원가입 페이지 axios instance 화 시키기
 * 작성 날짜 : 2023.03.18
 *
 *
 */

import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_API_SERVER,
  timeout: 1,
});

//use 함수 내에는 fullfill 함수와 reject 함수를 콜백으로 받는다.
instance.interceptors.request.use(
  function (config) {
    //요청 보내기전 수행
    return config;
  },
  function (error) {
    //오류 요청을 보내기 전에 수행
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    //정상 응답
    return response;
  },
  function (error) {
    //정상 응답 실패
    return Promise.reject(error);
  }
);
