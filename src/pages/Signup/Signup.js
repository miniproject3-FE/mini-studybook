/**
 * 작성자 : 박찬우
 * 목적 :
 * 회원가입을 목적으로 한다.
 * 회원 가입 시, id, password, email, username에 대해서 유효성 검사를 걸친다.
 * 유효성 검사가 통과 된다면 서버에 회원가입 정보를 전달한다.
 * 전달 후 로그인 성공시 페이지를 메인으로 이동한다.
 *
 * 작성 날짜 :2023.03.18
 *
 */

import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import FormInput from '../../components/FormLabelInput';
import LogoBox from '../../components/LogoBox';
import useInput from '../../Hooks/useInput';
import { __getData, __signup } from '../../redux/modules/signupSlice';
import { StyledBody, StyledForm, StyledHeader, StyledWrap } from './styles';
import {
  idCheck,
  pwCheck,
  emailCheck,
  nameCheck,
  reconfirmPassword,
} from '../../utils/loginValidation';
import useSignInfo from '../../Hooks/useSignInfo';
function Signup() {
  //hook
  const [idInfo, idHandler, idError] = useSignInfo();
  const [pwInfo, pwHandler, pwError] = useSignInfo();
  const [username, usernameHandler, usernameError] = useSignInfo();
  const [emailInfo, emailHandler, emailError] = useSignInfo();
  const [pw2Info, pw2Handler, pw2Error] = useSignInfo();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //function
  const handlerSubmit = (e) => {
    e.preventDefault();

    //유효성 검사.
    idError(idCheck(idInfo.value));
    pwError(pwCheck(pwInfo.value));
    emailError(emailCheck(emailInfo.value));
    usernameError(nameCheck(username.value));
    pw2Error(reconfirmPassword(pwInfo.value, pw2Info.value));
  };

  //버튼 클릭시 handlerSubmit 함수가 실행이 되는데,
  //위와 같이 유효성 검사를 하고 값을 바꿔줘야 한다.
  //근데 나는 useState를 써서 렌더링이 되야 값이 바뀐다.
  // 그 결과로 아래 값들을 함수 내에서 썼을 때 값이 바뀌지 않아서 문제가 발생했다.
  // error가 떠야 되는 상황에서 렌더링이 일어나지 않아, 그냥 넘어가지는 등...
  //그래서 렌더링 이후 유효성 체크를 하려고 useEffectf를 써서 다음과 같이 했다.
  // 근데 생각을 해보니, 그냥 다음에 할 때는, input 에 error/value를 분리하고
  //value -> useState error -> useRef를 써서 하는게 낫지 않을까 싶긴하다.
  useEffect(() => {
    if (
      !idInfo.isError &&
      !pwInfo.isError &&
      !emailInfo.isError &&
      !username.isError &&
      !pw2Info.isError
    ) {
      const newUser = {
        id: '2',
        userid: idInfo.value,
        password: pwInfo.value,
        email: emailInfo.value,
        username: username.value,
      };
      console.log('newUser', newUser);

      dispatch(__signup(newUser));
      //navigate('/');
    }
  }, [handlerSubmit]);

  return (
    <StyledWrap>
      <StyledHeader>
        <LogoBox />
      </StyledHeader>
      <StyledBody>
        <StyledForm>
          <FormInput
            size="large"
            id={0}
            label="아이디"
            placeholder="아이디를 입력하세요."
            value={idInfo.value}
            onChange={idHandler}
            isError={idInfo.isError}
            error={idInfo.error}
          />
          <FormInput
            size="large"
            id={1}
            label="비밀번호"
            placeholder="비밀번호를를 입력하세요."
            type="password"
            value={pwInfo.value}
            onChange={pwHandler}
            isError={pwInfo.isError}
            error={pwInfo.error}
          />
          <FormInput
            size="large"
            id={2}
            label="비밀번호 재확인"
            placeholder="비밀번호를를 입력하세요."
            type="password"
            value={pw2Info.value}
            onChange={pw2Handler}
            isError={pw2Info.isError}
            error={pw2Info.error}
          />
          <FormInput
            value={username.value}
            onChange={usernameHandler}
            size="large"
            id={3}
            label="이름"
            isError={username.isError}
            error={username.error}
          />
          <FormInput
            size="large"
            id={4}
            label="Email"
            placeholder="이메일을 입력해주세요."
            value={emailInfo.value}
            onChange={emailHandler}
            isError={emailInfo.isError}
            error={emailInfo.error}
          />
        </StyledForm>
        <Button
          onClick={handlerSubmit}
          size="large"
          value="가입히기"
          background="#14213D"
        />
      </StyledBody>
    </StyledWrap>
  );
}

export default Signup;
