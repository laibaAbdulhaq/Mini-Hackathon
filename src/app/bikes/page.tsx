import react from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "../footer/page";
const buttonStyle = "bg-blue-600 text-white border-none py-2 px-4 rounded cursor-pointer hover:bg-blue-700 transition duration-300"
export const metadata={
    title:"Bikes"
  }
 const Bikes=()=>{
    return(
           <div className="bg-slate-300">
            <Navbar/>
     <a href="NewCars " ></a>

     <div className=" text-center py-0">
      <h1 className="text-3xl mb-4">Bikes 2024 Price in Pakistan, Images, Reviews & Specs</h1>
      
      <img src="/Altas Honda.png" alt="Suzuki Alto 2024"  className="mx-auto max-w-[40%] w-1/2 h-auto mb-5 " />
      <p className="text-base leading-6 mb-5 max-w-xl mx-auto">
      "Discover the durability and performance of Atlas Honda bikes, designed for the roads of Pakistan. 
      Known for their fuel efficiency, low maintenance costs, and reliable build,
       Atlas Honda bikes are perfect for daily commuting and long-distance rides alike. 
      Experience smooth handling and trusted engineering with every ride."
     </p>
      <div className="flex flex-col items-center">
        <p className="text-xl font-bold mb-2">PKR 234,900</p>
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

export default Bikes