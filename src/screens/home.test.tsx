import { screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';

import { radioRequestFailed } from '../mocks/api/station.mock.api';
import { stations } from '../mocks/db/station.db';
import { server } from '../mocks/server';
import { render } from '../utils/test';
import Home from './home';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});
afterAll(() => {
  server.close();
});
afterEach(() => {
  server.resetHandlers();
});

test('render home with stations data and loading state', async () => {
  render(<Home />);

  expect(screen.getByRole('progressbar'));

  await waitFor(() => {
    stations.forEach(station => {
      expect(screen.getByText(station.name));
      expect(screen.getByText(station.frequency));
      expect(screen.queryByRole('progressbar')).toBeNull();
    });
  });
});

test('show error message if API request failed', async () => {
  server.use(rest.get('/radios', radioRequestFailed));

  render(<Home />);

  await waitFor(() => {
    expect(screen.getByRole('alert')).toHaveTextContent(/unavailable/i);
  });
});
