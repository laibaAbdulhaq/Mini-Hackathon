import react from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "../footer/page";
const buttonStyle = "bg-blue-600 text-white border-none py-2 px-4 rounded cursor-pointer hover:bg-blue-700 transition duration-300"
export const metadata={
    title:"NewCars"
  }
 const NewCars=()=>{
    return(
           <div className="bg-slate-300">
            <Navbar/>
     <a href="NewCars " ></a>

     <div className=" text-center py-0">
      <h1 className="text-3xl mb-4">New Cars 2024 Price in Pakistan, Images, Reviews & Specs</h1>
      
      <img src="/Honda Altas.jpeg" alt="Honda Altas 2024"  className="mx-auto max-w-[40%] w-1/2 h-auto mb-5 " />
      <p className="text-base leading-6 mb-5 max-w-xl mx-auto">
      Honda Altas 2024 offers a blend of reliability, fuel efficiency, 
      and comfortable driving experience.
      It's known for its spacious interior, advanced safety features, 
      and smooth handling, making it a popular choice for daily commuting and family outings
     </p>
      <div className="flex flex-col items-center">
        <p className="text-xl font-bold mb-2">PKR 98,000,000</p>
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
export default NewCars