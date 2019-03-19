import React, { Component } from 'react';
import './App.css';

import GuessedWords from '../GuessedWords/GuessedWords';
import Congrats from '../Congrats/Congrats';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[{ word: 'train', letterMatches: 3 }]} />
      </div>
    );
  }
}

export default App;
