import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for displaying a congrats message
 * @function
 * @param {object} props - Component props
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false)
 */
const Congrats = ({ success }) => {
  const message = success ? 'Congratulations! You guessed the word!' : '';
  return (
    <div data-test="congrats-component" className="alert alert-success">
      <span data-test="congrats-message">{message}</span>
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
