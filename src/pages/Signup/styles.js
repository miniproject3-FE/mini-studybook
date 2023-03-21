import styled from 'styled-components';

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.div`
  padding: 60px 0;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledBody = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export { StyledWrap, StyledHeader, StyledForm, StyledBody };
