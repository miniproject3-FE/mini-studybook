/**
 * 작성자: 김은영, 박찬우
 * 목적: login시 필요한 slice생성
 * 작성 날짜: 2023-03-17
 */
/**
 * 작성자: 김은영
 * 목적: login시 필요한 Slice 구축
 * 작성 날짜: 2023-03-18
 *
 * 수정: 500error, payload 에러
 */

import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import api from '../../axios/api';
import axios from 'axios';

const initialState = {
  users: [
    {
      loginid: '',
      password: '',
    },
  ],
  isLoading: false,
  isError: false,
  error: null,
};


export const __logout = createAsyncThunk('logout', async (payload, thunkAPI) => {
  try {
    const response = await api.get('/api/auth/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const __login = createAsyncThunk(
    "login",
    async (payload, thunkAPI) => {
        try {
            const response = await axios.post("${process.env.REACT_APP_URL}/api/auth/login", payload);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);


const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [__login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    [__login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log(action);
    },
    [__logout.pending]: (state, action) => {
      state.isloading = true;
    },
    [__logout.fulfilled]: (state, aciton) => {
      state.isloading = false;
      state.isError = false;
    },
    [__logout.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default loginSlice.reducer;
