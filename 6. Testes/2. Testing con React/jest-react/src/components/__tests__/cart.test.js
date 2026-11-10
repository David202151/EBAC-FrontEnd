import react from 'react';
import { render, screen } from '@testing-library/react';
import Cart from '../Cart';


describe('Cart component', () => {
  it('renders a list of items when items are provided', () => {
    const items =[
        { id: 1, name: 'Product 1', price: 10 }, 
        { id: 2, name: 'Product 2', price: 20 }
    ]; 
    render(<Cart items={items} />);
    const cartItems = screen.getByText(`${items[0].name} - $${items[0].price}`);
    expect(cartItems).toBeInTheDocument();
  });
}); 