import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

function LogoBox({ props }) {
  return <LogoBlock />;
}

export default LogoBox;

const LogoBlock = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${logo});
  background-size: cover;
`;
