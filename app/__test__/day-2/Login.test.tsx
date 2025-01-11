import Login from '@/app/components/day-2/Login';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('Login workflow', () => {
  test('Display error message when login fails', async () => {
    const mockLogin = jest
      .fn()
      .mockRejectedValue(new Error('Invalid Credentials'));

    render(<Login login={mockLogin} />);

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: {
        value: 'wrong username',
      },
    });

    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: {
        value: 'wrong password',
      },
    });

    fireEvent.click(screen.getByText(/login/i));

    await waitFor(() =>
      expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument()
    );
  });

  test('Successful login', async () => {
    const mockLogin = jest.fn().mockResolvedValue({});

    render(<Login login={mockLogin} />);

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: 'asik' },
    });

    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: '123' },
    });

    fireEvent.click(screen.getByText(/login/i));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('asik', '123');
    });
  });
});
