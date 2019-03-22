/**
 * Function to find the number of matching letters between the `guessedWord` and `secretWord`.
 * Each matching letter between `guessedWord` and `secretWord` is only counted once.
 * @param {string} guessedWord - Guessed Word.
 * @param {string} secretWord - Secret Word.
 * @returns {Number} - Number of letters matched.
 */
export const getLetterMatchCount = (guessedWord, secretWord) => {
  const lettersAlreadyCounted = [];
  let matchCount = 0;
  const guess = guessedWord.toLowerCase();
  const secret = secretWord.toLowerCase();
  guess.split('').forEach(letter => {
    if (secret.includes(letter) && !lettersAlreadyCounted.includes(letter)) {
      matchCount++;
      lettersAlreadyCounted.push(letter);
    }
  });
  return matchCount;
};
