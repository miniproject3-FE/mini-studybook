import styled, { css } from 'styled-components';

const sizes = {
  large: { width: '20rem', height: '2.5rem', fontSize: '1.5rem' },
  medium: { width: '17rem', height: '2rem', fontSize: '1.25rem' },
  small: { width: '12rem', height: '1.5rem', fontSize: '1rem' },
};

const StyledLabel = styled.label`
  font-weight: 700;
`;
const StyledInput = styled.input`
  /* 공통 속성 */
  height: 1.75rem;
  width: 400px;
  border: none;
  border-radius: 5px;
  outline: none;
  /* 개별속성 */

  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].width};
      height: ${sizes[size].height};
      font-size: ${sizes[size].fontSize};
    `}
`;

export { StyledLabel, StyledInput };
