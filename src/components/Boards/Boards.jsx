/**
 * 작성자: 김은영
 * 목적: 게시글 정보를 가져와서 펼치기
 * 날짜: 2023-03-21
 */

<<<<<<< HEAD:src/components/Boards/Boards.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoards } from "../../redux/modules/boardSlice";
import Card from "../Card";


function Boards() {
=======
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getBoards } from '../../redux/modules/boardSlice';
import Card from '../Card';

function Posts() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.data);
>>>>>>> features/boardpage:src/components/Posts/Posts.jsx

  useEffect(() => {
    dispatch(__getBoards());
  }, []);

<<<<<<< HEAD:src/components/Boards/Boards.jsx
    useEffect(()=> {
        dispatch(__getBoards())
    },[]);

    return (
        <section>
            <Card />
            {
                boards && boards.map((board)=> <Card key={board.id} board={board} />)
            }
            
        </section>
    )
}

export default Boards;
=======
  return (
    <section>
      {boards.map((board) => {
        <Card key={board.id} />;
      })}
    </section>
  );
}

export default Posts;
>>>>>>> features/boardpage:src/components/Posts/Posts.jsx
