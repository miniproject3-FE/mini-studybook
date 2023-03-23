/**
 * 작성자 : 박찬우
 * 목적 : 이 프로젝트에서 공통적으로 쓰일 버튼 생성
 * 코드 작성 날짜 : 2023-03-17 22:00
 */

import React from 'react';
import { StyledButton } from './styles';

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
}

export default Button;
