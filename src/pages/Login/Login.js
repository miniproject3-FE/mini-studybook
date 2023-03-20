import React from 'react';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { __login } from '../../redux/modules/loginSlice';
import { StyledBody, StyledForm, StyledFormContainer, StyledHeader } from './styles';
import LogoBox from '../../components/LogoBox';
import Button from '../../components/Button';
import FormInput from '../../components/FormLabelInput/FormLabelInput';

function Login() {
  const [loginid, idOnChangeHandler, idChangeHandler] = useInput();
  const [password, passwordOnChangeHandler, passwordChangeHandler] = useInput();

  const dispatch = useDispatch();

  const user = {
    loginid,
    password,
  };

  const loginOnsubmitHandler = (payload) => {
    dispatch(__login(payload));
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
            onClick={loginOnsubmitHandler}
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
