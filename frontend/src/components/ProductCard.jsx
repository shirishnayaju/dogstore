import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-auto mb-4" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <Link to={`/products/${product.id}`}>
        <Button className="mt-4">View Details</Button>
      </Link>
    </div>
  );
}