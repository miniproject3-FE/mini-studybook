/**
 * 작성자: 김은영
 * 목적: 로그인 기능구현
 * 작성 날짜: 2023-03-18
 */

import React, { useEffect } from 'react';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { __login } from '../../redux/modules/loginSlice';
import { StyledBody, StyledForm, StyledFormContainer, StyledHeader } from './styles';
import LogoBox from '../../components/LogoBox';
import Button from '../../components/Button';
import FormInput from '../../components/FormLabelInput/FormLabelInput';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loginid, idOnChangeHandler, idChangeHandler] = useInput();
  const [password, passwordOnChangeHandler, passwordChangeHandler] = useInput();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies();
  const user = {
    loginid,
    password,
  };

  const loginOnsubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__login(user)).then((response) => {
      if (response.type === 'logout/fulfilled') {
        setCookie('token', response.data.Authorization);
      }
    });
    idChangeHandler('');
    passwordChangeHandler('');
  };

  return (
    <StyledFormContainer>
      <StyledHeader>
        <LogoBox />
      </StyledHeader>
      <StyledBody>
        <StyledForm
          onSubmit={(e) => {
            e.preventDefault();
            loginOnsubmitHandler(user);
          }}
        >
          <FormInput
            required
            label={'ID'}
            id={'id'}
            size={'large'}
            type={'text'}
            placeholder={'아이디를 입력해주세요.'}
            value={loginid}
            onChange={idOnChangeHandler}
          />
          <FormInput
            required
            label={'PASSWORD'}
            id={'password'}
            size={'large'}
            type={'password'}
            placeholder={'비밀번호를 입력해주세요.'}
            value={password}
            onChange={passwordOnChangeHandler}
          />
          <Button
            size="large"
            value="로그인"
            background="#14213D"
          />
        </StyledForm>
      </StyledBody>
    </StyledFormContainer>
  );
}

export default Login;
