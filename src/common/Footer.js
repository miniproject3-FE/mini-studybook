import React from 'react';
import styled from 'styled-components';

function Footer() {
  return <StyledFooter>footer</StyledFooter>;
}

const StyledFooter = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;

  position: fixed;
  bottom: 0;
  left: 0;
`;

export default Footer;
