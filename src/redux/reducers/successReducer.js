import { actionTypes } from '../actions/actions';

const initialState = { success: false };

/**
 * Changes the state if the secret word has been guessed
 * @function successReducer
 * @param {boolean} state  - Current success state
 * @param {object} action
 * @returns {boolean} - New success state
 */
const successReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return { ...state, success: true };
    default:
      return state;
  }
};

export default successReducer;
