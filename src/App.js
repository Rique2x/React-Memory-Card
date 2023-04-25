import React from 'react';
import './index';
import backgroundVideo from './assets/background.mp4';
import backgroundImage from './assets/background.png';

import {charArr} from '../src/utilities';
import { useState } from 'react';
import { Header, Scoreboard, Cards, GameOver } from './components/';

function App() {
  const [characters, setCharacters] = useState(charArr);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [canPlayAudio] = useState(1);

  const resetGame = () => {
    setScore(0);
    setSelected([]);
    setCharacters(charArr);
  };

  const onSelection = (obj) => (e) => {
    e.preventDefault();

    // If the selection already exists reset game
     if (selected.some((object) => object.name === obj.name)) {
      resetGame();
      return;
    }

    setScore(score + 1);
    setSelected([...selected, obj]);
    setCharacters([...characters.filter((char) => char.name !== obj.name)]);

    if (score === highScore) setHighScore(highScore + 1);
  };

 

  return (
    <div className="App">
      <Header />

      <Scoreboard score={score} highScore={highScore}/>
      
      {selected.length === charArr.length ? (
        <GameOver resetGame={resetGame} />
      ) : (
        <Cards characters={characters} selected={selected} onSelection={onSelection} canPlayAudio={canPlayAudio} />
      )}

      <video id="background-video" autoPlay loop muted playsInline poster={backgroundImage}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
