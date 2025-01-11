import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from '../../components/day-1/Checkbox';

test('should render hello text', () => {
  render(<Checkbox />);

  const checkBox = screen.getByRole('checkbox');
  const label = screen.getByText(/unchecked/i);

  expect(checkBox).not.toBeChecked();

  fireEvent.click(checkBox);

  expect(checkBox).toBeChecked();
  expect(label.textContent).toBe('Checked');
});
