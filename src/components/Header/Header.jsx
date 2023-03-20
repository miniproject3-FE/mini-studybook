/**
 * 작성자 : 김은영
 * 목적 : 프로젝트 내에서 공통적으로 쓰일 Header생성
 * 코드 작성 날짜 : 2023-03-17
 */

import React from 'react';
import { StyledHeader, StyledLi, StyledUl } from './styles';

function Header() {
  return (
    <StyledHeader>
      <StyledUl>
        <StyledLi>Login</StyledLi>
        <StyledLi>Signup</StyledLi>
      </StyledUl>
    </StyledHeader>
  );
}

export default Header;
