/**
 * 작성자: 김은영
 * 목적: Posts에 붙일 Card 생성
 * 날짜: 2023-03-21
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCookies } from "react-cookie";

function Card(board) {
    
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies(['token']);

    return(
        <StyledCardBox>
            <StyledCard
            onClick={()=> {
                navigate('/post/{board.id}')
            }}
            >
                <Title>안녕하신지{board.title}</Title>
                <Contents>이것은 내용이다{board.content}</Contents>
            </StyledCard>
                {!cookie.token? <Like></Like> : board.islike? <Like>❤️</Like> : <Like>🤍</Like>}
                

        </StyledCardBox>
    )
};

export default Card;

const StyledCardBox = styled.div`
    width: 250px;
    height: 250px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    gap: 20px;
`
const StyledCard = styled.div`

`
const Title = styled.div`
    border: 1px dotted black;
    font-size: 25px;
`
const Contents = styled.div`
    border: 1px dotted black;
    font-size: 15px;
`
const Like = styled.div`
    border: 1px dotted black;
    align-self: flex-end;
`