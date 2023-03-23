import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledCardBox, StyledCard, Title, Image, Like, Text } from './styles'
import logo from '../../assets/images/logo2.png'


function Card(board) {
    
    const navigate = useNavigate();
    const card = board.board

    return (
        <StyledCardBox>
            <StyledCard onClick={() => { navigate(`/detail/${card.id}`) }}>
                <Image src={logo} alt={logo} />
                <Title>{card.loginid}님의 카드</Title>
                {
                    board.board.islike ? 
                    <Like>
                        <Text> [{card.title}] </Text>
                        <Text> ❤️{card.totalCount} </Text>
                    </Like>
                    : <Like>
                        <Text> [{card.title}] </Text>
                        <Text> 🤍{card.totalCount} </Text>
                    </Like>
                }
            </StyledCard>
        </StyledCardBox>
    )
};

export default Card;