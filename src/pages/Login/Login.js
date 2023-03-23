import React from 'react';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { __login } from '../../redux/modules/loginSlice';
import { StyledBody, StyledForm, StyledFormContainer, StyledHeader } from './styles';
import LogoBox from '../../components/LogoBox';
import Button from '../../components/Button';
import FormInput from '../../components/FormLabelInput/FormLabelInput';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

  const handlerClickSignup = (e) => {
    navigate('/signup');
  };

  return (
    <StyledFormContainer>
      <StyledHeader>
        <LogoBox
          onClick={() => {
            navigate('/');
          }}
        />
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
            size={'login'}
            type={'text'}
            placeholder={'아이디를 입력해주세요.'}
            value={loginid}
            onChange={idOnChangeHandler}
          />
          <FormInput
            required
            label={'PASSWORD'}
            id={'password'}
            size={'login'}
            type={'password'}
            placeholder={'비밀번호를 입력해주세요.'}
            value={password}
            onChange={passwordOnChangeHandler}
          />

          <Button size="large" value="로그인" background="#14213D" />
        </StyledForm>
        <StyledBtnBox>
          <Button
            size="large"
            value="회원가입"
            background="#14213D"
            onClick={() => {
              navigate('/signup');
            }}
          />
        </StyledBtnBox>
      </StyledBody>
    </StyledFormContainer>
  );
}

export default Login;

const StyledBtnBox = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 50px;
`;
