/**
 *
 * 작성자 : 박찬우
 * 목적 : redux의 store를 생성한다.
 * 작성 날짜 : 2023.03.18
 *
 */

import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import singup from '../modules/signupSlice';
import login from '../modules/loginSlice'
import board from '../modules/boardSlice';

const store = configureStore({
  reducer: {
    singup,
    login,
    board,
  },
});

export default store;
