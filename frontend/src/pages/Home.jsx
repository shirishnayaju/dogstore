import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Shield, Calendar, Syringe } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Welcome to Gharpaluwa</h1>
      <p className="text-xl mb-8 text-gray-600">Your one-stop shop for all things canine!</p>
      
      <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Why Choose Gharpaluwa?</h2>
        <ul className="text-left list-disc list-inside mb-4 text-gray-700">
          <li>Wide selection of premium dog food, toys, and accessories</li>
          <li>Expert-curated products for dogs of all sizes and breeds</li>
          <li>Fast and reliable shipping to your doorstep</li>
          <li>Excellent customer service and support</li>
          <li>Regular discounts and special offers for our loyal customers</li>
        </ul>
      </div>

      <p className="text-lg mb-8 text-gray-600">
        At Doggy Delights, we understand that your furry friend is more than just a pet - they're family. 
        That's why we're committed to providing the highest quality products to keep your dog happy, 
        healthy, and tail-waggingly excited. From nutritious foods to durable toys and cozy beds, 
        we've got everything your canine companion needs to thrive.
      </p>

      <div className="bg-green-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-800">Dog Vaccination Information</h2>
        <p className="text-gray-700 mb-4">
          Keeping your dog up-to-date on vaccinations is crucial for their health and well-being. 
          Here's what you need to know about dog vaccinations:
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-left">
          <div className="bg-white p-4 rounded-lg shadow">
            <Shield className="w-8 h-8 text-blue-500 mb-2" />
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Core Vaccines</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Rabies</li>
              <li>Distemper</li>
              <li>Parvovirus</li>
              <li>Adenovirus</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Calendar className="w-8 h-8 text-green-500 mb-2" />
            <h3 className="text-lg font-semibold mb-2 text-green-600">Vaccination Schedule</h3>
            <p className="text-gray-600">
              Puppies typically start vaccines at 6-8 weeks old, with boosters every 3-4 weeks until 16 weeks old. 
              Adult dogs may need annual or triennial boosters.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Syringe className="w-8 h-8 text-purple-500 mb-2" />
            <h3 className="text-lg font-semibold mb-2 text-purple-600">Additional Vaccines</h3>
            <p className="text-gray-600">
              Depending on your dog's lifestyle and location, your vet may recommend additional vaccines such as:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Bordetella</li>
              <li>Leptospirosis</li>
              <li>Lyme Disease</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Always consult with your veterinarian to determine the best vaccination plan for your dog.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-yellow-800">New Customer?</h3>
          <p className="mb-4 text-gray-600">Sign up today and get 10% off your first order!</p>
          <Link to="/signup">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Sign Up Now</Button>
          </Link>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-blue-800">Returning Customer?</h3>
          <p className="mb-4 text-gray-600">Check out our latest arrivals and special offers!</p>
          <Link to="/products">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Shop Now</Button>
          </Link>
        </div>
      </div>

      <p className="text-lg text-gray-600">
        Join thousands of satisfied pet parents who trust Doggy Delights for their canine needs. 
        Your dog deserves the best, and we're here to deliver it!
      </p>
    </div>
  );
}