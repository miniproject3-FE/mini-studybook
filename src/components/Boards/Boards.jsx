/**
 * 작성자: 김은영
 * 목적: 게시글 정보를 가져와서 펼치기
 * 날짜: 2023-03-21
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getBoards } from '../../redux/modules/boardSlice';
import Card from '../Card';

function Boards() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.board.getDatas.data);

  useEffect(() => {
    dispatch(__getBoards());
  }, [dispatch]);
  
  console.log('get boards->', boards)
  
  return (
    <section>
      { boards !== undefined? boards?.map((board) => <Card key={board.id} board={board} /> ): null}
    </section>
  );
}

export default Boards;