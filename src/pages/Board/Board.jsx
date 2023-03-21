/**
 * 작성자 : 박찬우
 * 목적 : 게시글 작성, 수정
 * 작성 날짜 : 2023.03.21
 *
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '../../components/Button';
import FormInput from '../../components/FormLabelInput';
import LabelTextArea from '../../components/LabelTextarea/LabelTextArea';
import useInput from '../../hooks/useInput';
import { __boardModify, __boardWriting } from '../../redux/modules/boardSlice';

function Board() {
  const [title, setTitle] = useInput();
  const [body, setBody] = useInput();
  const [isSave, setSave] = useState(false);
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();

    const paylaod = {
      title,
      content: body,
    };

    console.log('tst');
    isSave ? dispatch(__boardWriting(paylaod)) : dispatch(__boardModify(paylaod));
    setSave(!isSave);
  };

  console.log(isSave);
  return (
    <StyledWrap>
      <StyledBoardBlock>
        <StyledImageBlock>
          <StyledPlus>+</StyledPlus>
        </StyledImageBlock>
        <StyledBodyForm onSubmit={handlerSubmit}>
          {isSave === false ? (
            <>
              <FormInput
                value={title}
                onChange={setTitle}
                fontsize="30px"
                label="제목"
                size="board"
                disabled={true}
              ></FormInput>
              <LabelTextArea
                value={body}
                onChange={setBody}
                id="boardTextarea"
                label="내용"
              />
            </>
          ) : (
            <>
              {' '}
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  flexDirection: 'column',
                  height: '120px',
                }}
              >
                <StyledLabel>제목</StyledLabel>
                <StyledTitleBox>{title}</StyledTitleBox>
              </div>
              <StyledLabel>내용</StyledLabel>
              <div
                style={{
                  width: '100%',
                  height: '480px',
                  fontSize: '1.5rem',
                }}
              >
                {title}
              </div>
            </>
          )}

          <StyledButtonBox>
            {isSave ? (
              <Button size="medium" value="수정하기" />
            ) : (
              <Button size="medium" value="저장하기" />
            )}
          </StyledButtonBox>
        </StyledBodyForm>
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

export default Board;
