/**
 * 작성자 : 박찬우
 * 목적:
 * thunk를 이용해서 서버에 비동기 통신을 하려고 한다.
 * 서버에 회원가입에 대한 정보 전달을 목적으로 한다.
 *
 * 수정자: 김은영
 * 목적: reject 됐을 때 서버에서 받아온 error메세지를 띄우기 위해 수정.
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../axios/api';

const initialState = {
  user: {
    userid: 'id01',
    username: 'name01',
    password: 'password01',
    email: 'aaa@bbbbb.com',
  },
  isLoading: false,
  isError: false,
  error: '',
};

export const __getData = createAsyncThunk('USER_DATA', async (payload, thunkAPI) => {
  try {
    const response = await api.get(`/user`);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __signup = createAsyncThunk('signup', async (payload, thunkAPI) => {
  try {
    const { data } = await api.post(`/api/auth/signup`, payload);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const __signout = createAsyncThunk('WITHDRAWAL', async (payload, thunkAPI) => {
  try {
    const { data } = await api.delete('/api/auth/deleteid', payload);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const signupSlice = createSlice({
  name: 'SING_UP',
  initialState,
  reducers: {},
  extraReducers: {
    // 회원가입
    [__signup.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__signup.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.isError = true;
      state.user = action.payload;
    },
    [__signup.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = action.payload;
      alert(action.payload.msg);
    },

    // 조회
    [__getData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    [__getData.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.isError = true;
    },

    // 회원탈퇴
    [__signout.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__signout.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      // alert(action.payload)
    },
    [__signout.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default signupSlice.reducer;
