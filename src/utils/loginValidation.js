/**
 * 작성자 : 박찬우
 * 목적 : 로그인 유효성 검즘을 위한 정규식
 * 작성 날짜 : 2023-03-18
 */

/** 정규식
 * ID
 * /^*[가-힣a-zA-Z]{2,10}$/
 *  /^ : 시작
 *  $/ : 끝
 *  [가-힣a-zA-Z] : 한글, 영문만 가능
 * {2,10} : 앞의 문자들이 m번 이상, n번 이하 나타남
 *  정리 : 한글, 영문만 가능하고 글자수는 2개 이상 10개 이하
 *
 * Password
 * /^*(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@#$!%*?&])[A-Za-z\\d@#$!%*?&]{8,15}$/
 * 비밀번호 (최소 자리 8자리, 최대자리 15자리, 숫자,문자,특수문자 최소 1개)
 *
 * Email
 * /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\\.[A-Za-z0-9\\-]+$"/
 *
 */

import { useRef } from 'react';

const idCheck = (id) => {
  const idRegEx = /^[가-힣a-zA-Z]{2,10}$/;
  let message = '';
  let result = idRegEx.test(id);

  if (result === true) {
    message = '사용자의 이름은 2~10자 한글, 영어만 사용할 수 있습니다.';
  } else {
    message = '';
  }

  return [result, message];
};

const pwCheck = (pw) => {
  const pwRegEx = /^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@#$!%*?&])[A-Za-z\\d@#$!%*?&]{8,15}$/;
  let message = '';

  let result = pwRegEx.test(pw);

  if (result === true) {
    message = '8~15글자, 영문자 1개, 숫자 1개, 특수문자 1개 꼭 입력해야합니다.';
  } else {
    message = '';
  }

  return [result, message];
};

const emailCheck = (email) => {
  const emailRegEx = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+$"/;
  let message = '';

  let result = emailRegEx.test(email);
  if (result === true) {
    message = '이메일 형식에 맞지 않습니다.';
  } else {
    message = '';
  }

  return [result, message];
};

export { idCheck, pwCheck, emailCheck };
