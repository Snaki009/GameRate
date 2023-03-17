import { Grid, MenuItem, Rating, Select, Stack, TextField } from '@mui/material';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components';
import Comment from '../../Components/Comment';
import AddComment from '../../Components/Comment/AddComment';
import Section from '../../Components/Layout/Section';
import { ApiClient } from '../../API/httpService'

const apiClient = new ApiClient()

const Game = () => {
    const gameId = useParams().id
    const [gameData, setGameData] = useState()

    const [comments, setComments] = useState([])


    const [userRating, setUserRating] = useState()
    const [played, setPlayed] = useState(0)
    const [owned, setOwned] = useState(0)
    const [ratingDetails, setRatingDetails] = useState()

    const appendComment = (response) => {
        const tempComm = comments 
        comments.unshift({...response})
        setComments([...tempComm])
    }

    useEffect(() => {
        apiClient.getGame(gameId).then(response => {
            setGameData(response.data)
        })
        apiClient.getOwnRating(gameId).then(response => {
            const {rating, description, ownStatus, playedStatus} = response.data
        
            setUserRating(rating || 0)
            setRatingDetails(description)
            setOwned(ownStatus || 0)
            setPlayed(playedStatus || 0)
        })
        apiClient.getComments(gameId).then(response => {
            setComments(response.data.results)
        })
    }, [gameId])

    const handleRatingChange = (event) => {
        setUserRating(event.target.value)
        apiClient.postRating(gameId, { rating: event.target.value })
    }

    const handleDescriptionChange = (event) => {
        setRatingDetails(event.target.value)
        apiClient.postRating(gameId, { description: event.target.value })
    }

    const handleOwnedChange = (event) => {
        setOwned(event.target.value)
        apiClient.postRating(gameId, { ownStatus: event.target.value })
    }

    const handlePlayedChange = (event) => {
        setPlayed(event.target.value)
        apiClient.postRating(gameId, { playedStatus: event.target.value })
    }
    
    return (
        <div>
            {gameData && <Card>
            <Grid container spacing={0}>
                <Grid item xs={6} md={6}>
                    <Grid container >
                        <Grid item md={12}>
                            <Header>{gameData.name}</Header>
                        </Grid>
                        <Grid item md={11}>
                                <div>{gameData.platforms.toString()}</div>
                        </Grid>
                        <Grid item md={6}>
                                Developer: <div>{gameData.developer.toString()}</div>
                        </Grid>
                        <Grid item md={6}>
                                Publisher: <div>{gameData.publisher.toString()}</div>
                        </Grid>
                        <Grid item md={12}>
                                <div>{gameData.description}</div>
                        </Grid>
                        <Grid item md={12}>
                                <div>Review score: {gameData.score?.reviewer}</div>
                        </Grid>
                        <Grid item md={12}>
                                <div>User score: {gameData.score?.user}</div>
                        </Grid>
                        <Grid item md={12}>
                                <div>Selection score: {gameData.score?.selection}</div>
                        </Grid>
                        <Grid item md={12}>
                             <div>Your rating: 
                                <Stack spacing={1}>
                                    <Rating 
                                        name="rating"
                                        precision={0.5} 
                                        value={userRating || 0}
                                        onChange={handleRatingChange}
                                    />
                                </Stack>
                                <TextField value={ratingDetails} onChange={handleDescriptionChange}/>
                                </div>
                        </Grid>
                        <Grid item md={12}>
                                <div>Collection Status:</div>
                                <Select
                                    labelId="owned-select"
                                    id="demo-simple-select-standard"
                                    value={owned}
                                    onChange={handleOwnedChange}
                                    label="Owned Status"
                                >
                                    <MenuItem value={0}>
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Owned</MenuItem>
                                    <MenuItem value={2}>Digital</MenuItem>
                                    <MenuItem value={3}>Want to buy</MenuItem>
                                    <MenuItem value={4}>Preordered</MenuItem>
                                    <MenuItem value={5}>Not Owned</MenuItem>
                                </Select>
                                <Select
                                    labelId="status-select"
                                    id="demo-simple-select-standard"
                                    value={played}
                                    onChange={handlePlayedChange}
                                    label="Played Status"
                                >
                                    <MenuItem value={0}>
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>100%</MenuItem>
                                    <MenuItem value={2}>Completed</MenuItem>
                                    <MenuItem value={3}>Dropped</MenuItem>
                                    <MenuItem value={4}>Started</MenuItem>
                                    <MenuItem value={5}>On-hold</MenuItem>
                                    <MenuItem value={6}>Want to play</MenuItem>
                                    <MenuItem value={7}>Not interested</MenuItem>
                                </Select>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={6} md={6} padding={0}>
                    <MainImg src={gameData.coverImg} />
                </Grid>
                </Grid>
            </Card>}

            <Section header="Komentarze">
                <CommentSection>
                    <AddComment
                        addComment={appendComment}
                        id={gameId}
                    />
                    {!!comments.length ? comments.map((comment) => 
                        <Comment 
                            data={comment} 
                        /> 
                    ) : 'No comments yet'}
                </CommentSection>
            </Section>
        </div>
    )
}

export default Game

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