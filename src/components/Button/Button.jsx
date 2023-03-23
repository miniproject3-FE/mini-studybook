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
