import react from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

describe( 'Counter component', () => {
  it('increments the count when the increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    const countElement = screen.getByText(/Counter: 0/);

    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent('Counter: 1');
  });

  it('decrements the count when the decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('Decrement');
    const countElement = screen.getByText(/Counter: 0/);

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent('Counter: -1');
  });
}); 