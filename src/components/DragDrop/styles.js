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
`;

const StyledInner = styled.div`
  width: 100%;
  height: 300px;
  margin: 64px auto;
  border-radius: 8px;
  font-size: 16px;
  line-height: 128px;
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
  object-position: center;
  object-fit: cover;
  border-radius: 8px;

  opacity: 1;
  &:hover {
    opacity: 0.5;
  }
`;

export { StyledContainer, StyledLabel, StyledInner, StyledImage };
