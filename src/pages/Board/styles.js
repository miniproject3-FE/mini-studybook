import styled from 'styled-components';

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: right;
`;

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const StyledBoardBlock = styled.div`
  width: 800px;
  height: 1100px;
  border: 1px solid green;
`;

const StyledPlus = styled.span`
  font-size: 110px;
  font-weight: 700;
`;

const StyledImageBlock = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const StyledBodyForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledTitleBox = styled.div`
  width: 100%;
  height: 2.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label`
  font-size: 30px;
  font-weight: 700;
`;

export {
  StyledButtonBox,
  StyledWrap,
  StyledBoardBlock,
  StyledPlus,
  StyledImageBlock,
  StyledBodyForm,
};
