import { actionTypes } from '../actions/actions';

const initialState = [];

/**
 * @param {array} state - Array to words guessed by the user
 * @param {object} action
 * @returns {array} - New `guessedWords` state
 */
const guessedWordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_GUESS:
      const newGuess = {
        guessedWord: action.payload.guessedWord,
        letterMatchCount: action.payload.letterMatchCount
      };
      return [...state, newGuess];
    default:
      return state;
  }
};

export default guessedWordsReducer;
