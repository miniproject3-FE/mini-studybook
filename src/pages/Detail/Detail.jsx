/**
 * 작성자 : 박찬우
 * 목적 : 게시글 작성, 수정
 * 작성 날짜 : 2023.03.21
 *
 *
 * 수정자: 김은영
 * 목적: 전반적인 스타일 수정, 수정/삭제버튼 기능 개발 및 연결, 좋아요 기능 수정
 * 작성 날짜: 2023-03-22
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  __boardLike,
  __boardModify,
  __getBoard,
  __boardDelete,
} from '../../redux/modules/boardSlice';
import jwt_decode from 'jwt-decode';
import { getCookie } from '../../auth/Cookie';

function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //도메인에서 현재페에지 id 값 가져오기
  const { id } = useParams();
  const { isLoading, isError, data } = useSelector((state) => state.board.data);

  //토큰 decode
  const token = getCookie(['token']);
  const loginId = jwt_decode(token).sub;

  const handlerClickLike = () => {
    dispatch(__boardLike(id));
    dispatch(__getBoard(id));
  };

  const handlerClickModify = () => {
    navigate(`/modify/${id}`);
  };

  const handlerClickDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(__boardDelete(id));
      navigate('/main');
    }
  };

  const handlerClickMainNav = () => {
    navigate('/main');
  };

  useEffect(() => {
    dispatch(__getBoard(id));
  }, []);

  return (
    <StyledWrap>
      <StyledContainer>
        <StyledImageBox>이미지</StyledImageBox>
        <StyledContentBox>
          <StyledTitleBlock>[ {data?.title} ]</StyledTitleBlock>
          <StyledContentBlock>
            <StyledContent> {data?.content} </StyledContent>
          </StyledContentBlock>
          <StyledAutherBlock>
            <StyledAuther> {data?.loginid} </StyledAuther>
          </StyledAutherBlock>
          <StyledTimeBlock>
            <StyledTime> {data?.createdAt} </StyledTime>
          </StyledTimeBlock>
          <StyledLikeBlock>
            {!data?.islike ? (
              <StyledLikeBox onClick={handlerClickLike}>
                🤍 {data?.totalCount}
              </StyledLikeBox>
            ) : (
              <StyledLikeBox onClick={handlerClickLike}>
                ❤️ {data?.totalCount}
              </StyledLikeBox>
            )}
            <DetailButtons>
              <StyledButton onClick={handlerClickMainNav}>완료</StyledButton>
              {loginId === data?.loginid && (
                <>
                  <StyledButton onClick={handlerClickModify}>수정</StyledButton>
                  <StyledButton onClick={handlerClickDelete}>삭제</StyledButton>
                </>
              )}
            </DetailButtons>
          </StyledLikeBlock>
        </StyledContentBox>
      </StyledContainer>
    </StyledWrap>
  );
}

const DetailButtons = styled.div`
  display: flex;
  margin-right: 18px;
`;

const StyledButton = styled.div`
  height: 30px;
  width: 50px;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  &:hover {
    color: #cbc9c9;
  }
`;

const StyledLikeBox = styled.div`
  width: 60px;
  height: 30px;
  /* background: red; */
  margin-left: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const StyledLikeBlock = styled.div`
  display: flex;
  width: inherit;
  height: 5vh;
  justify-content: space-between;
  align-items: center;
  /* background-color: #3b1e1e; */
`;

const StyledTimeBlock = styled.div`
  display: flex;
  width: inherit;
  height: 5vh;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 0.2px solid gray;

  /* border: 0.2px solid orange; */
`;

const StyledTime = styled.div`
  margin-right: 30px;
`;

const StyledAutherBlock = styled.div`
  display: flex;
  width: inherit;
  height: 5vh;
  align-items: center;
  justify-content: flex-end;

  /* background-color: #4f3c3c; */
`;

const StyledAuther = styled.div`
  margin-right: 30px;
`;

const StyledContentBlock = styled.div`
  display: flex;
  width: inherit;
  height: 40vh;
  justify-content: flex-start;

  /* border-bottom: 0.2px solid gray; */
  /* background-color: #781a1a; */
`;

const StyledContent = styled.div`
  width: inherit;
  height: 25vh;
  margin: 30px;
  overflow: scroll;
`;

const StyledTitleBlock = styled.div`
  display: flex;
  width: inherit;
  height: 5vh;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  /* background-color: #8c3e3e; */
`;

const StyledImageBox = styled.div`
  width: 30vw;
  height: 60vh;
  background: gray;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  /* background: lightgray; */
  border: 0.2px solid gray;
  border-radius: 2px;
  display: flex;
`;

const StyledContentBox = styled.div`
  width: 30vw;
  height: 60vh;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  /* background: #4c4c4c; */
`;

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default Detail;
