import { fireEvent, render, screen } from '@testing-library/react';
import ToggleText from '../components/ToggleText';

it('should render toggle text', () => {
  render(<ToggleText />);

  const btn = screen.getByText(/show/i);

  expect(screen.queryByText(/hello world/i)).toBeNull();

  fireEvent.click(btn);
  expect(screen.getByText(/hello, world/i)).toBeInTheDocument();

  fireEvent.click(btn);
  expect(screen.queryByText(/hello world/i)).toBeNull();
});
