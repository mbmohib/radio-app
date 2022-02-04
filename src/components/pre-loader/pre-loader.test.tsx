import { render, screen } from '@testing-library/react';

import PreLoader from './pre-loader';

test('show loading & hide children if isLoading true', async () => {
  const text = 'render me!';
  render(<PreLoader isLoading={true}>{text}</PreLoader>);

  expect(screen.getByRole('progressbar')).toBeInTheDocument();
  expect(screen.queryByText(text)).toBeNull();
});

test('render children if isLoading false', async () => {
  const text = 'render me!';
  render(<PreLoader isLoading={false}>{text}</PreLoader>);

  expect(screen.queryByRole('progressbar')).toBeNull();
  expect(screen.getByText(text)).toBeInTheDocument();
});
