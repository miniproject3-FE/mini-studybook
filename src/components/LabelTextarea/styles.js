import styled, { css } from 'styled-components';

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  height: 400px;

  font-size: 20px;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  resize: none;
`;

export { StyledBlock, StyledLabel, StyledTextarea };
