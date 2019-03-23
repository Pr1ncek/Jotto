import { guessWord } from './actions/actions';
import store from './configureStore';

describe('when a user guesses a word', () => {
  const secretWord = 'party';

  describe('no words have been guessed yet, `guessedWords` state is an empty array', () => {
    test('the store should add the `guessedWord` and `letterMatchCount` to the `guessedWords` state', () => {
      store.dispatch(guessWord('train', secretWord));
      const expectedState = [{ guessedWord: 'train', letterMatchCount: 3 }];
      const updatedState = store.getState().guessedWords;
      expect(updatedState).toEqual(expectedState);
    });
  });
  describe('some words have been guessed', () => {
    test('the store should append the `guessedWord` and `letterMatchCount` to the `guessedWords` state', () => {
      store.dispatch(guessWord('water', secretWord));
      const expectedState = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'water', letterMatchCount: 3 }
      ];
      const updatedState = store.getState().guessedWords;
      expect(updatedState).toEqual(expectedState);
    });
  });
  test('if the `guessedWord` matches the `secretWord`, the `success` state should updated to true', () => {
    store.dispatch(guessWord('party', secretWord));
    const successState = store.getState().success;
    expect(successState.success).toBe(true);
  });
});
