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

import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import api from "../../axios/api";
import axios from "axios";

const initialState = {
    users: [
        {
            userid: "",
            password: "",
        },
    ],
    isLoading: false,
    isError: false,
    error: null,
};




export const __login = createAsyncThunk(
    "login",
    async (payload, thunkAPI) => {
        try {
            console.log(payload)
            const response = await axios.post("http://localhost:3001/login", payload);
            console.log(response.data)
            return thunkAPI.fulfillWithValue(response.data);
            // token을 어디에 담아줄 지 같이 결정해요~~~
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);


const loginSlice = createSlice({
    name: "login",
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
            console.log(action)
        },
    },
});

export default loginSlice.reducer;