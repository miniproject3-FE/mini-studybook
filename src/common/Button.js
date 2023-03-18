/**
 * 작성자 : 박찬우
 * 목적 : 이 프로젝트에서 공통적으로 쓰일 버튼 생성
 * 코드 작성 날짜 : 2023-03-17 22:00
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

function Button(props) {
  return (
    <StyledButton
      color={props.color}
      background={props.background}
      onClick={props.onClick}
      size={props.size}
      value={props.value}
    >
      {props.value}
    </StyledButton>
  );
};

export default Button;

const DDv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 10px;
`;

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
  background: #c9c9c9;
  color: #ffffff;

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
    background: ${lighten(0.01, '#e5e5e5')};
  }
  //사용자가 활성화한 요소를 나타낸다.
  //즉 마우스 버튼을 누르는 순간부터 떼는 시점까지 의미한다.
  &:active {
    background: ${(darken(0.5), '#a8a8a8')};
  }

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;
