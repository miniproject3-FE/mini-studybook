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

  ${({ fontsize }) =>
    fontsize &&
    css`
      font-size: ${fontsize};
    `}
`;

const sizes = {
  large: { width: '20rem', height: '2.5rem', fontSize: '1.5rem' },
  medium: { width: '17rem', height: '2rem', fontSize: '1.25rem' },
  small: { width: '12rem', height: '1.5rem', fontSize: '1rem' },
  board: {
    width: '100%',
    height: '2.5rem',
    fontSize: '1.5rem',
    boxShadow: `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
  rgb(209, 213, 219) 0px 0px 0px 1px inset`,
  },
};

const StyledInput = styled.input`
  /* 공통 속성 */

  height: 50px;
  width: 99%;
  border: none;
  border-radius: 5px;
  outline: none;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].width};
      height: ${sizes[size].height};
      font-size: ${sizes[size].fontSize};
      box-shadow: ${sizes[size].boxShadow};
    `}
`;

const StyledErrorDiv = styled.div`
  color: red;
  width: 99%;
  height: 20px;
`;

export { StyledLabelBlock, StyledLabel, StyledInput, StyledErrorDiv };
