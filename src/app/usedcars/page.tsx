import react from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "../footer/page";
const buttonStyle = "bg-blue-600 text-white border-none py-2 px-4 rounded cursor-pointer hover:bg-blue-700 transition duration-300"
export const metadata={
    title:"UsedCars"
  }
 const UsedCars=()=>{
    return(
           <div className="bg-slate-300">
            <Navbar/>
     <a href="NewCars " ></a>

     <div className=" text-center py-0">
      <h1 className="text-3xl mb-4">Used Cars 2024 Price in Pakistan, Images, Reviews & Specs</h1>
      
      <img src="/Suzuki Alto.jpeg" alt="Suzuki Alto 2024"  className="mx-auto max-w-[40%] w-1/2 h-auto mb-5 " />
      <p className="text-base leading-6 mb-5 max-w-xl mx-auto">
      Explore the reliability and affordability of a used Suzuki Alto. Known for its compact design, 
      fuel efficiency, and easy maneuverability, the Suzuki Alto is perfect for city driving and tight parking spots.
      With a trusted reputation for low maintenance costs,
      it's an ideal choice for first-time buyers and those looking for a budget-friendly, reliable car
     </p>
      <div className="flex flex-col items-center">
        <p className="text-xl font-bold mb-2">PKR 25.9 lacs</p>
        <div className="button-row flex flex-row justify-center space-x-2">
      <button className={buttonStyle}>Make Payment</button>
      <button className={buttonStyle}>Request Bank Finance</button>
      <button className={buttonStyle}>Visit Place</button>
      <button className={buttonStyle}>Car Ispection</button>
    </div>
               
      </div>
           </div>
          </div>
          
    )
}
export default UsedCars