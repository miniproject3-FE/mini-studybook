import styled from 'styled-components';

const StyledFormContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 50px;
`;
const StyledHeader = styled.div`
  padding: 20px 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const StyledBody = styled.div`
  width: 500px;
`;

export { StyledFormContainer, StyledHeader, StyledForm, StyledBody };
