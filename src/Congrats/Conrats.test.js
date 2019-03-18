import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../../test/test-utils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShallowWrapper from Conrats components
 * @param {object} props
 * @param {any} state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Congrats {...props} />);
  if (state) wrapper.state(state);
  return wrapper;
};

test('it renders without errors', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'congrats-component');
  expect(component.length).toBe(1);
});
test('it renders no text if `success` prop is false', () => {
  const props = { success: false };
  const wrapper = setup(props);
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text()).toEqual('');
});
test('it renders "Congrats" if `success` prop is true', () => {
  const props = { success: true };
  const wrapper = setup(props);
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).toBeGreaterThan(0);
});
