"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
 const Navbar = ()=>{
    return(
        <div className="bg-black text-white py-3 px-4">
          <nav className="flex justify-between items-center max-w-7xl mx-auto">

            {/* Left Section - Logo */}
            <div className="flex items-center space-x-4">

              <img src="/logo.png" alt="logo" width={120}  height={40} className="object-contain"/>

            </div>

            {/* Center Section - Navbar Links */}
            <div  className="flex space-x-6 text-sm">
              
                <Link href="/" className="hover:text-red-600">Home</Link>
                <Link href="/newcars" className="hover:text-red-600" >NewCars</Link>
                <Link href="/usedcars" className="hover:text-red-600">UsedCars</Link>
                <Link href="/bikes"  className="hover:text-red-600">Bikes</Link>
                <Link href="/autostore"  className="hover:text-red-600">AutoStore</Link>
                <Link href="contactus"  className="hover:text-red-600">ContactUs</Link>
                <Link href="booking"  className="hover:text-red-600">Booking</Link>

            </div>  
            
            {/* Right Section - Auth Links and Post Ad Button */}
          <div className="flex items-center space-x-3">

                <Link href="/"className="text-xs hover:text-red-500">Login</Link>
                <Link href="/"className="text-xs hover:text-red-500">SignUp</Link>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-xs">
                Post an Ad</button>
          </div>

          </nav>
        </div>
        
          
       
    )
}
export default Navbar