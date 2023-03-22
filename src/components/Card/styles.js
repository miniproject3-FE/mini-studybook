/**
 * 작성자: 김은영
 * 목적: style 분리
 * 날짜: 2023-03-22
 */

import styled from "styled-components"

const StyledCardBox = styled.div`
    width: 250px;
    height: 500px;
    border-radius: 10px;
    margin: 20px;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    
`
const StyledCard = styled.div`
    
    
`

const Image =  styled.img`
    width: 250px;
    height: 250px;
    border-top-right-radius: 10px;;
    border-top-left-radius: 10px;
`

const Title = styled.div`
    font-size: 20px;
    width: 250px;
    height: 60px;
    text-align: center;
    line-height: 60px;
`
const Contents = styled.div`
    font-size: 15px;
    width: 250px;
    height: 140px;
    text-align: center;
    overflow: scroll;
`
const Like = styled.div`
    height: 25px;
    font-size: 30px;
    text-align: right;
    display: block;
    align-items: flex-end;
    margin: 10px 10px 10px 0;
`

export { StyledCardBox, StyledCard, Title, Contents, Like, Image }