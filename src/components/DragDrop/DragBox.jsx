/**
 * 작성자 : 박찬우
 * 목적 : image Drag & Drop
 * 작성 날짜 : 2023.03.22
 *
 * 리펙토링 :
 * readAsDataURL과 다르게 동기적으로 실행되고
 *  주어진 객체를 가리키는 URL을 DOMString으로 반환한다.
 * 창을 닫을 때 까지 유지되며, 그 전에 해제하기 위해서는 메모리 누수 방지를 위해
 * 앵간하면 revokeObjectURL()을 호출해야한다.
 * FileLeader와 달리 시간이 필요하지 않고 revoke만 잘해준다면 속도가 많이 빠르다
 */

import React, { useEffect, useRef, useState } from 'react';
import { StyledContainer, StyledLabel, StyledInner, StyledImage } from './styles';
import DragImage from '../../assets/images/dragdrop.png';

function DragBox(props) {
  const dragRef = useRef(null);

  const saveImage = (file) => {
    if (file) {
      //새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
      URL.revokeObjectURL(props.image.preview_URL);
      const preview_URL = URL.createObjectURL(file);
      props.setImage(() => ({
        image_file: file,
        preview_URL: preview_URL,
      }));
    }
  };

  const deleteImage = () => {
    //createObjectURL()을 통해 생성한 기존 URL을 폐기
    URL.revokeObjectURL(props.image.preview_URL);
    props.setImage({
      image_file: '',
      preview_URL: '',
    });
  };

  const handleChange = (event) => {
    event.preventDefault();
    const files = event.target.files;
    saveImage(files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    saveImage(files[0]);
  };

  const dragFunction = (event, type) => {
    event.preventDefault();
    event.stopPropagation();
  };

  useEffect(() => {
    //컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
    if (props.defaultImage !== '') {
      console.log('test');
      props.setImage({ ...props.image, preview_URL: props.defaultImage });
    }
    return () => {
      URL.revokeObjectURL(props.image.preview_URL);
    };
  }, []);

  return (
    <StyledContainer>
      <StyledLabel
        id="label"
        htmlFor="fileUpload"
        onDrop={handleDrop}
        onDragOver={(event) => {
          return dragFunction(event, 'over');
        }}
      >
        {props.image.image_file ? (
          <StyledInner id="inner">
            <StyledImage src={props.image.preview_URL} />
          </StyledInner>
        ) : props.image.preview_URL ? (
          <StyledImage src={props.image.preview_URL} />
        ) : (
          <StyledImage src={DragImage} />
        )}
      </StyledLabel>
      <input
        id="fileUpload"
        accept="image/*"
        type="file"
        required
        multiple
        hidden
        ref={dragRef}
        onChange={handleChange}
        onClick={(e) => (e.target.value = null)}
      />
    </StyledContainer>
  );
}
export default DragBox;
