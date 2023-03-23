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
