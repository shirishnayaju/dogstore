import React from 'react';
import ProductCard from '../components/ProductCard';

// This would typically come from an API
const products = [
  { id: 1, name: 'Dog Food', price: 29.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Dog Toy', price: 9.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'Dog Bed', price: 49.99, image: '/placeholder.svg?height=200&width=200' },
];

export default function Products() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}