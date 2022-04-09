import React from 'react';
import './App.css';
import DisplayGames from './components/DisplayGames';
import GameContext from './context/GameContext';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import GameDetails from './components/GameDetails';
import PlayerDetails from './components/PlayerDetails'


function App() {
  return (
    <React.Fragment>
      <GameContext>
        <Router>
          <Routes>
            <Route path='/' element={<DisplayGames/>} />
            <Route path='/:id' element={<GameDetails/>} />
            <Route path='/player/:id' element={<PlayerDetails/>} />
          </Routes>
        </Router>
      </GameContext>
    </React.Fragment>
  );
}

export default App;
