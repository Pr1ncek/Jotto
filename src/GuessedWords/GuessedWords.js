import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
  let content;
  if (guessedWords.length === 0) {
    content = <h2 data-test="instruction-message">Guess a word!</h2>;
  } else {
    content = (
      <div data-test="guessed-words-section">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map((guess, i) => (
              <tr key={i} data-test="guessed-word">
                <td>{guess.word}</td>
                <td>{guess.letterMatches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return <div data-test="guessed-words-component">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      letterMatches: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
