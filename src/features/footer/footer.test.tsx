import { render, screen } from '@testing-library/react';

import { station } from '../../mocks/db/station.db';
import Footer from './footer';

test('render footer without content', async () => {
  render(<Footer />);

  expect(screen.queryByText(/currently playing/i)).toBeNull();
});

test('render footer with content', async () => {
  render(<Footer stationName={station.name} />);

  expect(screen.getByText(station.name)).toBeInTheDocument();
  expect(screen.getByText(/currently playing/i)).toBeInTheDocument();
});
