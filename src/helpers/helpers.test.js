import { getLetterMatchCount } from './helpers';

describe('getLetterMatchCount', () => {
  test('it returns the correct number of letters matched', () => {
    const secretWord = 'river';
    const guessedWord = 'liver';
    const numberOfLettersMatched = getLetterMatchCount(guessedWord, secretWord);
    expect(numberOfLettersMatched).toBe(4);
  });
  test('it returns the correct number of letters matched when there are duplicate letters in the `guessedWord`', () => {
    const secretWord = 'river';
    const guessedWord = 'fever';
    const numberOfLettersMatched = getLetterMatchCount(guessedWord, secretWord);
    expect(numberOfLettersMatched).toBe(3);
  });
  test('it returns 0 when there are no letters matched', () => {
    const secretWord = 'river';
    const guessedWord = 'block';
    const numberOfLettersMatched = getLetterMatchCount(guessedWord, secretWord);
    expect(numberOfLettersMatched).toBe(0);
  });
});
