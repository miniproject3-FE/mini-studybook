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
