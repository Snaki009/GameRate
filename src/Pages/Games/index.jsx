import { Grid } from '@mui/material';
import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { ApiClient } from '../../API/httpService'
import { Link } from 'react-router-dom';

const apiClient = new ApiClient()

const Games = () => {
    const [gamesData, setGamesData] = useState()

    useEffect(() => {
        apiClient.getGames().then(response => {
            setGamesData(response.data.results)
        })
    }, [])
    
    return (
        <div>
            {gamesData?.map(game => <><Link to={'/game/'+game.id}>{game.name}</Link><br/></>)}
        </div>
    )
}

export default Games

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