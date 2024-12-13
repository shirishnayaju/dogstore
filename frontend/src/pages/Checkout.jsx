import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically process the payment and create an order
    console.log('Processing order', { items, total, address });
    clearCart();
    alert('Thank you for your order!');
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="address">Shipping Address</Label>
          <Input 
            type="text" 
            id="address" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Order Summary</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p className="font-bold mt-2">Total: ${total.toFixed(2)}</p>
        </div>
        <Button type="submit" className="w-full">Place Order</Button>
      </form>
    </div>
  );
}