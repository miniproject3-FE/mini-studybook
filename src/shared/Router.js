import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main/Main';
import Signup from '../pages/Signup/Signup';
import Board from '../pages/Board/Board';
import Detail from '../pages/Detail/Detail';
import Modify from '../pages/Modify/Modify';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/board'} element={<Board />} />
        <Route path={'/detail/:id'} element={<Detail />} />
        <Route path={'/modify/:id'} element={<Modify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
