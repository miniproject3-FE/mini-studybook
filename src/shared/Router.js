import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/signup"} element={<Signup />} />
            <Route path={"/login"} element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;