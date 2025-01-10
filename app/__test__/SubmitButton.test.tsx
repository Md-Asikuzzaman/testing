import { fireEvent, render, screen } from '@testing-library/react';
import SubmitButton from '../components/SubmitButton';

describe('Should enable a button after a click', () => {
  test('enable button', () => {
    render(<SubmitButton />);

    const clickBtn = screen.getByText(/enable/i);
    const disableBtn = screen.getByText(/submit/i);

    expect(disableBtn).toBeDisabled();

    fireEvent.click(clickBtn);

    expect(disableBtn).toBeEnabled();
  });
});
