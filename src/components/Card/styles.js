/**
 * 작성자: 김은영
 * 목적: style 분리
 * 날짜: 2023-03-22
 */

import styled from "styled-components"


const StyledCardBox = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledCard = styled.div`
    width: 300px;
    border-radius: 5px;
    margin: 0px auto;
    position: relative;
    display: block;
    margin: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

const Image =  styled.img`
    width: 300px;
    height: 300px;
    position: relative;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const Title = styled.div`
    font-size: 15px;
    width: 300px;
    height: 300px;
    text-align: center;
    line-height: 300px;
    /* justify-content: space-between; */
    position: absolute;
    top: 0px;
    left: 0px;
    color: rgba(255,255,255,0);

    &:hover {
        display: block;
        background-color : black;
        color: white;
        opacity: 0.65;
        cursor: pointer;
        font-size: 25px;
    }

`

const Like = styled.div`
    height: 25px;
    text-align: right;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
`

const Text = styled.div`   
    font-size: 16px;
`

export { StyledCardBox, StyledCard, Title, Image, Like, Text }