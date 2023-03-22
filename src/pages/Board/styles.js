import styled from 'styled-components';
<<<<<<< HEAD
=======
import drapdrop from '../../assets/images/dragdrop.png';
>>>>>>> features/drag-and-drop

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
<<<<<<< HEAD
  width: 800px;
  height: 1100px;
  border: 1px solid green;
=======
  width: 1100px;
  height: 800px;
  border: 1px solid lightgray;
  display: flex;
  z-index: 100;
  border-radius: 10px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
>>>>>>> features/drag-and-drop
`;

const StyledPlus = styled.span`
  font-size: 110px;
  font-weight: 700;
`;

const StyledImageBlock = styled.div`
<<<<<<< HEAD
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
=======
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 3px solid lightgray;
>>>>>>> features/drag-and-drop
`;

const StyledBodyForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
<<<<<<< HEAD
=======
  width: 100%;
>>>>>>> features/drag-and-drop
`;

const StyledTitleBox = styled.div`
  width: 100%;
  height: 2.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

<<<<<<< HEAD
const StyledLabel = styled.label`
  font-size: 30px;
  font-weight: 700;
=======
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
>>>>>>> features/drag-and-drop
`;

export {
  StyledButtonBox,
  StyledWrap,
  StyledBoardBlock,
  StyledPlus,
  StyledImageBlock,
  StyledBodyForm,
<<<<<<< HEAD
=======
  StyledTitleBox,
  StyledImageBox,
  Styledline,
>>>>>>> features/drag-and-drop
};
