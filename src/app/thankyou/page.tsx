"use client";
import React from "react";
import Link from "next/link";

const ThankYou: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-center">
      <h1 className="text-blue-600 text-3xl font-bold mb-4"><i>Thank You for Shopping!</i></h1>
      <p className="mb-6">Your order will be delivered in 3 business days.</p>
      <div className="flex space-x-4 mb-4">
        
        <a href="https://www.linkedin.com/in/laiba-abdulhaq-51ab0930b" target="_blank" rel="noopener noreferrer">
          <img src="/linkedIn logo.jpeg" alt="LinkedIn" className="w-10 h-10" />
        </a>
        
      </div>
      <p className="text-gray-500">Created by Laiba AbdulHaq.</p>
    </div>
  );
};

export default ThankYou;
