import styled from 'styled-components';

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
`;

const StyledTimeBlock = styled.div`
  display: flex;
  width: inherit;
  height: 5vh;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 0.2px solid gray;

  color: #1d7b7b;
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

`;

const StyledAuther = styled.div`
  margin-right: 30px;
`;

const StyledContentBlock = styled.div`
  display: flex;
  width: inherit;
  height: 40vh;
  justify-content: flex-start;
`;

const StyledContent = styled.div`
  width: inherit;
  height: 25vh;
  margin: 30px;
  font-size: 20px;
  font-weight: 700px;
`;

const StyledTitleBlock = styled.div`
  display: flex;
  width: inherit;
  height: 5vh;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700px;

  border-bottom: 2px solid lightgray;
`;

const StyledImageBox = styled.div`
  width: 50vw;
  height: 60vh;

  border-radius: 0, 0 0, 10px;
  border-right: 3px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  border: 0.2px solid gray;
  border-radius: 10px;
  display: flex;

  border: 1px solid lightgray;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const StyledContentBox = styled.div`
  width: 30vw;
  height: 60vh;
  border-radius: 10px;
`;

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
  border-radius: 8px;
`;

export {
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
};
