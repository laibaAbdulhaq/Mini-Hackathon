
import Link from "next/link";
import Navbar from "@/components/Navbar";
import React from 'react';
import Footer from "../footer/page";
export const metadata={
    title:"AutoStore"
  }

const AutoStore = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-200 ">
      <Navbar />
      {/* AutoStore Section */}
      <div className="flex-grow text-center py-8">
        <h1 className="text-4xl font-bold mb-6">Auto Store</h1>

       {/* Navigation Links */}
        <div className="flex justify-center space-x-8 my-5">
        <Link href="/"
           className="text-blue-600 text-lg hover:underline">Home
        </Link>
        <Link href="/usedcars"
           className="text-blue-600 text-lg hover:underline">Used Cars
        </Link>
        <Link href="/newcars"
         className="text-blue-600 text-lg hover:underline">New Car
        </Link>
        <Link href="/bikes"
           className="text-blue-600 text-lg hover:underline">Bikes
        </Link>
      </div>

        {/* Vehicle List */}
        <ul className="flex flex-wrap justify-center gap-10">
          <li className="text-center">
            <h2 className="text-2xl font-semibold mb-3">Tata Altroz</h2>
            <img src="/Tata Altroz.jpeg" alt="Tata Altroz" className="max-w-[200px] h-auto mb-4 rounded-lg shadow-md" />
          </li>
          <li className="text-center">
            <h2 className="text-2xl font-semibold mb-3">Maruti Baleno</h2>
            <img src="/Maruti Baleno.jpeg" alt="Maruti Baleno" className="max-w-[200px] h-auto mb-4 rounded-lg shadow-md" />
          </li>
          <li className="text-center">
            <h2 className="text-2xl font-semibold mb-3">Toyota Corolla</h2>
            <img src="/Toyota Corolla.jpeg" alt="Toyota Corolla" className="max-w-[300px] h-auto mb-4 rounded-lg shadow-md" />
          </li>
          <li className="text-center">
            <h2 className="text-2xl font-semibold mb-3">Hyundai Venue</h2>
            <img src="/Hyundai Venue.jpeg" alt="Hyundai Venue" className="max-w-[200px] h-auto mb-4 rounded-lg shadow-md" />
          </li>
          <li className="text-center">
            <h2 className="text-2xl font-semibold mb-3">Maruti Ciaz</h2>
            <img src="/Maruti Ciaz.jpeg" alt="Maruti Ciaz" className="max-w-[200px] h-auto mb-4 rounded-lg shadow-md" />
          </li>
        </ul>
      </div>

      <Footer/>
    </div>
 
  );
  
};

export default AutoStore;
