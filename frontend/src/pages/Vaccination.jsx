import React from 'react';
import VaccinationCard from '../components/vaccinationcard';

// This would typically come from an API
const vaccinations = [
  { id: 1, name: 'For 1 to 2 weeks', price: 29.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'For 1 to 2 weeks', price: 9.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'For 1 to 2 weeks', price: 49.99, image: '/placeholder.svg?height=200&width=200' },
];

export default function Vaccination() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Vaccine</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {vaccinations.map((vaccination) => (
          <VaccinationCard key={vaccination.id} vaccination={vaccination} />
        ))}
      </div>
    </div>
  );
}