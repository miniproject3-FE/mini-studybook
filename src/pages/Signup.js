import React from 'react';
import styled from 'styled-components';
function Signup() {
  return (
    <StyledWrap>
      <StyledHeader></StyledHeader>
      <StyledForm></StyledForm>
    </StyledWrap>
  );
}

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.div``;

const StyledForm = styled.form``;

export default Signup;
