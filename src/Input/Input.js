import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Input extends Component {
  render() {
    let content = null;
    if (this.props.success === false) {
      content = (
        <form className="form-inline">
          <input
            data-test="input-box"
            type="text"
            className="mb-2 mx-sm-3"
            id="word-guess-input"
            placeholder="Guess a word!"
          />
          <button data-test="submit-button" type="submit" className="btn btn-primary">
            Guess
          </button>
        </form>
      );
    }
    return <div data-test="input-component">{content}</div>;
  }
}

Input.propTypes = {
  success: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  success: state.success
});

export default connect(mapStateToProps)(Input);
