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
