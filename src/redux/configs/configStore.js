/**
 *
 * 작성자 : 박찬우
 * 목적 : redux의 store를 생성한다.
 * 작성 날짜 : 2023.03.18
 *
 */

import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import loginSlice from '../modules/loginSlice';

const store = configureStore({
    reducer: {
        login: loginSlice,
    }
=======
import singup from '../modules/signupSlice';
import login from '../modules/loginSlice'

const store = configureStore({
  reducer: {
    singup,
    login,
  },
>>>>>>> formerge
});

export default store;
