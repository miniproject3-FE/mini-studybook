import styled from 'styled-components';
import logo from '../../assets/images/logo2.png';

const LogoBlock = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${logo});
  background-size: cover;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export { LogoBlock };
