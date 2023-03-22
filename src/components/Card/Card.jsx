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
import { StyledCardBox, StyledCard, Title, Image, Like, Text } from './styles'
import logo from '../../assets/images/logo.png'


function Card(board) {
    
    const navigate = useNavigate();
    const card = board.board

    return (
        <StyledCardBox>
            <StyledCard onClick={() => { navigate(`/detail/${card.id}`) }}>
                <Image src={logo} alt={logo} />
                <Title>{card.title}</Title>
                {
                    !getCookie('token') ? 
                    <Like> {card.title} </Like>
                    : board.board.islike ? 
                    <Like> 
                        <Text>
                            {card.title}
                        </Text>
                        ❤️{card.likecount} 
                        </Like>
                    : <Like> {card.title}🤍{card.likecount} </Like>
                }
            </StyledCard>
        </StyledCardBox>

    )
};

export default Card;