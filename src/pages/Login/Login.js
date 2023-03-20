/**
 * 작성자: 김은영
 * 목적: 로그인 기능구현
 * 작성 날짜: 2023-03-18
 */

import React from 'react'
import useInput from '../../Hooks/useInput';
import { useDispatch } from 'react-redux';
import { __login } from '../../redux/modules/loginSlice';
import { StyledBody, StyledForm, StyledFormContainer, StyledHeader } from './styles';
import LogoBox from '../../components/LogoBox';
import Button from '../../components/Button';
import FormInput from '../../components/FormLabelInput'
import { useCookies } from 'react-cookie';

function Login() {

  const [userid, idOnChangeHandler, idChangeHandler] = useInput();
  const [password, passwordOnChangeHandler, passwordChangeHandler] = useInput();
  const dispatch = useDispatch();

  const user = {
    userid,
    password,
  };

  const [cookie, setCookie] = useCookies();


  const loginOnsubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__login(user))
    .then((response)=> {
      setCookie("id", response.data.Authorization)
    });
    idChangeHandler("");
    passwordChangeHandler("");
  };

  return (
    <StyledFormContainer>
      <StyledHeader>
        <LogoBox />
      </StyledHeader>
      <StyledBody>
        <StyledForm onSubmit={loginOnsubmitHandler}
        >
          <FormInput
            required
            label={"ID"}
            id={"id"}
            size={"large"}
            type={"text"}
            placeholder={"아이디를 입력하세요."}
            value={userid}
            onChange={idOnChangeHandler}
          />
          <FormInput
            required
            label={"PASSWORD"}
            id={"password"}
            size={"large"}
            type={"password"}
            placeholder={"비밀번호를 입력하세요."}
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
  )
};

export default Login;
