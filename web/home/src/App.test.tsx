import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import App from './App';

const server = setupServer(
  rest.get('/api', async (req, res, ctx) => {
    return res(ctx.text("The best interface is no interface"));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays greeting', async () => {
  render(<App />);
  const linkElement = await screen.findByText('The best interface is no interface');
  screen.debug()
  expect(linkElement).toBeInTheDocument();

});