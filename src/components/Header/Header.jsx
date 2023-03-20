/**
 * 작성자 : 김은영
 * 목적 : 프로젝트 내에서 공통적으로 쓰일 Header생성
 * 코드 작성 날짜 : 2023-03-17
 */

import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __logout } from '../../redux/modules/loginSlice';
import { StyledHeader, StyledLi, StyledUl } from './styles';

function Header() {
  const [cookie] = useCookies(['id']);
  const dispatch = useDispatch();
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();
  const handlerClickLogout = () => {
    dispatch(__logout()).then((response) => {
      if (response.type === 'logout/fulfilled') {
        setLogout(true);
      } else if (response.type === 'logout/rejected') {
        setLogout(true);
      }
    });
  };

  if (logout === true) {
    setLogout(false);
    navigate('/login');
  }

  console.log(cookie === {});
  return (
    <StyledHeader>
      <StyledUl>
        {cookie !== {} ? (
          <StyledLi onClick={handlerClickLogout}>Logout</StyledLi>
        ) : (
          <StyledLi>Login</StyledLi>
        )}
        <StyledLi>Signup</StyledLi>
      </StyledUl>
    </StyledHeader>
  );
}

export default Header;
