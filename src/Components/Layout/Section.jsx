import { Divider } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Section = ({ header, children }) => {
    return (
        <SectionBlock>
            <Header>
                {header}
            </Header>
            <Divider variant="middle" />
            <br/>
            <Content>
                {children}
            </Content>
        </SectionBlock>
    )
}

export default Section

const SectionBlock = styled.div`
    background-color: #efefef;
    padding: 15px;
    border-left: 2px solid #1976d2;
    border-radius: 10px;
    margin-bottom: 25px;
`
const Header = styled.h2`
    
`

const Content = styled.div`
    display: flex;
    justify-content: space-around;
    overflow-x: auto;
`