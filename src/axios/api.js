/**
 * 작성자 : 박찬우
 * 목적 : 회원가입 페이지 axios instance 화 시키기
 * 작성 날짜 : 2023.03.18
 *
 * 수정자 : 박찬우
 * 목적 : 회원가입, 로그인 페이지를 제외하고 header authorization에 토큰값 넣기 (로그인 상태 관리)
 * 작성 날짜 : 2023.03.21
 */

import axios from 'axios';
import { getCookie } from '../auth/Cookie';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 3000,
});

//use 함수 내에는 fullfill 함수와 reject 함수를 콜백으로 받는다.
instance.interceptors.request.use(
  function (config) {
    //요청 보내기전 수행
    //특정 페이지는 쿠키를 주면 안되니 제외하고 적어주기
    if (config.url !== '/api/auth/signup' && config.url !== '/api/auth/login') {
      config.headers.Authorization = getCookie('test');
      console.log('config', config);
    }

    return config;
  },
  function (error) {
    //오류 요청을 보내기 전에 수행
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log(response);
    //정상 응답
    return response;
  },
  function (error) {
    //정상 응답 실패
    return Promise.reject(error);
  }
);

export default instance;
