import { render, screen } from '@testing-library/react';
import Button from '../Button';

test('Button test', () => {
  render(<Button />);

  const btn = screen.getByText('Button');
  expect(btn).toBeInTheDocument();
});
