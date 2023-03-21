/**
 * 작성자 : 박찬우
 * 목적 : 게시글 작성, 수정
 * 작성 날짜 : 2023.03.21
 *
 */

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import { __boardLike, __boardModify, __getBoard } from '../../redux/modules/boardSlice';

function Detail() {
  //const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getServer = useRef(false);

  //도메인에서 현재페에지 id 값 가져오기
  const { id } = useParams();
  const { isLoading, isError, data } = useSelector((state) => state.board);

  const handlerClickLike = (e) => {
    e.preventDefault();
    dispatch(__boardLike(id));
  };

  const handlerClickModify = (e) => {
    e.preventDefault();
    navigate(`/board/${id}`);
  };
  useEffect(() => {
    console.log('getboard');
    dispatch(__getBoard(id));
    console.log('datatttt', data);
  }, []);

  console.log('selector', data);
  return (
    <StyledWrap>
      <StyledContainer>
        <StyledImageBox>이미지</StyledImageBox>
        <StyledContentBox>
          <StyledAutherBlock>{data.loginid}</StyledAutherBlock>
          <StyledTitleBlock>{data.title}</StyledTitleBlock>
          <StyledContentBlock>{data.content}</StyledContentBlock>
          <StyledLikeBlock>
            <StyledLikeBox onClick={handlerClickLike}>좋아요</StyledLikeBox>
            <StyledButton onClick={handlerClickModify}>수정</StyledButton>
          </StyledLikeBlock>
        </StyledContentBox>
      </StyledContainer>
    </StyledWrap>
  );
}

const StyledButton = styled.div`
  height: 30px;
  width: 50px;
  background-color: blue;
  margin-right: 20px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLikeBox = styled.div`
  width: 30px;
  height: 30px;
  background: red;
  margin-left: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLikeBlock = styled.div`
  display: flex;
  width: inherit;
  height: 5vh;
  justify-content: space-between;
  align-items: center;
  background-color: #3b1e1e;
`;

const StyledContentBlock = styled.div`
  display: flex;
  width: inherit;
  height: 45vh;
  justify-content: center;
  align-items: center;
  background-color: #781a1a;
`;

const StyledTitleBlock = styled.div`
  display: flex;
  width: inherit;
  height: 5vh;
  justify-content: center;
  align-items: center;
  background-color: #8c3e3e;
`;

const StyledAutherBlock = styled.div`
  display: flex;
  width: inherit;
  height: 5vh;
  justify-content: center;
  align-items: center;

  background-color: #4f3c3c;
`;

const StyledContainer = styled.div`
  background: lightgray;
  display: flex;
`;

const StyledImageBox = styled.div`
  width: 50vw;
  height: 60vh;
  background: gray;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContentBox = styled.div`
  width: 30vw;
  height: 60vh;
  background: #4c4c4c;
`;

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default Detail;
