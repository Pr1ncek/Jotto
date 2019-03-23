import { getLetterMatchCount } from '../../helpers/helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  NEW_GUESS: 'NEW_GUESS'
};

/**
 * Redux Thunk function that dispatches `NEW_GUESS` action and (conditionally) `CORRECT_GUESS` action.
 * @param {string} guessedWord - Word guessed by the user
 * @param {string} secretWord - Secret Word
 * @returns {function} - Redux Thunk function
 */
export const guessWord = (guessedWord, secretWord) => dispatch => {
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
  dispatch({ type: actionTypes.NEW_GUESS, payload: { guessedWord, letterMatchCount } });
  if (guessedWord === secretWord) dispatch({ type: actionTypes.CORRECT_GUESS });
};
