import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";

export default function Admin() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  if (!user || !user.isAdmin) {
    return <div className="text-center mt-8 text-xl">Access denied. Admin only.</div>;
  }

  const onSubmit = (data) => {
    console.log('New product data:', data);
    const newProduct = { ...data, id: Date.now().toString() };
    setProducts([...products, newProduct]);
    reset();
    console.log('Product added to local state:', newProduct);
    console.log('Updated products list:', [...products, newProduct]);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Product Name</Label>
            <Input 
              id="name" 
              {...register("name", { 
                required: "Product name is required",
                minLength: {
                  value: 3,
                  message: "Product name must be at least 3 characters"
                }
              })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="price">Price</Label>
            <Input 
              type="number" 
              id="price" 
              step="0.01"
              {...register("price", { 
                required: "Price is required",
                min: {
                  value: 0.01,
                  message: "Price must be greater than 0"
                }
              })}
            />
            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <textarea 
              id="description" 
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" 
              rows="4"
              {...register("description", { 
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters"
                }
              })}
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="image">Image URL</Label>
            <Input 
              id="image" 
              {...register("image", { 
                required: "Image URL is required",
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: "Invalid URL"
                }
              })}
            />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
          </div>
          
          <Button type="submit" className="w-full">Add Product</Button>
        </form>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="border p-4 rounded-lg">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-600">Price: ${parseFloat(product.price).toFixed(2)}</p>
              <p className="text-gray-700 mt-2">{product.description}</p>
              <img src={product.image} alt={product.name} className="mt-2 w-full h-40 object-cover rounded-md" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

