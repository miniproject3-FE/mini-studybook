/**
 * 작성자: 김은영
 * 목적: 로그인 기능구현
 * 작성 날짜: 2023-03-18
 * 
 * 수정자: 김은영
 * 목적: 로고 클릭시 홈 화면으로 이동 및 호버시 커서모양 변경
 * 수정 날찌: 2023-03-23
 */

import React from 'react';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { __login } from '../../redux/modules/loginSlice';
import { StyledBody, StyledForm, StyledFormContainer, StyledHeader } from './styles';
import LogoBox from '../../components/LogoBox';
import Button from '../../components/Button';
import FormInput from '../../components/FormLabelInput/FormLabelInput';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loginid, idOnChangeHandler, idChangeHandler] = useInput();
  const [password, passwordOnChangeHandler, passwordChangeHandler] = useInput();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = {
    loginid,
    password,
  };


  const loginOnsubmitHandler = (user) => {
    dispatch(__login(user)).then((response) => {
      if (response.type === 'Login/fulfilled') {
        navigate('/');
      } 
    });
    idChangeHandler('');
    passwordChangeHandler('');
  };

  return (
    <StyledFormContainer>
      <StyledHeader>
        <LogoBox onClick={()=> {navigate('/')}} />
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
          <Button size="large" value="로그인" background="#14213D" />
        </StyledForm>
      </StyledBody>
    </StyledFormContainer>
  );
}

export default Login;
