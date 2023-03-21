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
import './DragBox.css';

function DragBox() {
  const dragRef = useRef(null);

  const [imageSrc, setImageSrc] = useState();

  const [image, setImage] = useState({
    image_file: '',
    preview_URL: '',
  });

  const saveImage = (file) => {
    if (file) {
      //새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
      URL.revokeObjectURL(image.preview_URL);
      const preview_URL = URL.createObjectURL(file);
      setImage(() => ({
        image_file: file,
        preview_URL: preview_URL,
      }));
    }
  };

  const deleteImage = () => {
    //createObjectURL()을 통해 생성한 기존 URL을 폐기
    URL.revokeObjectURL(image.preview_URL);
    setImage({
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

    return () => {
      URL.revokeObjectURL(image.preview_URL);
    };
  }, []);

  const sendImageToServer = async () => {
    if (image.image_file) {
      const formData = new FormData();
      formData.append('file', image.image_file);
      //await axios.post('/api/image/upload', formData);
      alert('서버에 등록이 완료되었습니다!');
      setImage({
        image_file: '',
        preview_URL: 'img/default_image.png',
      });
    } else {
      alert('사진을 등록하세요!');
    }
  };

  console.log(image);
  return (
    <main className="container">
      <label
        className="label"
        id="label"
        htmlFor="fileUpload"
        onDrop={handleDrop}
        onDragOver={(event) => {
          return dragFunction(event, 'over');
        }}
      >
        <div className="inner" id="inner">
          드래그하거나 클릭해서 업로드
        </div>
      </label>
      <input
        id="fileUpload"
        className="input"
        accept="image/*"
        type="file"
        required
        multiple
        hidden
        ref={dragRef}
        onChange={handleChange}
        onClick={(e) => (e.target.value = null)}
      />
      <p className="preview-title">preview</p>
      <div className="preview" id="preview"></div>
    </main>
  );
}

export default DragBox;
