import React from 'react'
import styled, { css } from 'styled-components';

function LabelInput({ label, size, type, id, value, onChange }) {
  return (
    <StyledLabelInput>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        size={size}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
    </StyledLabelInput>

  )
}

export default LabelInput;

const StyledLabelInput = styled.div`
  display: flex;
  gap: 50px;
`
const sizes = {
  Large: {width: "20rem", height: "2.5rem", fontSize: "1.5rem"},
  Medium: {width: "17rem", height: "2rem", fontSize: "1.25rem", },
  Small: {width: "12rem", height: "1.5rem", fontSize: "1rem" },
};


const StyledLabel = styled.label`
  font-weight: 700;
`
const StyledInput = styled.input`
  /* 공통 속성 */
  height: 1.75rem;
  width: 400px;
  /* border: none; */
  border-radius: 5px;
  outline: none;

  /* 개별속성 */
  ${({ size }) => size && // ${(props) = {sizes} => {sizes}}
    css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
    `
    };
`;


