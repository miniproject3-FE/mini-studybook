import React, { useEffect, useRef } from 'react';
import { StyledContainer, StyledLabel, StyledInner, StyledImage } from './styles';
import DragImage from '../../assets/images/dragdrop.png';

function DragBox(props) {
  const dragRef = useRef(null);

  const saveImage = (file) => {
    if (file) {
      URL.revokeObjectURL(props.image.preview_URL);
      const preview_URL = URL.createObjectURL(file);
      props.setImage(() => ({
        image_file: file,
        preview_URL: preview_URL,
      }));
    }
  };

  const deleteImage = () => {
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
    if (props.defaultImage !== '') {
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
