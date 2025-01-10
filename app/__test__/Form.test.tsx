// Form.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from '../components/Form';

test('calls onSubmit with the input value', () => {
  const handleSubmit = jest.fn();
  render(<Form onSubmit={handleSubmit} />);

  const input = screen.getByPlaceholderText(/enter text/i);
  const submitButton = screen.getByText(/submit/i);

  // Type into the input field
  fireEvent.change(input, { target: { value: 'Test Input' } });

  // Submit the form
  fireEvent.click(submitButton);

  // Assert the handler is called with the correct value
  expect(handleSubmit).toHaveBeenCalledWith('Test Input');
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
