import React from 'react'
import { useNavigate } from 'react-router'

export default function GameFinished() {
    const navigate = useNavigate()
    return (
        <div className='gameOverPage'>
            <h1>Good job!</h1>
            <button onClick={()=>{
                navigate('/game')
            }}>Restart</button>
        </div>
    )
}
