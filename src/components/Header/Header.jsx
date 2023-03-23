/**
 * 작성자 : 김은영
 * 목적 : 프로젝트 내에서 공통적으로 쓰일 Header생성
 * 코드 작성 날짜 : 2023-03-17
 * 
 * 수정자: 김은영
 * 목적: 회원탈퇴 기능 추가
 * 작성 날짜: 2023-03-23
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from '../../auth/Cookie';
import { __getBoards } from '../../redux/modules/boardSlice';
import { __logout } from '../../redux/modules/loginSlice';
import { __withdrawal } from '../../redux/modules/signupSlice';
import { StyledHeader, StyledLi, StyledUl } from './styles';

function Header() {
  const dispatch = useDispatch();

  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  const handlerClickLogout = () => {
    if(window.confirm("로그아웃 하시겠습니까?")) {
      setLogout(true)
      removeCookie('token')
    }
  };

  const cookie = getCookie('token');

  const onClickWithdrawalHandler = () => {
    if(window.confirm("회원탈퇴 하시겠습니까?")) {
      dispatch(__withdrawal()).then((response) => {
        if (response.type === 'WITHDRAWAL/fulfilled') {
          removeCookie('token');
        }
      });
    }
    dispatch(__getBoards());
  };

  if (logout === true) {
    setLogout(false);
    navigate('/');
  }

  return (
    <StyledHeader>
      <StyledUl>
        <StyledLi onClick={() => { navigate('/board')}} > | Write </StyledLi>

        {cookie !== true
          ? (<StyledLi onClick={handlerClickLogout}> | Logout </StyledLi>)
          : (<StyledLi onClick={() => { navigate('/login') }} > | Login </StyledLi>)}

        {cookie !== true
          ? (<StyledLi onClick={onClickWithdrawalHandler} > | Withdrawal </StyledLi>)
          : (<StyledLi onClick={() => { navigate('/signup') }} > | Signup </StyledLi>)}
      </StyledUl>
    </StyledHeader>
  );
}

export default Header;
