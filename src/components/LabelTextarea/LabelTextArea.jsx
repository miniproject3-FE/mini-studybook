/**
 * 작성자 : 박찬우
 * 목적 : label + textArea + error 박스 컴포넌트
 * 작성 날짜 : 2023.03.21
 */

import React from 'react';
import { StyledBlock, StyledErrorDiv, StyledLabel, StyledTextarea } from './styles';

function LabelTextArea(props) {
  return (
    <StyledBlock>
      <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      <StyledTextarea
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required
      ></StyledTextarea>
      {props.isError ? <StyledErrorDiv>{props.error}</StyledErrorDiv> : null}
    </StyledBlock>
  );
}

export default LabelTextArea;
