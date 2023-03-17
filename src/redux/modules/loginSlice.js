import { createSlice } from "@reduxjs/toolkit";

/**
 * 작성자: 김은영, 박찬우
 * 목적: login시 필요한 slice생성
 * 작성 날짜: 2023-03-17
 */

const initialState = {
    "userId": "",
    "password": "",
    "userName": "",
    "email": "",
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: {

    }
});

export default loginSlice.reducer;