import React from 'react'
import styled from 'styled-components';

/**
 * 작성자 : 김은영
 * 목적 : 프로젝트 내에서 공통적으로 쓰일 Header생성
 * 코드 작성 날짜 : 2023-03-17
 */



function Header() {
  return (
    <StyledHeader>
      <StyledUl>
        <StyledLi>Login</StyledLi>
        <StyledLi>Signup</StyledLi>
      </StyledUl>
    </StyledHeader>
  )
};



export default Header;

const StyledHeader = styled.header`
  height: 70px;
  width: 100%;
  background-color: #14213D;
  color: white
`
const StyledUl = styled.ul`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 30px;
  margin-right: 20px;
`

const StyledLi = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`
