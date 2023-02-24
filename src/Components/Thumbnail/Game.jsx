import React from 'react'
import styled from 'styled-components'


const GameThumbnail = ({ data }) => {
    return (
        <Container>
            <Title>{data.name}</Title>
            <div>
                <MainImg src={data.mainImg} />
                <Score>{data.score}</Score>
            </div>
        </Container>
    )
}

export default GameThumbnail

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px;
    flex-direction: column;
    align-items: center;
`

const MainImg = styled.img`
    max-width: 100px;
`

const Title = styled.div`
    font-weight: 500;
    margin-bottom: 5px;
`

const Score = styled.div`
    position: relative;
    color: white;
    background-color: black;
    width: fit-content;
    bottom: 30px;
`
