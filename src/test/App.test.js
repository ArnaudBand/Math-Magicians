import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

it('App renders correctly', () => {
  // eslint-disable-next-line no-undef
  const tree = renderer
    .create(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
