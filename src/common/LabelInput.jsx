import React from 'react'
import styled, { css } from 'styled-components';


/**
 * 작성자 : 김은영
 * 목적 : 프로젝트 내에서 공통적으로 쓰일 label-input 컴포넌트 생성
 * 작성 날짜 : 2023-03-17 
 * 수정한 사람 : 박찬우
 * 수정 내용 :
 * 1. placeholder 추가
 * 2. required 추가 (form 유효성 검사)
 * 수정 날짜 : 2023-03-18
 */

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

//StyledLabelInput은 Input 으로 착각할 염려가 있지 않을까 싶습니다.
//StyledLabelBlock 이나 Wrap 이 좋지 않을까요?
const StyledLabelBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 10px;
  width: 460px;
`;

const sizes = {
  large: { width: '20rem', height: '2.5rem', fontSize: '1.5rem' },
  medium: { width: '17rem', height: '2rem', fontSize: '1.25rem' },
  small: { width: '12rem', height: '1.5rem', fontSize: '1rem' },
};

const StyledLabel = styled.label`
  font-weight: 700;
`;
const StyledInput = styled.input`
  /* 공통 속성 */
  height: 1.75rem;
  width: 400px;
  border: none;
  border-radius: 5px;
  outline: none;

  /* 개별속성 */
  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].width};
      height: ${sizes[size].height};
      font-size: ${sizes[size].fontSize};
    `}
`;
