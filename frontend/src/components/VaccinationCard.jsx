import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function VaccinationCard({ vaccination }) {
  return (
    <div className="border rounded-lg p-4">
      <img src={vaccination.image} alt={vaccination.name} className="w-full h-auto mb-4" />
      <h2 className="text-xl font-semibold">{vaccination.name}</h2>
      <p className="text-gray-600">${vaccination.price.toFixed(2)}</p>
      <Link to={`/vaccination/${vaccination.id}`}>
        <Button className="mt-4">View Details</Button>
      </Link>
    </div>
  );
}