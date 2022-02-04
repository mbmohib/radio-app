import { render, screen } from '@testing-library/react';

import Button from './button';

test('render with Text', () => {
  const buttonLabel = 'Click Me!';
  render(<Button>{buttonLabel}</Button>);

  expect(screen.getByRole('button')).toHaveTextContent(buttonLabel);
});
