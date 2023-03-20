import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 70px;
  width: 100%;
  background-color: #14213d;
  color: white;
`;
const StyledUl = styled.ul`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 30px;
  margin-right: 20px;
`;

const StyledLi = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

export { StyledHeader, StyledUl, StyledLi };
