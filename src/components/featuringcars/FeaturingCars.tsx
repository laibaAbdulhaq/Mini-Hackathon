"use client";
import React, { useState } from "react";
import Link from "next/link";

interface Car {
  Id:number;  
  name: string;
  price: string;
  imageUrl: string;
  releaseDate?: string;
  launchDate?: string;
  reviews: number;
  rating: number;
}

type TabType = "popular" | "upcoming" | "newlyLaunched";

const carsData: Record<TabType, Car[]> = {
  popular: [
    { Id:1, name: "Land Cruiser", price: "PKR 1.20 crore", imageUrl: "/land cruiser.jpeg", reviews: 621, rating: 5 },
    { Id:2, name: "Suzuki Swift", price: "PKR 43.4 - 47.2 lacs", imageUrl: "/Suzuki Swift.jpg", reviews: 199, rating: 3 },
    { Id:3, name: "Toyota Fortuner", price: "PKR 14.5 - 1.99 crore", imageUrl: "/Toyota Fortuner.jpeg", reviews: 458, rating: 3 },
    { Id:4, name: "Honda Civic", price: "PKR 86.6 - 99.0 lacs", imageUrl: "/Honda Civic.jpeg", reviews: 357, rating: 4 },
  ],
  upcoming: [
    { Id:5, name: "Toyota Yaris", price: "PKR 44.8 - 63.2 lacs", imageUrl: "/Toyota Yaris.jpeg", releaseDate: "Coming Soon", reviews: 0, rating: 0  },
    { Id:6, name: "Honda HR-V", price: "PKR 76.5 - 79.0 lacs", imageUrl: "/Honda HR-V.jpeg", releaseDate: "Expected Dec 2024", reviews: 0, rating: 0 },
    { Id:7, name: "Hyundai Elantra", price: "PKR 97.0 lacs", imageUrl: "/Hyundai Elantra.jpeg", releaseDate: "Expected Late 2025", reviews: 0, rating: 0 },
    { Id:8, name: "Kia Sorento", price: "PKR 90.0 - 95.0 lacs", imageUrl: "/KIA Sorento.jpeg", releaseDate: "Expected Early 2025", reviews: 0, rating: 0 },
  ],
  newlyLaunched: [
    { Id:9, name: "Hyundai Sonata", price: "PKR 1.12 crore", imageUrl: "/Hyundai Sonata.jpg", launchDate: "Launched in 2024", reviews: 234, rating: 3 },
    { Id:11, name: "MG ZS EV", price: "PKR 1.3 - 1.5 crore", imageUrl: "/MG ZS EV.jpg", launchDate: "Launched in 2024", reviews: 668, rating: 3 },
    { Id:12, name: "Toyota Fortuner", price: "PKR 1.45 - 1.99 crore", imageUrl: "/Toyota Fortuner.png", launchDate: "Launched in 2023", reviews: 765, rating: 5 },
    { Id:13, name: "Honda Accord", price: "PKR 2.3 crore", imageUrl: "/Honda Accord.jpg", launchDate: "Launched in 2023", reviews: 534, rating: 4 },
  ],

};

const FeaturedCars: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("popular");

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured New Cars</h2>
          <a href="#" className="text-blue-600">View All New Cars</a>
        </div>

        <div className="flex space-x-8 mb-4">
          <button onClick={() => handleTabChange("popular")} className={`text-lg ${activeTab === "popular" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}>
            Popular
          </button>
          <button onClick={() => handleTabChange("upcoming")} className={`text-lg ${activeTab === "upcoming" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}>
            Upcoming
          </button>
          <button onClick={() => handleTabChange("newlyLaunched")} className={`text-lg ${activeTab === "newlyLaunched" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}>
            Newly Launched
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {carsData[activeTab].map((car) => (
            <Link href={`/cars/${car.Id}`} key={car.Id} >
            <div  className="border rounded-lg p-4 text-center shadow-md">
              <img src={car.imageUrl} alt={car.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-green-600">{car.price}</p>
              </div>
              {/* Conditional rendering for release date and launch date */}
              {car.releaseDate && <p className="text-gray-500 text-sm">Release Date: {car.releaseDate}</p>}
              {car.launchDate && <p className="text-gray-500 text-sm">Launch Date: {car.launchDate}</p>}
             
              
              
              <div className="flex items-center justify-center mt-2 space-x-1 text-orange-400">
                {Array.from({ length: car.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {Array.from({ length: 5 - car.rating }).map((_, i) => (
                  <span key={i} className="text-gray-300">★</span>
                ))}
              </div>
              <p className="text-gray-500 text-sm">{car.reviews} Reviews</p>
            </Link>
            
          ))}
        
        </div>
       
      </div>
    </section>
  );
};

export default FeaturedCars;
