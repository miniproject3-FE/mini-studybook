import styled, { css } from 'styled-components';

/**
 * 수정한 사람 : 박찬우
 * 수정 내용 :
 * 1. input 과 label 위치가 통일되어 있지않아서 수정
 * 3. input의 height 기본 속성 제거 (이거 때매 높이가 안맞음)

 * 5. props로 인자 묶기 -> 보기 깔끔하기 위해서
 * 6. labelInput label 과 Input size 맞추기
 * 수정 날짜 : 2023-03-18
 */


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

const StyledLabelBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 10px;
  width: 460px;
`;

export { StyledLabel, StyledInput, StyledLabelBlock };
