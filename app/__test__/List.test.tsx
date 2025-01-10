import { render, screen } from '@testing-library/react';
import List from '../components/List';

describe('Should render a list of items', () => {
  test('render list', () => {
    const names = ['asik', 'naeem', 'limon', 'emon'];
    render(<List items={names} />);

    names.forEach((name) => {
      const displayName = screen.getByText(name);
      expect(displayName).toBeInTheDocument();
    });
  });
});
