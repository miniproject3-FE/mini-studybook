/**
 * 수정한 사람 : 박찬우
 * 목적 : form 태그안에서 사용할 input 태그를 편하게 사용하기 위해 만듬
 * 작성 날짜 : 2023-03-18
 */
import React from 'react';
import { StyledErrorDiv, StyledLabel, StyledInput, StyledLabelBlock } from './styles';

function FormInput(props) {
  return (
    <StyledLabelBlock>
      <StyledLabel fontsize={props.fontsize} htmlFor={props.id}>
        {props.label}
      </StyledLabel>
      <StyledInput
        required
        size={props.size}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        ref={props.ref}
      />
      {props.isError ? <StyledErrorDiv>{props.error}</StyledErrorDiv> : null}
    </StyledLabelBlock>
  );
}

export default FormInput;
