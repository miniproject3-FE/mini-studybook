import styled from 'styled-components';

import drapdrop from '../../assets/images/dragdrop.png';

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: right;
  gap: 10px;
`;

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const StyledBoardBlock = styled.div`
  width: 70vw;
  height: 70vh;
  border: 1px solid lightgray;
  display: flex;
  border-radius: 10px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const StyledPlus = styled.span`
  font-size: 110px;
  font-weight: 700;
`;

const StyledImageBlock = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 3px solid lightgray;
`;

const StyledBodyForm = styled.form`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 4vh;

  width: 100%;
`;

const StyledTitleBox = styled.div`
  width: 100%;
  height: 2.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const StyledImageBox = styled.div`
  width: 180px;
  height: 180px;

  background-image: url(${drapdrop});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 5px;
`;

const Styledline = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  margin: 20px 0;
`;

export {
  StyledButtonBox,
  StyledWrap,
  StyledBoardBlock,
  StyledPlus,
  StyledImageBlock,
  StyledBodyForm,
  StyledTitleBox,
  StyledImageBox,
  Styledline,
};
