import styled, { css } from 'styled-components';

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

const StyledLabel = styled.label`
  font-weight: 700;

  ${({ fontsize }) =>
    fontsize &&
    css`
      font-size: ${fontsize};
    `}
`;
const StyledInput = styled.input`
  height: 1.75rem;
  width: 400px;
  border: none;
  border-radius: 5px;
  outline: none;

  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].width};
      height: ${sizes[size].height};
      font-size: ${sizes[size].fontSize};
      box-shadow: ${sizes[size].boxShadow};
    `}
`;

const StyledLabelBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 10px;
  width: 100%;
`;

export { StyledLabel, StyledInput, StyledLabelBlock };
