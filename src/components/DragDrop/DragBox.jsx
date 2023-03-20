import React, { useRef, useState } from 'react';
import './DragBox.css';

function DragBox() {
  const dragRef = useRef(null);

  const [imageSrc, setImageSrc] = useState();

  const handleChange = (event) => {
    event.preventDefault();
    const files = changeEvent(event);

    encodeFileToBase64(files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    encodeFileToBase64(files[0]);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  console.log('imageSrc', imageSrc);
  function changeEvent(event) {
    const { target } = event;
    return [...target.files];
  }

  const dragFunction = (event, type) => {
    event.preventDefault();
    event.stopPropagation();
  };

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
      />
      <p className="preview-title">preview</p>
      <div className="preview" id="preview"></div>
    </main>
  );
}

export default DragBox;
