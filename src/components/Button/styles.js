/**
 * 작성자 : 박찬우
 * 목적 : buttons style을 변경할 때 사용한다.
 * 작성 일자 : 2023-03-18
 *
 */

import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

//rem : root의 font-size 기준으로 크기를 정한다.
//버튼 크기와 폰트크기를 일정하기 유지하고 싶어서.
//버튼의 사용을 크게 3가지라 생각하고 크기별로 3가지를 만든다.
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

  //props.size를 부분할당을 해서 size로 받는다.
  //size라는 props가 존재 할 경우, 다음과 같은 효과를 입힌다.
  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].width};
      height: ${sizes[size].height};
      font-size: ${sizes[size].fontSize};
    `}

  // 사용자가 마우스 요소 위에 올리는 시점을 의미한다. 
  &:hover {
    background: ${lighten(0.01, '#bebebe')};
  }
  //사용자가 활성화한 요소를 나타낸다.
  //즉 마우스 버튼을 누르는 순간부터 떼는 시점까지 의미한다.
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
