/**
 * 작성자 : 김은영, 박찬우
 * 목적 : 페이지들간 이동을 하기 위해서
 * 작성날짜 : 2023.03.17
 *
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main/Main';
import Signup from '../pages/Signup/Signup';
import Board from '../pages/Board/Board';
import Detail from '../pages/Detail/Detail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/board'} element={<Board />} />
        <Route path={'/detail/:id'} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
