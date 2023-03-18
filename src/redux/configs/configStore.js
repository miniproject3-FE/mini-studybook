import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import singup from '../modules/signupSlice';

const store = configureStore({
  reducer: {
    singup,
  },
});

export default store;
