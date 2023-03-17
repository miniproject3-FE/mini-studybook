/**
 * 작성자 : 김은영, 박찬우
 * 목적 : 페이지들간 이동을 하기 위해서
 * 작성날짜 : 2023.03.17
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Signup from '../pages/Signup';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
