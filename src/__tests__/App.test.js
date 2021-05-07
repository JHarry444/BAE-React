import { render } from '@testing-library/react';
import App from '../App';

test('matches snapshot', () => {
  expect(render(<App />)).toMatchSnapshot();
});

test('equals 2', () => {
  expect(1 + 1).toEqual(2);
})