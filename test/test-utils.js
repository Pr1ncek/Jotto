import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/redux/reducers/index';

/**
 * Create a testing store with reducers, middlewares, and initial state
 * globals: rootReducer
 * @param {object} initialState - Initial state for redux store
 * @returns {Store} - Redux store
 */
export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

/**
 * Returns node(s) with given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

/**
 * Checks if valid props are passed to component
 * @param {React.Component} component - React component
 * @param {object} conformingProps - Expected props for the component
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
};
