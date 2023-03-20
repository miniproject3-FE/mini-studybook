import React from 'react';
import { StyledBlock, StyledLabel, StyledTextarea } from './styles';

function LabelTextArea(props) {
  return (
    <StyledBlock>
      <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      <StyledTextarea
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      ></StyledTextarea>
    </StyledBlock>
  );
}

export default LabelTextArea;
