import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../modules/loginSlice';

const store = configureStore({
    reducer: {
        login: loginSlice,
    }
});

export default store;