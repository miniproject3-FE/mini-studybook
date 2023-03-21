/**
 * 작성자: 김은영
 * 목적: 게시글 정보를 가져와서 펼치기
 * 날짜: 2023-03-21
 */

import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { __getBoards } from '../../redux/modules/boardSlice';
import Card from '../Card';

function Boards() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.data);

  const [test, setTest] = useState('');
  const [cookie, setCookie] = useCookies(['token']);

  console.log('boards', boards);

  useEffect(() => {
    console.log('useEffect');
    dispatch(__getBoards(cookie.token));
  }, []);

  return (
    <section>
      <Card />
      {boards && boards.map((board) => <Card key={board.id} board={board} />)}
      <input value={test} onChange={(e) => setTest(e.target.value)} />
    </section>
  );
}

export default Boards;
