/**
 * 작성자 : 김은영
 * 목적 : 프로젝트 내에서 공통적으로 쓰일 Header생성
 * 코드 작성 날짜 : 2023-03-17
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo, StyledHeader, StyledLi, StyledUl } from './styles';

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Logo />
      <StyledUl>
        <StyledLi onClick={()=>navigate('/login')}>Login</StyledLi>
        <StyledLi onClick={()=>navigate('/signup')}>Signup</StyledLi>
      </StyledUl>
    </StyledHeader>
  );
}

export default Header;


