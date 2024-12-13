import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from "../components/ui/button";

export default function Cart() {
  const { items, removeFromCart, total } = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty. Start shopping!</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h2 className="text-xl">{item.name}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <Link to="/checkout">
              <Button className="mt-4">Proceed to Checkout</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}