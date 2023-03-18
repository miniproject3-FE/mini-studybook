/**
 * 수정한 사람 : 박찬우
 * 수정 내용 :
 * 1. placeholder 추가
 * 2. required 추가 (form 유효성 검사)
 * 수정 날짜 : 2023-03-18
 */

import React from 'react';

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
