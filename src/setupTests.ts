// Importing @testing-library/jest-dom to add custom Jest matchers for asserting on DOM nodes
// This allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// Learn more: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom/extend-expect';

// Adding custom Jest matchers for asserting on the snapshot of a DOM node
// This allows you to do things like:
// expect(element).toMatchSnapshot()
// Learn more: https://jestjs.io/docs/en/snapshot-testing

import '@testing-library/jest-dom/matchers';

// Importing any other testing libraries or modules needed for testing
import { render } from '@testing-library/react';

// Implementing any helper functions needed for testing
function setup() {
  // Set up any necessary data, mocks, or spies here
  const utils = render(<MyComponent />);
  const { getByText } = utils;

  return {
    ...utils,
    getByText,
  };
}

// Writing the actual tests
describe('MyComponent', () => {
  it('renders the correct text', () => {
    const { getByText } = setup();
    getByText('Hello, world!');
  });

  it('matches the snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
