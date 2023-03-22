import React from 'react';
import { LogoBlock } from './styles';

function LogoBox(props) {
  return <LogoBlock onClick={props.onClick} />;
}

export default LogoBox;
