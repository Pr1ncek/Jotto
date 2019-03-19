import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test/test-utils';

import Congrats from './Congrats';

/**
 * Factory function to create a ShallowWrapper for the Conrats component
 * @param {object} props
 * @param {any} state
 * @returns {ShallowWrapper}
 */
const setup = (props = { success: false }, state = null) => {
  const wrapper = shallow(<Congrats {...props} />);
  if (state) wrapper.state(state);
  return wrapper;
};

test('renders without errors', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'congrats-component');
  expect(component.length).toBe(1);
});
test('renders no text if `success` prop is false', () => {
  const props = { success: false };
  const wrapper = setup(props);
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text()).toEqual('');
});
test('renders "Congrats" if `success` prop is true', () => {
  const props = { success: true };
  const wrapper = setup(props);
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).toBeGreaterThan(0);
});
test('does not throw warning with with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
