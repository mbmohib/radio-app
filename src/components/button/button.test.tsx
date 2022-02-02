import { render, screen } from '@testing-library/react';

import Button from './button';

test('render with Text', async () => {
  const buttonLabel = 'Click Me!';
  render(<Button>Click Me!</Button>);

  expect(screen.getByRole('button')).toHaveTextContent(buttonLabel);
});
