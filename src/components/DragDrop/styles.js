import styled from 'styled-components';

const StyledContainer = styled.main`
  width: 400px;
  text-align: center;
  padding: 10px;
`;

const StyledLabel = styled.label`
  width: 100%;
  height: 100%;
  margin: 0px auto;
  cursor: pointer;
  background-color: #3a3a3a;

  &:hover {
    background-color: #616161;
  }
`;

const StyledInner = styled.div`
  width: 100%;
  height: 300px;
  margin: 64px auto;
  border-radius: 8px;
  font-size: 16px;
  line-height: 128px;
  background-color: #3a3a3a;
  color: #bbb;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #616161;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  //이미지 영역안에 적절하게 정렬해서 배치하는 속성
  object-position: center;
  object-fit: cover;
  border-radius: 8px;
`;

export { StyledContainer, StyledLabel, StyledInner, StyledImage };
