import React from 'react';
import { StyledLabel, StyledInput, StyledLabelBlock } from './styles';

function LabelInput(props) {
  return (
    <StyledLabelBlock>
      <StyledLabel fontsize={props.fontsize} htmlFor={props.id}>
        {props.label}
      </StyledLabel>
      <StyledInput
        require={props.require}
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
