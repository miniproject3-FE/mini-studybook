import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from '../../auth/Cookie';
import { __getBoards } from '../../redux/modules/boardSlice';
import { __logout } from '../../redux/modules/loginSlice';
import { __signout } from '../../redux/modules/signupSlice';
import { StyledHeader, StyledLi, StyledUl } from './styles';

function Header() {
  const dispatch = useDispatch();

  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  const handlerClickLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      setLogout(true);
      removeCookie('token');
      dispatch(__getBoards());
    }
  };

  const cookie = getCookie('token');

  const onClickWithdrawalHandler = () => {
    if (window.confirm('회원탈퇴 하시겠습니까?')) {
      dispatch(__signout()).then((response) => {
        if (response.type === 'WITHDRAWAL/fulfilled') {
          removeCookie('token');
          setLogout(true);
          dispatch(__getBoards());
        }
      });
    }
  };

  if (logout === true) {
    setLogout(false);
    navigate('/');
  }

  return (
    <StyledHeader>
      <StyledUl>
        <StyledLi
          onClick={() => { navigate('/board') }} > | Write </StyledLi>

        {
        cookie !== undefined 
        ? ( <StyledLi onClick={handlerClickLogout}> | Logout </StyledLi>) 
        : ( <StyledLi onClick={() => {navigate('/login')}}>| Login </StyledLi>)
        }

        {
        cookie !== undefined 
        ? (<StyledLi onClick={onClickWithdrawalHandler}> | SignOut </StyledLi>) 
        : (<StyledLi onClick={() => { navigate('/signup')}}> | Signup </StyledLi>)
        }
      </StyledUl>
    </StyledHeader>
  );
}

export default Header;
