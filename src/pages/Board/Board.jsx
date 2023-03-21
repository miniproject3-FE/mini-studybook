import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import LabelInput from '../../components/LabelInput';
import LabelTextArea from '../../components/LabelTextarea/LabelTextArea';

function Board() {
  return (
    <StyledWrap>
      <StyledBoardBlock>
        <StyledImageBlock>
          <StyledPlus>+</StyledPlus>
        </StyledImageBlock>
        <StyledBodyBlock>
          <LabelInput fontSize="30px" label="제목" size="board"></LabelInput>
          <LabelTextArea id="boardTextarea" label="내용" />
          <StyledButtonBox>
            <Button size="medium" value="저장하기" />
          </StyledButtonBox>
        </StyledBodyBlock>
      </StyledBoardBlock>
    </StyledWrap>
  );
}

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
  height: 1000px;
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

const StyledBodyBlock = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-top: 20px;
`;

export default Board;
