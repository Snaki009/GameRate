import React from 'react'
import styled from 'styled-components'
import AnonImg from '../../Assets/anon.png'
import { styled as styled2 } from '@mui/system';
import ActionBar from './ActionBar';

const Comment = ({ data }) => {
    return (
        <Container>
            <Row>
                <ProfileTag>
                    <StyledImg src={data.author?.profileImg || AnonImg} alt="StyledImg" />
                    {data.author?.username}
                </ProfileTag>
                <Content>
                    <div>
                        {data.content}
                    </div>
                    <ActionBar rating={data?.rating}/>
                </Content>
            </Row>
        </Container>
    )
}

export default Comment

const StyledImg = styled.img`
    height: 70px;
`

const ProfileTag = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Content = styled2('div')(() => ({
    backgroundColor: 'white',
    flexGrow: 1,
    width: '100%',
    margin: '0 10px',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column'
}));

const Container = styled.div`
    flex-grow: 1;
    margin-bottom: 10px;
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    flex-grow: 1;
`
