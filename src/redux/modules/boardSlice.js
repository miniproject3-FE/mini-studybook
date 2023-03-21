import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../axios/api';
const initialState = {
  data: { title: '', content: '' },
  isLoading: false,
  isError: false,
  error: '',
};

export const __getBoard = createAsyncThunk(
  'GET_BOARD',
  initialState,
  async (payload, thunkAPI) => {
    try {
      const response = await api.get(`/api/post/${payload}`);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {}
  }
);

export const __boardWriting = createAsyncThunk(
  'BOARD_WRITING',
  async (payload, thunkAPI) => {
    try {
      const response = await api.post('./api/post', payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __boardModify = createAsyncThunk(
  'BOARD_MODIFY',
  async (payload, thunkAPI) => {
    try {
      const response = await api.put(`./api/post/${payload.id}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __boardDelete = createAsyncThunk(
  'BOARD_DELETE',
  async (payload, thunkAPI) => {
    try {
      const response = await api.delete(`./api/post/${payload}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: {
    [__boardWriting.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__boardWriting.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.board = action;
    },
    [__boardWriting.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action;
    },

    [__boardModify.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__boardModify.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.board = action;
    },
    [__boardModify.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action;
    },

    [__boardDelete.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__boardDelete.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.board = action;
    },
    [__boardDelete.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action;
    },
  },
});

export default boardSlice.reducer;
