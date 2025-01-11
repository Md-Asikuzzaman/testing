import { render, screen } from '@testing-library/react';
import Hello from '../../components/day-1/Hello';

test('should render hello text', () => {
  render(<Hello />);
  const text = screen.getByText(/hello/i);

  expect(text).toBeInTheDocument();
});
