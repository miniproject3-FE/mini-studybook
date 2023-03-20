/**
 * 수정한 사람 : 박찬우
 * 수정 내용 :
 * 1. placeholder 추가
 * 2. required 추가 (form 유효성 검사)
 * 수정 날짜 : 2023-03-18
 */

import React from 'react';
import { StyledLabel, StyledInput, StyledLabelBlock } from './styles'

function LabelInput(props) {
  return (
    <StyledLabelBlock>
      <StyledLabel size={props.size} htmlFor={props.id}>
        {props.label}
      </StyledLabel>
      <StyledInput
        require
        size={props.size}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </StyledLabelBlock>
  );
}

export default LabelInput;


