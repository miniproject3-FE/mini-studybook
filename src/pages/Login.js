import React from 'react'
import LabelInput from '../common/LabelInput';
import Button from '../common/Button'
import useInput from '../Hooks/useInput';
import { useDispatch } from 'react-redux';
import { __login } from '../redux/modules/loginSlice';
import styled from 'styled-components';
import axios from 'axios';
import LogoBox from '../common/LogoBox';

/**
 * 작성자: 김은영
 * 목적: 로그인 기능구현
 * 작성 날짜: 2023-03-18
 * @returns 
 */


function Login() {

  const [userid, idOnChangeHandler, idChangeHandler] = useInput();
  const [password, passwordOnChangeHandler, passwordChangeHandler] = useInput();

  const dispatch = useDispatch();

  const user = {
    userid,
    password,
  };

  const loginOnsubmitHandler = (payload) => {
    dispatch(__login(payload));
    idChangeHandler("");
    passwordChangeHandler("");
  };


  return (
    <StyledFormContainer>
      <StyledHeader>
        <LogoBox />
      </StyledHeader>
      <StyledBody>
        <StyledForm onSubmit={(e) => {
          e.preventDefault();
          loginOnsubmitHandler(user);
        }}
        >
          <LabelInput
            require
            label={"ID"}
            id={"id"}
            size={"large"}
            type={"text"}
            placeholder={"ID를 입력해주세요."}
            value={userid}
            onChange={idOnChangeHandler}
          />
          <LabelInput
            require
            label={"PASSWORD"}
            id={"password"}
            size={"large"}
            type={"password"}
            placeholder={"PASSWORD를 입력해주세요."}
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


const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledHeader = styled.div`
  padding: 60px 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
const StyledBody = styled.div`
  width: 460px;
`;