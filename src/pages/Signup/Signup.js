import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import FormInput from '../../components/FormLabelInput';
import LogoBox from '../../components/LogoBox';
import { __getData, __signup } from '../../redux/modules/signupSlice';
import { StyledBody, StyledForm, StyledHeader, StyledWrap } from './styles';
import useSignInfo from '../../hooks/useSignInfo';
import {
  idCheck,
  pwCheck,
  emailCheck,
  nameCheck,
  reconfirmPassword,
} from '../../utils/loginValidation';

function Signup() {
  const [idInfo, idHandler, idError] = useSignInfo();
  const [pwInfo, pwHandler, pwError] = useSignInfo();
  const [username, usernameHandler, usernameError] = useSignInfo();
  const [emailInfo, emailHandler, emailError] = useSignInfo();
  const [pw2Info, pw2Handler, pw2Error] = useSignInfo();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();

    idError(idCheck(idInfo.value));
    pwError(pwCheck(pwInfo.value));
    emailError(emailCheck(emailInfo.value));
    usernameError(nameCheck(username.value));
    pw2Error(reconfirmPassword(pwInfo.value, pw2Info.value));
    setClick(!click);
  };

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
        loginid: idInfo.value,
        password: pwInfo.value,
        email: emailInfo.value,
        username: username.value,
      };

      dispatch(__signup(newUser)).then((response) => {
        if (response.type === 'signup/fulfilled') {
          navigate('/login');
        }
      });
    }
  }, [click]);

  return (
    <StyledWrap>
      <StyledHeader>
        <LogoBox onClick={() => navigate('/')} />
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
            placeholder="비밀번호를 입력하세요."
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
