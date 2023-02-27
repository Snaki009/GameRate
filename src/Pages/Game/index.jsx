import { Grid } from '@mui/material';
import React, {useEffect, useState} from 'react'
// import { useParams } from 'react-router';
import styled from 'styled-components';
import Comment from '../../Components/Comment';
import AddComment from '../../Components/Comment/AddComment';
import Section from '../../Components/Layout/Section';
import { ApiClient } from '../../API/httpService'

const apiClient = new ApiClient()

const mockGame = {
    id: 1,
    name: "Hogwart's Legacy",
    coverImg: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/0921/dR9KJAKDW2izPbptHQbh3rnj.png',
    developer: ['Avalanche Software', 'Portkey Games'],
    publisher: 'Warner Bros. Interactive Entertainment',
    score: '8.4',
    platforms: ['ps4, ps5, pc, xone, xsx'],
    description: `LIVE THE UNWRITTEN - Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. Now you can take control of the action and be at the center of your own adventure in the wizarding world. Embark on a journey through familiar and new locations as you explore and discover fantastic beasts, customize your character and craft potions, master spell casting, upgrade talents, and become the wizard you want to be.
Experience Hogwarts in the 1800s.Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart.You have received a late acceptance to the Hogwarts School of Witchcraft and Wizardry and soon discover that you are no ordinary student: you possess an unusual ability to perceive and master Ancient Magic.Only you can decide if you will protect this secret for the good of all, or yield to the temptation of more sinister magic.
Discover the feeling of living at Hogwarts as you make allies, battle Dark wizards, and ultimately decide the fate of the wizarding world.Your legacy is what you make of it`
}



const Game = () => {
    // const params = useParams()
    const [comments, setComments] = useState([])
    const appendComment = (response) => {
        const tempComm = comments 
        comments.unshift({...response})
        setComments([...tempComm])
    }

    useEffect(() => {
        apiClient.getComments(15).then(response => {
            console.log(response)
            setComments(response.data.results)
        })
    }, [])
    
    return (
        <div>
            <Card>
            <Grid container spacing={0}>
                <Grid item xs={6} md={6}>
                    <Grid container >
                        <Grid item>
                            <Header>{mockGame.name}</Header>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={6} md={6} padding={0}>
                    <MainImg src={mockGame.coverImg} />
                </Grid>
                </Grid>
            </Card>

            <Section header="Komentarze">
                <CommentSection>
                    <AddComment
                        addComment={appendComment}
                        id={mockGame.id}
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