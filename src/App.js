import './styles/Style.css'
import Game from './components/Game';
import GameOver from './components/GameOver'
import { Route, Routes, useNavigate } from 'react-router';
import { useState } from 'react/cjs/react.development';
import GameFinished from './components/GameFinished';

function App() {
  var navigate = useNavigate()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
        <div className='startGame'>
          <h1>Let's play a game</h1>
          <button onClick={()=>{navigate('/game')}}>Start game</button>
        </div>
        } />
        <Route path="/game" element={<Game />} />
        <Route path="/game-over" element={<GameOver />} />
        <Route path="/game-finished" element={<GameFinished />} />
      </Routes>
      
    </div>
  );
}

export default App;
