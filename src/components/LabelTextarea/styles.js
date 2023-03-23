import styled, { css } from 'styled-components';

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 99%;
  height: 550px;
  gap: 10px;
`;

const StyledLabel = styled.label`
  font-weight: 700;
  font-size: 30px;

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `}
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 30vh;

  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  resize: none;

  overflow: scroll;
`;

const StyledErrorDiv = styled.div`
  color: red;
  width: 99%;
  height: 20px;
`;
export { StyledBlock, StyledLabel, StyledTextarea, StyledErrorDiv };
