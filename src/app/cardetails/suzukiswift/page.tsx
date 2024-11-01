"use client";
import React from "react";

const SuzukiSwiftDetails = () => {
  const car = {
    name: "Suzuki Swift 2024",
    price: "PKR 43.4 47.2",
    imageUrl: "/Suzuki Swift.jpg",
    description: "Suzuki Swift 2024 offers a blend of reliability and performance...",
    details: {
      doors: 4,
      engine: "1197 CC",
      condition: "6.5 / 10",
      driven: "3,400 KM",
      suspensionType: "Soft Suspension",
      avgKmPerLtr: "13 Km per ltr",
      transmission: "Automatic",
      fuelType: "High Octane",
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4 md:px-0">
      {/* Title Section */}
      <h1 className="text-3xl font-bold text-center mb-4">{car.name} Price in Pakistan, Images, Reviews & Specs</h1>

      {/* Car Image */}
      <div className="flex justify-center mb-6">
        <img src={car.imageUrl} alt={car.name} className="w-1/2 rounded-lg shadow-lg" />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-300">Book a Test Drive</button>
        <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-300">Request Bank Finance</button>
        <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-300">Visit Place</button>
        <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-300">Car Inspection</button>
      </div>

      {/* Vehicle Description */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold">Vehicle Description</h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto mt-2">{car.description}</p>
      </div>

      {/* Vehicle Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm mb-6">
        <div><span className="font-bold">Number of Doors:</span> {car.details.doors}</div>
        <div><span className="font-bold">Engine:</span> {car.details.engine}</div>
        <div><span className="font-bold">Condition:</span> {car.details.condition}</div>
        <div><span className="font-bold">Driven:</span> {car.details.driven}</div>
        <div><span className="font-bold">Suspension Type:</span> {car.details.suspensionType}</div>
        <div><span className="font-bold">Avg Km per ltr:</span> {car.details.avgKmPerLtr}</div>
        <div><span className="font-bold">Transmission:</span> {car.details.transmission}</div>
        <div><span className="font-bold">Fuel Type:</span> {car.details.fuelType}</div>
      </div>

      {/* Price Display */}
      <div className="text-center mb-6">
        <p className="text-green-600 text-3xl font-bold">{car.price}</p>
      </div>

      {/* Make Payment Button */}
      <div className="flex justify-center">
        <button className="bg-blue-600 text-white py-2 px-8 rounded hover:bg-blue-700">Make Payment</button>
      </div>
    </div>
  );
};

export default SuzukiSwiftDetails;
