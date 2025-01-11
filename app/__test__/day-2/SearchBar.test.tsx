import SearchBar from '@/app/components/day-2/SearchBar';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('SearchBar Component', () => {
  test('Display items from API after search', async () => {
    const mockItems = jest.fn().mockResolvedValue(['apple', 'mango', 'banana']);

    render(<SearchBar fetchResults={mockItems} />);

    fireEvent.change(screen.getByPlaceholderText(/search/i), {
      target: { value: 'apple' },
    });

    fireEvent.click(screen.getByText(/search/i));

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // verify result by API Call

    await waitFor(() => {
      expect(screen.getByText(/apple/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/mango/i)).toBeInTheDocument();
    expect(screen.getByText(/banana/i)).toBeInTheDocument();
  });
});
