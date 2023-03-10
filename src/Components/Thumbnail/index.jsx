import React from 'react'
import styled from 'styled-components'
import ChatIcon from '@mui/icons-material/Chat';
import { Divider, Icon } from '@mui/material';
import { styled as styledMui } from '@mui/system';
import { useNavigate } from 'react-router';


const Thumbnail = ({data}) => {
    const navigate = useNavigate()

    return (
        <Container onClick={() => navigate(`/article/${data.id}`)}>
            <MainImg src={data.mainImg} />
            <Details>
                <Title>{data.title}</Title>
                <Divider variant="middle" />
                <Row>
                    <Date>{data.date}</Date>
                    <Comments> {data.commentsCount}<IconStyled component={ChatIcon} /></Comments>
                </Row>
                <Short>{data.short}</Short>
                <Author>{data.author}</Author>
            </Details>
        </Container>
    )
}

export default Thumbnail

const IconStyled = styledMui(Icon)({
    height: '17px',

});

const Container = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    margin: 5px;
    background-color: white;
`
const Row = styled.div`
    display: flex;
    justify-content: space-between;
`

const MainImg = styled.img`
    width: 100%;
`

const Details = styled.div`
    padding: 5px;
`

const Title = styled.div`
    font-weight: 500;
    margin-bottom: 5px;
`

const Date = styled.div`
    display: inline-block;
    color: gray;
`

const Comments = styled.div`
    display: inline-block;
    white-space: break-spaces;
`
const Short = styled.div`
    
`
const Author = styled.div`
    text-align: end;
    color: gray;
`