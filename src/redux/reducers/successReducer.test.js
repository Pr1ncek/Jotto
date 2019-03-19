import successReducer from './successReducer';
import { actionTypes } from '../actions/index';

describe('returns false for `success` state', () => {
  const mockAction = { type: 'MOCK_ACTION' };
  const mockState = undefined;

  const expectedState = { success: false };

  test('when reducers are first initialized', () => {
    const returnedState = successReducer(mockState, mockAction);
    expect(returnedState).toEqual(expectedState);
  });
});

describe('returns true for `success` state', () => {
  const mockAction = { type: actionTypes.CORRECT_GUESS };
  const mockState = undefined;

  const expectedState = { success: true };

  test('if `CORRECT_GUESS` action type is received', () => {
    const returnedState = successReducer(mockState, mockAction);
    expect(returnedState).toEqual(expectedState);
  });
});
