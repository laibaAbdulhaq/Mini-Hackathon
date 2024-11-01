"use client";
import { useParams } from "next/navigation";
import react, { useEffect } from "react";
import LandCruiserDetails from "@/app/cardetails/landcruiser/page";
import SuzukiSwiftDetails from "@/app/cardetails/suzukiswift/page";
import ToyotaFortunerDetails from "@/app/cardetails/toyotafortuner/page";
import HondaCivicDetails from "@/app/cardetails/hondacivic/page";


const CarDetailsPage = () => {
  const { carId }  = useParams(); // Extract car ID from the URL
  
  console.log("carsId:", carId);

  // Redirect to specific car detail pages based on the car ID
 return(<div>
      {carId === "1" && <LandCruiserDetails />}
      {carId === "2" && <SuzukiSwiftDetails />}
      {carId === "3" && <ToyotaFortunerDetails />}
      {carId === "4" && <HondaCivicDetails />}
      {carId &&!["1", "2", "3", "4"].includes && ( <p>Car details not found.</p>)}
      </div>
)
}
export default CarDetailsPage;
