import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('Button Component', () => {
  test('Found click me text', () => {
    render(<Button />);

    const btn = screen.getByText(/click me/i);
    expect(btn).toBeInTheDocument();
  });

  test('click me change to clicked text', () => {
    render(<Button />);

    const btn = screen.getByText(/click me/i);
    
    fireEvent.click(btn);
    expect(btn).toHaveTextContent(/clicked/i);
  });
});
