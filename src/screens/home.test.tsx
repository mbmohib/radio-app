import { screen, waitFor } from '@testing-library/react';

import { stations } from '../mocks/db/station.db';
import { server } from '../mocks/server';
import * as radioApi from '../services/radio.api';
import { render } from '../utils/test';
import Home from './home';

beforeAll(() => {
  server.listen();
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
  // @ts-expect-error: Unreachable code error
  jest.spyOn(radioApi, 'useGetRadios').mockImplementation(() => ({
    isError: true,
  }));

  render(<Home />);

  await waitFor(() => {
    expect(screen.getByRole('alert')).toHaveTextContent(/unavailable/i);
  });
});
