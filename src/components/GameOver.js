import React from 'react'
import { useNavigate } from 'react-router'

export default function GameOver() {
    const navigate = useNavigate()
    return (
        <div className='gameOverPage'>
            <h1>Game over</h1>
            <button onClick={()=>{
                navigate('/game')
            }}>Restart</button>
        </div>
    )
}
