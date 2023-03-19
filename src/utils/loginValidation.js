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

const idCheck = (id) => {
  const idRegEx = /^[a-z0-9]{8,16}$/;
  let message = '';
  let isError = !idRegEx.test(id);

  if (id === '') {
    message = '아이디는 필수입니다.';
  } else if (isError === true) {
    message = '아이디는 소문자와 숫자 포함된 8자 ~ 16자의 아이디여야 합니다.';
  } else {
    message = '';
  }

  return [isError, message];
};

const pwCheck = (pw) => {
  const pwRegEx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,15}$/;

  let message = '';

  let isError = !pwRegEx.test(pw);

  if (pw === '') {
    message = '비밀번호는 필수입니다.';
  } else if (isError === true) {
    message = '8~15글자, 영문자 1개, 숫자 1개, 특수문자 1개 꼭 입력해야합니다.';
  } else {
    message = '';
  }

  return [isError, message];
};

const emailCheck = (email) => {
  const emailRegEx =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  let message = '';

  let isError = !emailRegEx.test(email);

  if (email === '') {
    message = '이메일은 필수입니다.';
  } else if (isError === true) {
    message = '이메일 형식에 맞지 않습니다.';
  } else {
    message = '';
  }

  return [isError, message];
};

const nameCheck = (userName) => {
  const nameRegEx = /^[a-zA-Z가-힣]{2,10}$/;
  let message = '';

  let isError = !nameRegEx.test(userName);

  if (userName === '') {
    message = '사용자이름은 필수입니다.';
  } else if (isError === true) {
    message = '사용자의 이름은 2~10자 한글, 영어만 사용할 수 있습니다.';
  } else {
    message = '';
  }

  return [isError, message];
};

const reconfirmPassword = (pw1, pw2) => {
  let message = '';
  let isError = false;
  if (pw2 === '') {
    message = '필수 정보입니다.';
    isError = true;
  } else if (pw1 !== pw2) {
    message = '비밀번호가 일치하지 않습니다.';
    isError = true;
  } else {
    message = '';
    isError = false;
  }

  return [isError, message];
};

export { idCheck, pwCheck, emailCheck, nameCheck, reconfirmPassword };
