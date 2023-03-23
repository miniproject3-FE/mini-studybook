import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getBoards } from '../../redux/modules/boardSlice';
import Card from '../Card';
import { BoardContainer } from './styles';

function Boards() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.board.getDatas.data);

  useEffect(() => {
    dispatch(__getBoards());
  }, [dispatch]);

  return (
    <BoardContainer>
      {boards?.map((board) => (
        <Card key={board.id} board={board} />
      ))}
    </BoardContainer>
  );
}

export default Boards;
