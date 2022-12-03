import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Create virtual dom for argument JSX and expose it through screen global
  // rest is self explanatory
  render(<App />);
  const linkElement = screen.getByText(/learn/i);
  // assertion
  expect(linkElement).toBeInTheDocument();
});
