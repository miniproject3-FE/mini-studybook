import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  __boardLike,
  __boardModify,
  __getBoard,
  __boardDelete,
  __getBoards,
} from '../../redux/modules/boardSlice';
import { getCookie } from '../../auth/Cookie';
import logoImage from '../../assets/images/logo2.png';
import {
  DetailButtons,
  StyledButton,
  StyledLikeBox,
  StyledLikeBlock,
  StyledTimeBlock,
  StyledTime,
  StyledAutherBlock,
  StyledAuther,
  StyledContentBlock,
  StyledContent,
  StyledTitleBlock,
  StyledImageBox,
  StyledContainer,
  StyledContentBox,
  StyledWrap,
  StyledImage,
} from './styles';

function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { isLoading, isError, data } = useSelector((state) => state.board.data);

  const token = getCookie(['token']);

  const handlerClickLike = () => {
    if (token === undefined) {
      alert('회원이 아닙니다. 로그인페이지로 이동합니다.');
      navigate('/login');
    } else {
      dispatch(__boardLike(id));
      dispatch(__getBoard(id));
    }
  };

  const handlerClickModify = () => {
    navigate(`/modify/${id}`);
  };

  const handlerClickDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(__boardDelete(id));
      dispatch(__getBoards());
      navigate('/');
    }
  };

  const handlerClickMainNav = () => {
    navigate('/');
  };

  useEffect(() => {
    dispatch(__getBoard(id));
  }, []);

  return (
    <StyledWrap>
      <StyledContainer>
        <StyledImageBox>
          {!data?.imageUrl ? (
            <StyledImage src={logoImage} />
          ) : (
            <StyledImage src={data.imageUrl} />
          )}
        </StyledImageBox>
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
              {!data?.ismine ? null : (
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

export default Detail;
