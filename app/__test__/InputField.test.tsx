import { fireEvent, render, screen } from '@testing-library/react';
import InputField from '../components/InputField';

test('find input field', () => {
  render(<InputField />);

  const input = screen.getByPlaceholderText(/type something/i);

  fireEvent.change(input, {
    target: {
      value: 'hello world',
    },
  });

  expect(input).toHaveValue('hello world');
});
