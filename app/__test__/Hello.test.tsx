import { render, screen } from '@testing-library/react';
import Hello from '../components/Hello';

test('should render hello text', () => {
  render(<Hello />);
  const text = screen.getByText(/hello/i);

  expect(text).toBeInTheDocument();
});
