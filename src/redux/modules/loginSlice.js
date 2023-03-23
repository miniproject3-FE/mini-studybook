/**
 * 작성자: 김은영, 박찬우
 * 목적: login시 필요한 slice생성
 * 작성 날짜: 2023-03-17
 * 
 * 작성자: 김은영
 * 목적: login시 필요한 Slice 구축
 * 작성 날짜: 2023-03-18
 *
 * 수정: 500error, payload 에러
 * 
 * 수정자 : 박찬우
 * 목적 : logout api 제거. (logout 시 클라이언트쪽에서 쿠기 제거만 한다.)
 * 작성 날짜 : 2023.03.21
 * 
 * 수성자: 김은영
 * 목적: reject 됐을 때 서버에서 받아온 error메세지를 띄우기 위해 수정.
 * 작성 날짜: 2023-03-22
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../axios/api';
import { setCookie } from '../../auth/Cookie';

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


export const __login = createAsyncThunk('Login', async (payload, thunkAPI) => {
  try {
    const response = await api.post('/api/auth/login', payload);
    setCookie('token', response.headers.authorization);
    return thunkAPI.fulfillWithValue(response.data); 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});


export const __logout = createAsyncThunk('logout', async (payload, thunkAPI) => {
  try {
    const response = await api.get('/api/auth/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});

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
      alert(action.payload.data.msg)
    },
  },
});

export default loginSlice.reducer;
