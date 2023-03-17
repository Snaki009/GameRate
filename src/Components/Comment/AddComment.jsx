import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, Button, TextField } from '@mui/material';
import { styled as styledMui } from '@mui/system';
import AnonImg from '../../Assets/anon.png'
import { Icon } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { ApiClient } from '../../API/httpService'

const apiClient = new ApiClient()


const AddComment = ({ id, addComment }) => {
    const [content, setContent] = useState('');
    const user = {
        username: 'You [wip]',
    }

    const addNewLine = () => {
        setContent(content + '\n')
        document.getElementById("comment-input").focus();
    }

    const submitComment = () => {
        apiClient.postComment(id, content,
        ).then(response => {
            addComment(response.data)
            setContent('')
        })
    }


    if(!user) return; 

    return (
        <Container>
            <Row>
                <ProfileTag sx={{display:{ xs: 'none', md: 'flex'}}}>
                    <StyledImg 
                        src={user.profileImg || AnonImg} 
                        alt="StyledImg" 
                    />
                    {user.username || 'user'}
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
                        id="comment-input" 
                        placeholder="Komentuj..."
                        multiline variant="standard" 
                        value={content}
                        onChange={e => setContent(e.target.value)}    
                    />
                    <AddGroup>
                        <AddButton 
                            variant="outlined"
                            onClick={submitComment}
                        >
                            Dodaj
                        </AddButton>
                        <StyledIcon 
                            component={KeyboardReturnIcon} 
                            onClick={addNewLine}
                        />
                    </AddGroup>
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
}))
const StyledIcon = styledMui(Icon)(() => ({
    height: '36px',
    marginLeft: '15px',
}))

const AddGroup = styledMui('div')(() => ({
    display: 'flex',
    alignItems: 'flex-end',
    maxWidth: '150px',
    marginTop: '5px',
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
