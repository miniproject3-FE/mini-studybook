import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../axios/api';

const initialState = {
  data: [
    {
      createdAt: '2023-03-20 PM 8:28',
      id: 1,
      islike: false,
      totalCount: 0,
      loginid: 'id0222222',
      title: 'title06',
      imageUrl: '',
    },
  ],
  getDatas: [
    {
      id: '',
      title: '',
      islike: false,
      loginid: '',
      totalCount: 0,
    },
  ],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const __getBoards = createAsyncThunk('GET_BOARDS', async (payload, thunkAPI) => {
  try {
    const response = await api.get('/api/post');
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const __getBoard = createAsyncThunk('GET_BOARD', async (payload, thunkAPI) => {
  try {
    const response = await api.get(`/api/post/${payload}`);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const __boardWriting = createAsyncThunk(
  'BOARD_WRITING',
  async (payload, thunkAPI) => {
    try {
      const response = await api.post('/api/post', payload);
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
      const newPayload = {
        title: payload.title,
        content: payload.content,
      };
      const response = await api.put(`./api/post/${payload.id}`, newPayload);
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
      const response = await api.delete(`/api/post/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __boardLike = createAsyncThunk('BOARD_LIKE', async (payload, thunkAPI) => {
  try {
    const response = await api.post(`/api/post/${payload}`);
    return thunkAPI.fulfillWithValue(response.data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

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
    },
    [__boardDelete.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action;
    },

    [__getBoards.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getBoards.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.getDatas = action.payload;
    },
    [__getBoards.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__getBoard.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__getBoard.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__boardLike.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__boardLike.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data.data = {
        ...state.data.data,
        islike: action.payload.islike,
        totalCount: +action.payload.totalCount,
      };
    },
    [__boardLike.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action;
    },
  },
});

export default boardSlice.reducer;
