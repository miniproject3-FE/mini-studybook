/**
 * 작성자 : 김은영
 * 목적 : 프로젝트 내에서 공통적으로 쓰일 Header생성
 * 코드 작성 날짜 : 2023-03-17
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from '../../auth/Cookie';
import { __logout } from '../../redux/modules/loginSlice';
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

  

  if (logout === true) {
    setLogout(false);
    navigate('/');
  }

  return (
    <StyledHeader>
      <StyledUl>
        <StyledLi onClick={() => { navigate('/board')}}> | Write </StyledLi>

        {
        cookie !== undefined 
        ? (<StyledLi onClick={handlerClickLogout}> | Logout </StyledLi>) 
        : (<StyledLi onClick={() => { navigate('/login');}}> | Login </StyledLi>)
        }
        {
        cookie !== undefined 
        ? ( <StyledLi onClick={() => { navigate('/withdrawal'); }}> | Withdrawal </StyledLi>) 
        : (<StyledLi onClick={() => { navigate('/signup'); }}> | Signup </StyledLi>)
        }
      </StyledUl>
    </StyledHeader>
  );
}

export default Header;