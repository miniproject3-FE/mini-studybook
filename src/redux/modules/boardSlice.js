/**
 * 작성자: 김은영
 * 목적: 게시글 정보를 가져오기 위한 slice생성
 * 날짜: 2023-03-21
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import api from "../../axios/api"

export const __getBoards = createAsyncThunk('GET_BOARDS', async (payload, thunkAPI) => {
    try {
        const {data} = await api.get('/api/post')
        console.log('get response.data->', data)
        return thunkAPI.fulfillWithValue(data)
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
    }
})

const initialState = {
    data: [
        {
            "id": 2,
            "title": "title01",
            "loginid": "id011111",
            "islike": false
        },
        {
            "id": 1,
            "title": "title01",
            "loginid": "id011111",
            "islike": false
        }
    ],
    error: null,
    isLoading: false,
    isSuccess: false,
}



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
    [__getBoards.pending]: (state, action) => {
        state.isLoading = true
    },
    [__getBoards.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data
        console.log('get state.data ->', state.data)
    },
    [__getBoards.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload
    }
  },
});

export default boardSlice.reducer;
