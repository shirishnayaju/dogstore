import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { useCart } from '../context/CartContext';
import { Toast } from "../components/ui/toast";
import { VaccinationModal } from '../components/VaccinationModal';
import { ShoppingCart, Check } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    // Fetch product details from API
    // For this example, we'll use mock data
    const mockProduct = {
      id: id,
      name: 'Premium Dog Food',
      price: 29.99,
      description: 'High-quality dog food for your furry friend. Packed with essential nutrients to keep your dog healthy and happy.',
      image: '/placeholder.svg?height=300&width=300'
    };
    setProduct(mockProduct);
  }, [id]);

  if (!product) {
    return <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">{product.name}</h1>
        <p className="text-2xl font-semibold mb-4 text-green-600">${product.price.toFixed(2)}</p>
        <p className="mb-6 text-gray-600">{product.description}</p>
        <div className="flex space-x-4 mb-6">
          <Button 
            onClick={() => {
              addToCart({ ...product, quantity: 1 });
              setShowConfirmation(true);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white flex items-center"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
        </div>
        {showConfirmation && (
          <Toast
            title="Product Added"
            description={`${product.name} has been added to your cart.`}
            duration={3000}
            onClose={() => setShowConfirmation(false)}
          />
        )}
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-inner">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Product Details</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-green-500" />
              Made with high-quality, natural ingredients
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-green-500" />
              Balanced nutrition for adult dogs
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-green-500" />
              No artificial preservatives or flavors
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-green-500" />
              Supports healthy digestion and immune system
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

