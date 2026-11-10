import react from 'react';

const Cart = ({ items }) => {
  return (
    <section>
        {items.length > 0 ? (
            <ul>
                {items.map((item) => (
                    <p key={item.id}>{item.name} - ${item.price}</p>
                ))}
            </ul>
        ) : ( <p>Your cart is currently empty.</p>)
        }
    </section>
  );
}

export default Cart;