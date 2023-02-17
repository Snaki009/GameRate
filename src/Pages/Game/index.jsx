import React from 'react'
import { useParams } from 'react-router';

const Game = () => {
    const params = useParams()
    
    return <div>Hello Game #{params.id}</div>
}

export default Game