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
      alert(action.payload.data.msg);
    },
    [__logout.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__logout.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    [__logout.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      alert(action.payload.data.msg);
    },
  },
});

export default loginSlice.reducer;
