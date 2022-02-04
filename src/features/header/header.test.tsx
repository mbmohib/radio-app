import { render, screen } from '@testing-library/react';

import Header from './header';

test('render header', async () => {
  render(<Header />);

  expect(screen.getByText('stations')).toBeInTheDocument();
  expect(screen.getByAltText(/back/i)).toBeInTheDocument();
  expect(screen.getByAltText(/switch/i)).toBeInTheDocument();
});
