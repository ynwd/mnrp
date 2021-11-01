import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const pElement = screen.getByText(/The Best Interface Is No Interface/i);
  expect(pElement).toBeInTheDocument();
});
