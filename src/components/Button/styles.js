import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const sizes = {
  large: {
    width: '100%',
    height: '2.5rem',
    fontSize: '1.25rem',
  },
  medium: {
    width: '12rem',
    height: '2.2rem',
    fontSize: '1rem',
  },
  small: {
    width: '6.5rem',
    height: '1.7rem',
    fontSize: '0.75rem',
  },
};

const StyledButton = styled.button`
  width: 200px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background: #8f8f8f;
  color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].width};
      height: ${sizes[size].height};
      font-size: ${sizes[size].fontSize};
    `}

  &:hover {
    background: ${lighten(0.01, '#bebebe')};
  }

  &:active {
    background: ${(darken(0.5), '#696969')};
  }

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export { StyledButton };
