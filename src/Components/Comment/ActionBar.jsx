import React from 'react'
import styled from 'styled-components'


const ActionBar = ({id, rating}) => {
    return (
        <Container>
            <div>
                {rating || '-'}/5
            </div>
            <div>
                Odpowiedz
            </div>
        </Container>
    )
}

export default ActionBar


const Container = styled.div`
    flex-grow: 1;
    align-self: flex-end;    
    display: flex;
    align-items: flex-end;
    width: 100%;
    justify-content: space-between;
    
`
