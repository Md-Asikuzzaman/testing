import Button from '@/app/components/day-2/Button';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Button Component', () => {
  test('Check is the button exist', () => {
    render(<Button />);

    const btn = screen.getByText(/online/i);

    expect(btn).toBeInTheDocument();
    
    expect(screen.queryByText(/user online/i)).toBeNull();

    fireEvent.click(btn);

    expect(screen.getByText(/user online/i)).toBeInTheDocument();

    fireEvent.click(btn);
    expect(screen.queryByText(/user online/i)).toBeNull();
  });
});
