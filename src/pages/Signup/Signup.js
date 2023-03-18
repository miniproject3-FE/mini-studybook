import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import FormInput from '../../components/FormLabelInput';
import LogoBox from '../../components/LogoBox';
import useInput from '../../hooks/useInput';
import { __getData, __signup } from '../../redux/modules/signupSlice';
import { StyledBody, StyledForm, StyledHeader, StyledWrap } from './styles';
import { idCheck, pwCheck, emailCheck, nameCheck } from '../../utils/loginValidation';
import useSignInfo from '../../hooks/useSignInfo';
function Signup() {
  const [idInfo, idHandler, idError] = useSignInfo();
  const [pwInfo, pwHandler, pwError] = useSignInfo();

  const [username, usernameHandler, usernameError] = useSignInfo();
  const [emailInfo, emailHandler, emailError] = useSignInfo();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password2, setPw2] = useInput();

  const { isLoading, isError, data } = useSelector((state) => state.singup);

  const handlerSubmit = (e) => {
    e.preventDefault();

    idError(idCheck(idInfo.value));
    pwError(pwCheck(pwInfo.value));
    emailError(emailCheck(emailInfo.value));
    usernameError(nameCheck(username.value));

    console.log('------------------------------------');
    if (!idInfo.isError && !pwInfo.isError && !emailInfo.isError) {
      const newUser = {
        userid: idInfo.value,
        password: pwInfo.value,
        email: emailInfo.value,
        username: username,
      };

      //dispatch(__signup(newUser));
      //navigate('/');
    }
  };

  console.log(password2);
  useEffect(() => {
    //dispatch(__getData());
  }, [dispatch]);

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
            value={password2}
            onChange={setPw2}
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
