/**
 * 작성자 : 박찬우
 * 목적 : 게시글 작성, 수정
 * 작성 날짜 : 2023.03.21
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import FormInput from '../../components/FormLabelInput';
import LabelTextArea from '../../components/LabelTextarea/LabelTextArea';
import useInput from '../../hooks/useInput';
import { __boardModify, __boardWriting } from '../../redux/modules/boardSlice';
import { useNavigate } from 'react-router-dom';

import {
  StyledButtonBox,
  StyledWrap,
  StyledBoardBlock,
  StyledImageBlock,
  StyledBodyForm,
  StyledContainer,
  StyledInner,
  StyledImage,
} from './styles';

import DragBox from '../../components/DragDrop/DragBox';

function Board() {
  const [title, setTitle] = useInput();
  const [body, setBody] = useInput();

  const [image, setImage] = useState({
    image_file: '',
    preview_URL: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (image.image_file) {
      const formData = new FormData();
      formData.append('file', image.image_file);
      //await axios.post('/api/image/upload', formData);
      alert('서버에 등록이 완료되었습니다!');
      setImage({
        image_file: '',
        preview_URL: 'img/default_image.png',
      });
    }

    const paylaod = {
      title,
      content: body,
    };

    dispatch(__boardWriting(paylaod)).then((response) => {
      if (response.type === 'BOARD_WRITING/fulfilled') {
        navigate('/');
      }
    });
  };

  return (
    <StyledWrap>
      <StyledBoardBlock>
        <StyledImageBlock>
          {<DragBox image={image} setImage={setImage} />}
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

export default Board;
