import React from 'react'
import styled from 'styled-components';


const Logo = styled.div`
  /* width: 100px;
  height: 100px;
  background-image: url('../../assets/images/logo1.png');
  background-size: cover;
  border-radius: 50%; */
`;

const StyledHeader = styled.header`
  height: 100px;
  width: 100%;
  background-color: #14213D;
  color: white
`
const StyledUl = styled.ul`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 30px;
  margin-right: 20px;
`

const StyledLi = styled.li`
  font-size: 18px;

  margin-bottom: 20px;
  cursor: pointer;
`;

export { StyledHeader, StyledUl, StyledLi, Logo };

