import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ApiClient } from '../../API/httpService'
import { Link } from 'react-router-dom';
import { ownEnum, playedEnum } from '../../consts/Collection';

const apiClient = new ApiClient()

const Collection = () => {
    const [gamesData, setGamesData] = useState()

    useEffect(() => {
        apiClient.getCollection('63fc9bea704c690934b1ac2a').then(response => {
            setGamesData(response.data.results)
        })
    }, [])
    return (
        <div>
            {gamesData?.map(game => <><Link to={'/game/' + game.id}> Game id: {game.id}</Link> | Rating: {game.rating} | Own: {ownEnum[game.ownStatus]} | Played: {playedEnum[game.playedStatus]} <br /></>)}
        </div>
    )
}

export default Collection

const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    font-size: 35px;
`

const MainImg = styled.img`
    width: 100%;
`

const Card = styled.div`
    background-color: #fafafa;
    box-shadow: 0px 0px 35px -10px rgba(0,0,0,0.15);
`

const CommentSection = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`