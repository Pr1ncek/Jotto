import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test/test-utils';

import GuessedWords from './GuessedWords';

const defaultProps = { guessedWords: [{ word: 'prince', letterMatches: 5 }] };

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component
 * @param {object} props
 * @param {any} state
 * @returns {ShallowWrapper}
 */
const setup = (props = defaultProps, state = null) => {
  const wrapper = shallow(<GuessedWords {...props} />);
  if (state) wrapper.state(state);
  return wrapper;
};

test('does not throw warning with with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there have been no words guessed yet', () => {
  let wrapper;
  const props = { guessedWords: [] };
  beforeEach(() => {
    wrapper = setup(props);
  });
  test('renders without errors', () => {
    const component = findByTestAttr(wrapper, 'guessed-words-component');
    expect(component.length).toBe(1);
  });
  test('renders instructions to guess a word', () => {
    const props = { guessedWords: [] };
    const wrapper = setup(props);
    const message = findByTestAttr(wrapper, 'instruction-message');
    expect(message.length).toBe(1);
  });
});

describe('if there are words guessed', () => {
  let wrapper;
  const props = {
    guessedWords: [
      { word: 'train', letterMatches: 1 },
      { word: 'river', letterMatches: 2 },
      { word: 'water', letterMatches: 4 },
      { word: 'party', letterMatches: 5 }
    ]
  };
  beforeEach(() => {
    wrapper = setup(props);
  });
  test('renders without errors', () => {
    const component = findByTestAttr(wrapper, 'guessed-words-component');
    expect(component.length).toBe(1);
  });
  test('renders "guessed words" section', () => {
    const section = findByTestAttr(wrapper, 'guessed-words-section');
    expect(section.length).toBe(1);
  });
  test('correct number of guessed words are displayed', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(4);
  });
});
