import React from 'react'
import styled from 'styled-components'
import { Box, Button, TextField } from '@mui/material';
import { styled as styledMui } from '@mui/system';
import AnonImg from '../../Assets/anon.png'


const AddComment = ({ data }) => {
    return (
        <Container>
            <Row>
                <ProfileTag sx={{display:{ xs: 'none', md: 'flex'}}}>
                    <StyledImg 
                        src={data?.author.profileImg || AnonImg} 
                        alt="StyledImg" 
                    />
                    {data?.author.username || 'user'}
                </ProfileTag>
                <Content
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            md: 'row'
                        }
                    }}>
                    <TextField 
                        sx={{flexGrow: 1}}
                        id="standard-basic" 
                        placeholder="Komentuj..."
                        multiline variant="standard" />
                    <AddButton variant="outlined">
                        Dodaj
                    </AddButton>
                </Content>
            </Row>
        </Container>
    )
}

export default AddComment

const ProfileTag = styledMui(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))

const Content = styledMui(Box)(() => ({
    flexGrow: 1,
    width: '100%',
    margin: '0 10px',
    padding: '5px',
    display: 'flex',
}))

const AddButton = styledMui(Button)(() => ({
    alignSelf: 'flex-end',
    display: 'flex',
    alignItems: 'flex-end',
    maxWidth: '150px',
    marginTop: '5px',
    marginLeft: '5px',
}))

const Container = styled.div`
    flex-grow: 1;
    margin-bottom: 10px;
`

const StyledImg = styled.img`
    height: 70px;
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    flex-grow: 1;
`
