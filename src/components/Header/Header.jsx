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
