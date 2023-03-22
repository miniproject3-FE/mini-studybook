/**
 * 작성자: 김은영
 * 목적: 게시글 정보를 가져와서 펼치기
 * 날짜: 2023-03-21
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getBoards } from '../../redux/modules/boardSlice';
import Card from '../Card';
import { BoardContainer } from './styles';

function Boards() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.board.getDatas.data);

  useEffect(() => {
    console.log('navi시에 뜨는가?')
    dispatch(__getBoards());
  }, [dispatch]);
  
  return (
    <BoardContainer>
      { boards?.map((board) => <Card key={board.id} board={board} /> ) }
    </BoardContainer>
  );
}

export default Boards;