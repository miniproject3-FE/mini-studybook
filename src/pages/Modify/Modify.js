import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import FormInput from '../../components/FormLabelInput';
import LabelTextArea from '../../components/LabelTextarea/LabelTextArea';
import useInput from '../../hooks/useInput';
import DragBox from '../../components/DragDrop/DragBox';
import { useNavigate, useParams } from 'react-router-dom';
import {
  __boardModify,
  __boardWriting,
  __getBoard,
} from '../../redux/modules/boardSlice';
import {
  StyledButtonBox,
  StyledWrap,
  StyledBoardBlock,
  StyledImageBlock,
  StyledBodyForm,
} from './styles';

import defaultImage from '../../assets/images/logo2.png';

function Modify() {
  const [title, setTitle, changeTitle] = useInput();
  const [body, setBody, changeBody] = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState({
    image_file: '',
    preview_URL: '',
  });

  const { id } = useParams();

  const { isLoading, isError, data } = useSelector((state) => state.board.data);

  useEffect(() => {
    dispatch(__getBoard(id));
  }, []);

  useEffect(() => {
    if (data?.title !== undefined && data?.content !== undefined) {
      changeTitle(data?.title);
      changeBody(data?.content);
    }
  }, [data?.title, data?.content]);

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (image.image_file) {
      const formData = new FormData();
      formData.append('file', image.image_file);
      alert('서버에 등록이 완료되었습니다!');
      setImage({
        image_file: '',
        preview_URL: 'img/default_image.png',
      });
    }

    const paylaod = {
      title,
      content: body,
      id: id,
    };
 
    dispatch(__boardModify(paylaod)).then((response) => {
      if (response.type === 'BOARD_MODIFY/fulfilled') {
        navigate('/');
      }
    });
  };



  return (
    <StyledWrap>
      <StyledBoardBlock>
        <StyledImageBlock>
          {
            <DragBox
              image={image}
              setImage={setImage}
              image_files={data?.imageUrl}
              defaultImage={defaultImage}
            />
          }
        </StyledImageBlock>
        <StyledBodyForm onSubmit={handlerSubmit}>
          <FormInput
            value={title}
            onChange={setTitle}
            fontsize="30px"
            label="제목"
            size="board"
            disabled={true}
            placeholder="제목 입력..."
          ></FormInput>
          <LabelTextArea
            value={body}
            onChange={setBody}
            id="boardTextarea"
            label="내용"
            placeholder="내용 입력..."
          />
          <StyledButtonBox>
            <Button size="medium" value="저장하기" />
          </StyledButtonBox>
        </StyledBodyForm>
      </StyledBoardBlock>
    </StyledWrap>
  );
}

export default Modify;
