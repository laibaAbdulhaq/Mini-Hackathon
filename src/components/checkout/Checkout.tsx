"use client";
import React from "react";
import { useRouter } from "next/navigation";

const CheckoutForm: React.FC = () => {
    const router = useRouter();


    // Add form validation or submission logic here if needed
    const handlePlaceOrder = () => {
        console.log("Button clicked, navigating to thankyou page");
        router.push("/thankyou"); // Redirect to Thank You page
      };
  
  return (
    
    <section className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Enter your Details</h2>
        
        
        <form>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Card Number"
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Address"
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
          ></textarea>
          
          <div className="flex justify-center">
          <button
          onClick={(e) => {
            e.preventDefault(); // Prevents form submission if needed
            handlePlaceOrder();
          }}
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          Place your order
        </button>
        </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutForm;
