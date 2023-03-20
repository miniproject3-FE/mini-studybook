import styled, { css } from 'styled-components';

const StyledLabelBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 10px;
  width: 100%;
  height: 120px;
`;

const StyledLabel = styled.label`
  font-weight: 700;
`;

const StyledInput = styled.input`
  /* 공통 속성 */

  height: 50px;
  width: 99%;
  border: none;
  border-radius: 5px;
  outline: none;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const StyledErrorDiv = styled.div`
  color: red;
  width: 99%;
  height: 20px;
`;

export { StyledLabelBlock, StyledLabel, StyledInput, StyledErrorDiv };
