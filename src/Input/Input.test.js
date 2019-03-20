import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../test/test-utils';

import { Input } from './Input';

/**
 * Factory function to create a ShallowWrapper for the Conrats component
 * @param {object} props
 * @param {any} state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Input {...props} />);
  if (state) wrapper.state(state);
  return wrapper;
};

describe('renders correct content', () => {
  let wrapper;

  beforeEach(() => {
    const props = { success: false };
    wrapper = setup(props);
  });

  describe('when secret word has not been guessed', () => {
    test('renders component without errors', () => {
      const component = findByTestAttr(wrapper, 'input-component');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const input = findByTestAttr(wrapper, 'input-box');
      expect(input.length).toBe(1);
    });
    test('renders submit button', () => {
      const button = findByTestAttr(wrapper, 'submit-button');
      expect(button.length).toBe(1);
    });
  });

  describe('when secret word has been guessed', () => {
    test('renders component without errors', () => {});
    test('does not render input box', () => {});
    test('does not render submit button', () => {});
  });
});

describe('updates state correctly', () => {});
