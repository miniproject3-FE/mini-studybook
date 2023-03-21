/**
 * 작성자: 김은영
 * 목적: 게시글 정보를 가져오기 위한 slice생성
 * 날짜: 2023-03-21
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import api from "../../axios/api"

export const __getPosts = createAsyncThunk('GET_POSTS', async (payload, thunkAPI) => {
    try {
        const {data} = await api.get('/api/post')
        console.log('get response.data->', data)
        return thunkAPI.fulfillWithValue(data)
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
    }
})

const initialState = {
    posts: [
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

const getPostsSlice = createSlice({
    name: 'getPosts',
    initialState,
    reducers: {},
    extraReducers: {
        [__getPosts.pending]: (state, action) => {
            state.isLoading = true
        },
        [__getPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload.data
            console.log('get state.posts ->', state.data)
        },
        [__getPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default getPostsSlice.reducer;