/**
 * 작성자: 김은영
 * 목적: Posts에 붙일 Card 생성
 * 날짜: 2023-03-21
 * 수정: styles 분리
 * 수정 날짜: 2023-03-22
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../auth/Cookie";
import { StyledCardBox, StyledCard, Title, Contents, Like, Image } from './styles'
import logo from '../../assets/images/logo2.png'

function Card(board) {
    
    const navigate = useNavigate();
    console.log('board에 들어왔는지', board.board.islike)

    return(
        <StyledCardBox>
            <StyledCard
            onClick={()=> {
                navigate(`/detail/${board.board.id}`)
            }}
            >
                <Image src={logo} alt="logo" />
                <Title>{board.board.title}</Title>
                <Contents></Contents>
            </StyledCard>
                {
                !getCookie('token')? <Like></Like>
                : board.board.islike? <Like>❤️</Like> 
                : <Like>🤍</Like>
                }
        </StyledCardBox>
    )
};

export default Card;