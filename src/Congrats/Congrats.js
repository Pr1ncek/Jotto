import React from 'react';

/**
 * Functional react component for displaying a congrats message
 * @function
 * @param {object} props - Component props
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false)
 */
const Congrats = ({ success }) => {
  const message = success ? 'Congratulations! You guessed the word!' : '';
  return (
    <div data-test="congrats-component">
      <span data-test="congrats-message">{message}</span>
    </div>
  );
};

export default Congrats;
